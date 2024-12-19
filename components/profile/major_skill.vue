<template>
  <ul class="flex flex-col gap-[20px]">
    <li class="text-[16px] font-semibold">Major Skill</li>
    <li
      v-for="(skill, index) in skills"
      :key="index"
      class="flex flex-col gap-[5px]"
    >
      <div class="flex justify-between">
        <span>{{ skill.value }}</span>
        <span class="text-gray-500">{{ skill.percent }}</span>
      </div>
      <div class="h-[4px] rounded bg-gray-200">
        <div
          :class="`h-full ${skill.percent_width} rounded-full bg-[#F78F42]`"
        ></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          value: 'HTML',
          percent: '97%',
          percent_width: 'w-[97%]',
        },
        {
          value: 'CSS',
          percent: '90%',
          percent_width: 'w-[90%]',
        },
        {
          value: 'JavaScript',
          percent: '85%',
          percent_width: 'w-[85%]',
        },
        {
          value: 'Node.js',
          percent: '85%',
          percent_width: 'w-[85%]',
        },
        {
          value: 'Database Management',
          percent: '80%',
          percent_width: 'w-[80%]',
        },
      ],
    }
  },
}
</script>

<style></style>
