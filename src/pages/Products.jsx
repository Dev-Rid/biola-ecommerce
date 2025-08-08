import { useState, useEffect } from 'react'
import { getProducts, subscribeToProducts } from '../lib/supabase'
import ProductGrid from '../Products/ProductGrid'
import ProductFilters from '../Products/ProductFilters'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'name'
  })

  useEffect(() => {
    fetchProducts()

    // Subscribe to real-time updates
    const subscription = subscribeToProducts((payload) => {
      console.log('Product update:', payload)
      fetchProducts() // Refetch products on any change
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    applyFilters()
  }, [products, filters])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data, error } = await getProducts()
      if (!error && data) {
        setProducts(data)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...products]

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category)
    }

    // Price filters
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice))
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice))
    }

    // Sort
    switch (filters.sortBy) {
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        break
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    setFilteredProducts(filtered)
  }

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters)
  }

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))].filter(Boolean)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          All Products
        </h1>
        <p className="text-gray-600">
          Discover our complete collection of quality products
        </p>
      </div>

      <ProductFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        categories={categories}
      />

      <div className="mb-4 flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      <ProductGrid products={filteredProducts} loading={loading} />
    </div>
  )
}

export default Products