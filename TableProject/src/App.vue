<script setup>
  import LayoutHeader from '@/components/layout/Header.vue';
  import LayoutSidebar from '@/components/layout/SiteBar.vue'
</script>

<template>
  <div class="container">
    <layout-header/>
    <layout-sidebar/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  @import "./styles/global.scss";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    max-width: 1400px;
    margin-left: 250px;
    padding: 30px;
    transition: 0.2s;
    margin-left: 0;
  }
  .sidebar-toggle {
    position: fixed;
    left: 0;
    width: 15px;
    background: var(--primary);
    height: 100%;
    top: 62px;
    z-index: 1;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
