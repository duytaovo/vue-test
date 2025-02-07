<script setup lang="ts">
import { defineProps } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { successToast } from '@/plugins/toast'

const store = useProductStore()

interface Props {
  product: {
    id: number
    title: string
    price: number
    description: string
  }
}

defineProps<Props>()

const deleteProduct = async (id: number) => {
  await store.deleteProduct(id)
  successToast('Đã xóa sản phẩm thành công').showToast()
  await store.fetchProducts() 
}
</script>

<template>
  <li class=" p-6 rounded-lg  transition-shadow duration-300 flex  fix-padding">
    <h3 class="text-xl font-semibold text-gray-800 fix-padding-left">{{ product.title }} - {{ product.price }} vnd</h3>
    <!-- <p class="text-gray-600 ">{{ product.description }}</p> -->
    <button 
      @click="deleteProduct(product.id)" 
      class=" ml-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 fix-padding-left "
    >
       Xóa
    </button>
  </li>
</template>

<style lang="scss" scoped>

</style>
