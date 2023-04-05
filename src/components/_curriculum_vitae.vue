<template>
  <div class="curriculum-vitae">
    <CodeLine>
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <template v-if="data[0].company">
        <VariableName name="experience" />
      </template>
      <template v-if="data[0].university">
        <VariableName name="education" />
      </template>
      <span class="variable">{{ title }}</span>
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space"></span>
      <span class="expression" v-if="isTs">(</span>
      <span class="type class" v-if="isTs && data[0].company">Job</span>
      <span class="type class" v-if="isTs && data[0].university">Education</span>
      <span class="expression" v-if="isTs">)[]</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data" :key="`entry-${index}`">
      <component
          :is="entry.company ? 'Job' : 'Education'"
          :data="entry"
          :isLast="index === data.length - 1"
      />
    </template>
    <CodeLine>
      <span class="expression">]</span>
      <span class="expression" v-if="isJs">;</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import VariableName from './_variable_name.vue'
import CodeLine from './_code_line.vue'
import Education from './_education.vue'
import Job from './_job.vue';

export default {
  props: ['data'],
  components: {
    CodeLine,
    Job,
    Education,
    VariableName
  }
}
</script>
