'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Search, User, Menu, Star, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    originalPrice: 129.99,
    image: '/wireless-headphones.png',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    inStock: 15,
    description: 'Premium wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: '/smartwatch-lifestyle.png',
    category: 'Electronics',
    rating: 4.3,
    reviews: 89,
    inStock: 8,
    description: 'Advanced fitness tracking and notifications'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    originalPrice: 99.99,
    image: '/running-shoes-on-track.png',
    category: 'Sports',
    rating: 4.7,
    reviews: 203,
    inStock: 25,
    description: 'Comfortable running shoes for all terrains'
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 149.99,
    originalPrice: 179.99,
    image: '/modern-coffee-maker.png',
    category: 'Home',
    rating: 4.4,
    reviews: 156,
    inStock: 12,
    description: 'Automatic drip coffee maker with timer'
  },
  {
    id: 5,
    name: 'Laptop Backpack',
    price: 49.99,
    originalPrice: 69.99,
    image: '/laptop-backpack.png',
    category: 'Accessories',
    rating: 4.2,
    reviews: 94,
    inStock: 30,
    description: 'Durable backpack with laptop compartment'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 59.99,
    originalPrice: 79.99,
    image: '/bluetooth-speaker.png',
    category: 'Electronics',
    rating: 4.6,
    reviews: 167,
    inStock: 18,
    description: 'Portable speaker with excellent sound quality'
  }
]

export default function HomePage() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartItems, setCartItems] = useState([])
  const [wishlist, setWishlist] = useState([])

  const categories = ['All', 'Electronics', 'Sports', 'Home', 'Accessories']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-slate-700" />
                <span className="text-xl font-bold text-slate-900">ShopHub</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="relative text-slate-600 hover:text-slate-900">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-slate-700 text-white">
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="relative text-slate-600 hover:text-slate-900">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-slate-700 text-white">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'text-slate-800 border-b-2 border-slate-700'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Premium Shopping Experience
          </h1>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Discover exceptional products with unmatched quality and sophisticated design
          </p>
          <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100 font-semibold px-8 py-3">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            {selectedCategory === 'All' ? 'Featured Products' : selectedCategory}
          </h2>
          <p className="text-slate-600 font-medium">
            {filteredProducts.length} products available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-slate-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-sm"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        wishlist.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-slate-600'
                      }`} 
                    />
                  </Button>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                      Sale
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500 ml-2 font-medium">
                    ({product.reviews})
                  </span>
                </div>
                <CardTitle className="text-lg mb-2 text-slate-900 font-semibold">{product.name}</CardTitle>
                <CardDescription className="text-sm mb-4 text-slate-600 leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                    {product.inStock} left
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button 
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium" 
                  onClick={() => addToCart(product)}
                  disabled={product.inStock === 0}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Cart Summary (Fixed Bottom) */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl p-4 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              <span className="font-semibold text-slate-900">
                {cartItemCount} items in cart
              </span>
              <span className="text-xl font-bold text-slate-800">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
