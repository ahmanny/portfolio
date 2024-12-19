import { defineStore } from 'pinia';

export const useMyThemeStore = defineStore('myThemeStore', {
  state: () => ({
    theme: 'light',
  }),
  actions: {
   async applyTheme() {
      const html = document.documentElement;
      html.classList.toggle('dark', this.theme === 'dark');
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    },
  },
  persist: true,
});
