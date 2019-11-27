<template>
  <div id="app">
    <div class="class">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
