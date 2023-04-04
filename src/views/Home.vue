<template>
  <div id="view" class="hidden">
    <CookieInfo />
    <CodeLine />
    <Profile :data="data" />
    <Section :section="Section.Skills"></Section>
    <CodeLine />
    <template v-for="skillset in data.skills" :key="`${skillset.title}`">
      <SkillSet :title="skillset.title" :skillset="skillset" />
    </template>
    <CodeLine />
    <Section :section="Section.Experience"></Section>
    <CodeLine />
    <CurriculumVitae :data="data.experience" />
    <CodeLine />
    <Section :section="Section.Education"></Section>
    <CodeLine />
    <CurriculumVitae :data="data.education" />
    <CodeLine />
    <CodeLine />
    <ShowCaseSection :section="Section.Projects" name="projects" :data="data.projects" />
<!--    <ShowCaseSection-->
<!--        :section="Section.ExtraCurricular"-->
<!--        name="ExtraCurricular"-->
<!--        :data="data.ExtraCurricular"-->
<!--    />-->
    <Legal />
    <CodeLine />
    <Privacy />
  </div>
</template>

<script lang="ts">
import * as data from '../content/data'

import SkillSet from '../components/_skill_set.vue'
import Section from '../components/_section.vue'
import CodeLine from '../components/_code_line.vue'
import CurriculumVitae from '../components/_curriculum_vitae.vue'
import ShowCaseSection from '../components/_show_case_section.vue'
import Legal from '../components/_legal.vue'
import Privacy from '../components/_privacy.vue'
import Profile from '../components/_profile.vue'
import CookieInfo from '../components/_cookie_info.vue'

export default {
  data() {
    return {
      data
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  components: {
    SkillSet,
    Section,
    CodeLine,
    CurriculumVitae,
    ShowCaseSection,
    Legal,
    Privacy,
    Profile,
    CookieInfo
  }
}
</script>
