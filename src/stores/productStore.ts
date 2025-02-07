import { defineStore } from 'pinia'
import axios from 'axios'

interface Product {
  id: number
  title: string
  price: number
  description: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    filteredProducts: [] as Product[],
    selectedProduct: null as Product | null,
    loading: false,
    searchTerm: '',
  }),

  getters: {
    getFilteredProducts(state) {
      return state.searchTerm
        ? state.products.filter(
            (product) =>
              product.title &&
              product.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
          )
        : state.products
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const response = await axios.get('http://localhost:3000/products')
        this.products = response.data
        this.filteredProducts = response.data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    setSearchTerm(term: string) {
      this.searchTerm = term
      this.filteredProducts = this.getFilteredProducts
    },

    async addProduct(newProduct: Product) {
      try {
        const response = await axios.post(
          'http://localhost:3000/products',
          newProduct
        )
        this.products.push(response.data)
        this.filteredProducts = this.getFilteredProducts
      } catch (error) {
        console.error(error)
      }
    },

    async updateProduct(id: number, updatedData: Partial<Product>) {
      try {
        const response = await axios.patch(
          `http://localhost:3000/products/${id}`,
          updatedData
        )
        const index = this.products.findIndex((p) => p.id === id)
        if (index !== -1) {
          this.products[index] = response.data
          this.filteredProducts = this.getFilteredProducts
        }
      } catch (error) {
        console.error(error)
      }
    },
    async deleteProduct(id: number) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        this.products = this.products.filter((p) => p.id !== id)
        this.filteredProducts = this.getFilteredProducts
      } catch (error) {
        console.error(error)
      }
    },
  },
  persist: true,
})
