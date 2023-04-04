<template>
  <div class="privacy" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment v-if="collapsed" comment="Privacy">
      <Collapsed />
    </Comment>
    <CommentBlock v-else :comment="privacy" />
  </div>
</template>

<script lang="ts">
import { track } from '../util'

import Comment from './_comment.vue'
import CommentBlock from './_comment_block.vue'
import Collapsed from './_collapsed.vue'

const openOnStart = window.location.hash === '#legal'

export default {
  data() {
    return {
      collapsed: !openOnStart,
      privacy: `
        When you use this website, it may send one or more cookies 
        -- a small text file containing a string of alphanumeric characters --
        to your computer that uniquely identifies your browser and lets me 
        enhance your navigation through the page. 
        The cookie 🍪 allows me to keep track of analytics data, 
        using Google Analytics to measure traffic and usage trends of the website.
        These analytics information is always used in aggregate form such that it 
        cannot reasonably be manipulated to identify any particular individual user.
        `
    }
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed
      track((this.collapsed ? 'Close' : 'Open') + 'Legal', 'none')
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  components: {
    Comment,
    CommentBlock,
    Collapsed
  }
}
</script>
