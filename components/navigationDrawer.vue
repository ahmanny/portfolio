<template>
  <div
    class="flex h-full w-[88px] flex-col gap-[20px] bg-[#FFFFFF] dark:bg-[#1C1C1C] xl:h-[1016px] xl:rounded-[12px] xl:p-[20px]"
  >
    <ThemeToggle class="hidden xl:block" />
    <nav class="flex flex-1 flex-col items-center justify-center gap-[20px]">
      <el-tooltip
        v-for="section in sections"
        :key="section.id"
        content=""
        placement="top"
        effect="customized"
      >
        <template #content>
          <span class="capitalize">{{ section.id }}</span>
        </template>
        <button
          @click="scrollToSection(section.id)"
          :class="[
            'navbarItem text-[45px]',
            currentActiveSection === section.id
              ? 'active dark:text-black dark:hover:text-opacity-60'
              : '',
          ]"
        >
          <i :class="`mdi ${section.icon} text-[26px]`"></i>
        </button>
      </el-tooltip>
    </nav>
  </div>
</template>

<script setup>
const currentActiveSection = ref('education')

const sections = [
  {
    id: 'home',
    icon: 'mdi-home',
  },
  {
    id: 'service',
    icon: 'mdi-code-tags',
  },
  {
    id: 'education',
    icon: 'mdi-book-open-variant',
  },
  {
    id: 'experience',
    icon: 'mdi-briefcase-variant',
  },
  // {
  //   id: 'portfolio',
  //   icon: 'mdi-file-document',
  // },
  {
    id: 'contact',
    icon: 'mdi-message-processing',
  },
]

const setActiveSection = (entry) => {
  if (entry.isIntersecting && entry.target.id) {
    currentActiveSection.value = entry.target.id
    console.log(entry.target.id, entry.isIntersecting)
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(setActiveSection)
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })
  })
})
</script>

<style></style>
