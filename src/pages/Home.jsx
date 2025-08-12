import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react'
import { getProducts } from '../lib/supabase'
// import ProductGrid from '../components/Products/ProductGrid'
import Button from '../UI/Button'
import ProductGrid from '../Products/ProductGrid'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const { data, error } = await getProducts({ limit: 8 })
        if (!error && data) {
          setFeaturedProducts(data.slice(0, 8))
        }
      } catch (error) {
        console.error('Error fetching featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data is protected with industry-standard encryption'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50, delivered within 2-3 days'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our customer service team is here to help anytime'
    },
    {
      icon: Star,
      title: 'Quality Products',
      description: 'Carefully curated products from trusted brands'
    }
  ]

  return (
    // <div></div>
    <div className="min-h-screen overflow-x-hidden ">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r  from-gray-50 to-gray-800 text-white py-20"> */}
      <section className="bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-gray-300">
              Welcome to Biola<span className='text-yellow-500'>Mart</span> Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-up text-gray-400">
              Discover amazing products at unbeatable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800 text-white py-20">
      
      {/* <section className="py-16 bg-gray-50"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">
              Why Choose EcomStore?
            </h2>
            <p className="text-lg text-gray-400">
              We're committed to providing the best shopping experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                  <feature.icon className="w-10 h-10 text-[rgb(54,117,107)] rounded-lg" />
                </div>
                <h3 className="text-lg font-semibold textgray900 text-[rgb(54,117,107)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-800">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      
      {/* <section className="py-16"> */}
      <section className="bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-400">
              Check out our most popular items
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} loading={loading} />
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="flex items-center mx-auto">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}

      {/* <section className="bg-primary-600 text-white py-16"> */}
      <section className="bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter for exclusive deals and new arrivals
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-300 focus:outline-none focus:ring-2 border-2 border-gray-300 focus:ring-gray-300 "
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home