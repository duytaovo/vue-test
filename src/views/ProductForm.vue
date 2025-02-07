<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useRouter } from 'vue-router'
import { successToast } from '@/plugins/toast'


const store = useProductStore()
const router = useRouter()

const newProduct = ref({
  title: '',
  price: 0,
  description: ''
})

const handleSubmit = async () => {
  await store.addProduct(newProduct.value)
  successToast('Đã thêm sản phẩm thành công.').showToast()
  newProduct.value = { title: '', price: 0, description: '' }
  router.push('/') 
}


</script>

<template>
  <div class="max-w-lg mx-auto p-6  rounded-lg mt-2 fix-padding">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Thêm sản phẩm mới</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Tên sản phẩm</label>
        <input 
          v-model="newProduct.title" 
          type="text" 
          placeholder="Nhập tên sản phẩm" 
          required
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 fix-padding"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Giá sản phẩm</label>
        <input 
          v-model="newProduct.price" 
          type="number" 
          placeholder="Nhập giá" 
          required
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 fix-padding"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Mô tả</label>
        <textarea 
          v-model="newProduct.description" 
          placeholder="Nhập mô tả sản phẩm" 
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 fix-padding"
          rows="4"
        ></textarea>
      </div>

      <button 
        type="submit" 
        class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Thêm sản phẩm
      </button>
    </form>
  </div>
</template>
<style lang="scss" scoped>

</style>