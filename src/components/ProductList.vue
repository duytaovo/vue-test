<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router' 
import { useProductStore } from '@/stores/productStore'
import ProductItem from './ProductItem.vue'

const store = useProductStore()
const searchTerm = ref('')
const router = useRouter() 

onMounted(() => {
  store.fetchProducts()
})

const handleSearch = () => {
  store.setSearchTerm(searchTerm.value)
}

const goToAddProductPage = () => {
  router.push('/add-product') 
}
</script>

<template>
  <div class="p-2 space-y-4 fix-padding">
    <div class="flex justify-around">
      <input 
        v-model="searchTerm" 
        placeholder="Tìm kiếm sản phẩm..." 
        @input="handleSearch" 
        class="p-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2 fix-padding"
      />
      <button 
        @click="goToAddProductPage" 
        class="ml-2 py-2 px-4 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors duration-300 fix-padding"
      >
        Thêm sản phẩm
      </button>
    </div>
    
    <div v-if="store.loading" class="text-center text-gray-500">Đang tải...</div>
    
    <ul v-else class="space-y-4">
      <ProductItem v-for="product in store.filteredProducts" :key="product.id" :product="product" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
