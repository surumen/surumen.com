<template>
  <div class="section" :data-value="title">
    <CodeLine>
      <span class="comment">{{ state.currentLanguageHelper.commentEnd }}</span>
      <template v-for="section in sections" :key="`comment-${section}`">
        <span
          class="comment"
          :class="{
            collapsible: title !== section,
            active: title === section
          }"
          >{{ stars(section) }}</span
        >
      </template>
      <span class="comment">
        {{ state.currentLanguageHelper.commentChar }}{{ state.currentLanguageHelper.commentChar }}
      </span>
    </CodeLine>
    <CodeLine>
      <span class="comment">{{ state.currentLanguageHelper.commentChar }}</span>
      <template v-for="section in sections" :key="`comment-${section}`">
        <span
          class="white-space space"
          :class="{
            collapsible: title !== section
          }"
        />
        <span
          class="comment selectable"
          :class="{
            collapsible: title !== section,
            active: title === section
          }"
          @click="scrollToSection(section)"
          >{{ section }}</span
        >
      </template>
      <span class="white-space space" :key="`space-${section}`"></span>
      <span class="comment">{{ state.currentLanguageHelper.commentChar }}</span>
    </CodeLine>
    <CodeLine>
      <span class="comment">{{ state.currentLanguageHelper.commentChar }}</span>
      <template v-for="section in sections" :key="`comment-${section}`">
        <span
          class="comment"
          :class="{
            collapsible: title !== section,
            active: title === section
          }"
          >{{ stars(section) }}</span
        >
      </template>
      <span class="comment">
        {{ state.currentLanguageHelper.commentChar }}{{ state.currentLanguageHelper.commentEnd }}
      </span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
import { Section } from '@/content/data_types'
import { animate, Easing, track } from '@/util'

import CodeLine from './_code_line.vue'

export default {
  props: ['section'],
  methods: {
    stars(str: string): any {
      return new Array(str.length + 2).join(this.state.currentLanguageHelper.commentChar)
    },
    scrollToSection(name: string) {
      if (name !== this.title) {
        track('navigateTo', name)
        const target = document.querySelector(`.section[data-value=${name}]`)
        animate({
          target: document.querySelector('html'),
          key: 'scrollTop',
          value: (<HTMLElement>target).offsetTop,
          duration: 300,
          ease: Easing.EaseInOut
        })
      }
    }
  },
  computed: {
    sections() {
      const keys = Object.keys(Section)
      return keys.slice(keys.length / 2)
    },
    title(): any {
      return Section[this.section]
    }
  },
  components: {
    CodeLine
  }
}
</script>
