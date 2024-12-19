<template>
  <section class="mx-auto w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-12 text-center md:w-[460px]">
        <h2 class="mb-2 text-2xl font-bold md:text-3xl xl:text-4xl"
          >Portfolio</h2
        >
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          Explore my work as a Fullstack Engineer
        </p>
      </div></div
    >
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="item in categories"
        :key="item"
        :label="item"
        :name="item"
      >
        <div class="grid grid-cols-2 gap-[12px] xl:grid-cols-3">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="card aspect-square cursor-pointer rounded-[12px] transition-all duration-700 hover:bg-[#F78F42CC]"
          >
            {{ project.title }}
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'All Projects',
      categories: ['All Projects', 'Frontend', 'Backend', 'Fullstack', 'APIs'],
      projects: [
        {
          id: 1,
          title: 'Project 1',
          techStack: ['Vue', 'Node.js'],
          image: 'path-to-image.jpg',
          category: 'Frontend',
          demoLink: 'https://example.com/demo1',
          codeLink: 'https://github.com/example1',
        },
        {
          id: 2,
          title: 'Project 2',
          techStack: ['Vue', 'Node.js'],
          image: 'path-to-image.jpg',
          category: 'Backend',
          demoLink: 'https://example.com/demo1',
          codeLink: 'https://github.com/example1',
        },
        {
          id: 3,
          title: 'Project 3',
          techStack: ['Vue', 'Node.js'],
          image: 'path-to-image.jpg',
          category: 'Frontend',
          demoLink: 'https://example.com/demo1',
          codeLink: 'https://github.com/example1',
        },
        {
          id: 4,
          title: 'Project 4',
          techStack: ['Vue', 'Node.js'],
          image: 'path-to-image.jpg',
          category: 'Fullstack',
          demoLink: 'https://example.com/demo1',
          codeLink: 'https://github.com/example1',
        },
        // More projects...
      ],
    }
  },
  computed: {
    filteredProjects() {
      return this.activeName === 'All Projects'
        ? this.projects
        : this.projects.filter(
            (project) => project.category === this.activeName,
          )
    },
  },
}
</script>

<style></style>
