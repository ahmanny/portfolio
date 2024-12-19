<template>
  <div class="flex items-center justify-between p-[12px]">
    <div
      @click="profile_drawer = true"
      class="h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full bg-[#FFFFFF]"
    >
      <img src="/profile.png" alt="Solomon"
    /></div>
    <div class="flex items-center justify-center gap-4 overflow-hidden">
      <ThemeToggle />
      <button
        @click="nav_drawer = true"
        aria-label="Toggle Menu"
        class="flex h-[44px] w-[44px] items-center justify-center hover:bg-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <line
            x1="6"
            y1="6"
            x2="18"
            y2="6"
            stroke="#4B5563"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            stroke="#4B5563"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="6"
            y1="18"
            x2="18"
            y2="18"
            stroke="#4B5563"
            stroke-width="2"
            stroke-linecap="round"
          /></svg
      ></button>

      <el-drawer
        v-model="profile_drawer"
        size="300"
        direction="ltr"
        :with-header="false"
        class="nav"
      >
        <Profile ref="profile" />
      </el-drawer>
      <el-drawer
        v-model="nav_drawer"
        size="88"
        :with-header="false"
        class="nav"
      >
        <NavigationDrawer ref="navigationDrawer" />
      </el-drawer>
    </div>
  </div>
</template>

<script setup>
const nav_drawer = ref(false)
const profile_drawer = ref(false)
</script>

<style scoped>
::v-deep(.el-drawer__body) {
  padding: 0 !important;
}
::v-deep(.el-drawer__wrapper) {
  padding: 0 !important;
}
</style>
