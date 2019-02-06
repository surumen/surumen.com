<template>
  <div class="stage" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      :indentation="1"
      v-if="collapsed"
      :comment="`${year} - ${data.university} - ${data.major}`"
    >
      <Collapsed/>
    </Comment>
    <template v-if="!collapsed">
      <CodeLine>
        <Tab/>
        <span class="expression">{</span>
      </CodeLine>
      <slot/>
      <CodeLine>
        <Tab/><Tab/>
        <VariableName name="university"/>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <String :value="data.university"></String>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab/><Tab/>
        <VariableName name="major"/>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <String :value="data.major"></String>
        <span class="expression">,</span>
      </CodeLine>
      <template v-if="data.courses">
        <CodeLine>
          <Tab/><Tab/>
          <span class="variable">courses</span>
          <span class="expression">:</span>
          <span class="white-space space"></span>
          <span class="string">
            {{state.currentLanguageHelper.multilineString}}
          </span>
        </CodeLine>
        <MultiLineString
          :value="data.courses.trim()"
          :indentation="3"
        />
        <CodeLine>
          <Tab/><Tab/>
          <span class="string">
            {{state.currentLanguageHelper.multilineString}}
          </span>
          <span class="expression">,</span>
        </CodeLine>
      </template>
      <CodeLine>
        <Tab/><Tab/>
        <VariableName name="graduation"/>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.graduation"></Date>
        <span class="expression">,</span>
      </CodeLine>

      <CodeLine>
        <Tab/><Tab/>
        <VariableName name="activities"/>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <span class="expression">[</span>
      </CodeLine>
      <CodeLine v-for="(key) in data.activities" :key="key">
        <Tab/><Tab/><Tab/>
        <span class="variable">{{key}}</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab/><Tab/>
        <span class="expression">],</span>
      </CodeLine>


      <CodeLine>
        <Tab/>
        <span class="expression">}</span>
        <span class="expression" v-if="isRuby">.with_indifferent_access</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine v-if="!isLast"/>
    </template>
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import CodeLine from './_code_line.vue';
  import Comment from './_comment.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import MultiLineString from './_multi_line_string.vue';
  import Date from './_date.vue';
  import Collapsed from './_collapsed.vue';
  import VariableName from './_variable_name.vue';

  export default {
    data() {
      return {
        collapsed: true,
      };
    },
    props: [
      'data',
      'isLast',
      'abbreviation',
    ],
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Stage', this.abbreviation);
      },
    },
    computed: {
      year() {
        return this.data.graduation.getFullYear();
      },
      multiStringStart() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Stage', this.abbreviation);
      },
    },
    components: {
      CodeLine,
      Comment,
      Tab,
      String,
      MultiLineString,
      Date,
      Collapsed,
      VariableName,
    },
  };
</script>


