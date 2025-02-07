<template>
  <div id="root">
    <div id="app-frame">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductList from '@/components/ProductList.vue'
import { onMounted, ref } from 'vue'

export default defineComponent({
  components: {
  }
  
})
</script>
