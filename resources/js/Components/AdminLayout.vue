<!-- resources/js/Layouts/AdminLayout.vue -->
<template>
  <div class="flex h-screen">
    <!-- Sidebar Component -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1 p-4 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/Components/Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
