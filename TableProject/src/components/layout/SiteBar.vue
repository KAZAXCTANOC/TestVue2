<script setup>
    import {ref} from 'vue'

    const links = ref([
            {name:'testView1', href: '/testView1'},
            {name:'testView2', href: '/testView2'},
        ])
</script>

<template>
    <div class="sidebar">
        <router-link class="link"
        v-for="link in links" :key="link.name" :to="link.href"
        >{{link.name}}</router-link>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  .link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>