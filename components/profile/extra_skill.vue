<template>
  <div class="flex flex-col gap-[20px]">
    <div class="text-[16px] font-semibold">Extra Skill</div>
    <div
      class="text_base2 text_base2_dark flex flex-wrap items-center justify-start gap-[8px]"
    >
      <p
        class="px-[10px] py-[4px]"
        v-for="(skill, index) in extra_skills"
        :key="index"
        >{{ skill.value }}</p
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extra_skills: [
        {
          value: 'Bootstrap',
        },
        {
          value: 'Materialize',
        },
        {
          value: 'Sass',
        },
        {
          value: 'Stylus',
        },
        {
          value: 'Less',
        },
        {
          value: 'Gulp',
        },
        {
          value: 'Grunt',
        },
        {
          value: 'GIT Knowledge',
        },
        {
          value: 'Webpack',
        },
      ],
    }
  },
}
</script>

<style></style>
