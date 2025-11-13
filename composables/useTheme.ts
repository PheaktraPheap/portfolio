export function useTheme() {
  const theme = ref<'light' | 'dark'>('light');

  const applyTheme = (value: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', value === 'dark');
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    theme.value = savedTheme || 'light';
    applyTheme(theme.value);
  });

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
    document.documentElement.classList.toggle('dark', theme.value === 'dark');
};


  return { theme, toggleTheme };
}
