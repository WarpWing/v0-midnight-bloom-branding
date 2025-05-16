"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Moon, ShoppingBag, Menu } from "lucide-react"
import * as THREE from "three"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* 3D Background Canvas - Fixed position behind content */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
          <ambientLight intensity={0.3} />

          {/* Enhanced lighting to compensate for removed moon */}
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#d8b4fe" />
          <pointLight position={[-10, -10, 10]} intensity={0.6} color="#ff00ff" />
          <pointLight position={[0, 0, 5]} intensity={0.4} color="#ffffff" />

          {/* Static particle effect */}
          <StaticParticleEffect />

          {/* Stars for mystical background */}
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade={false} speed={0} />

          {/* Completely disabled orbit controls to keep everything static */}
          <OrbitControls enabled={false} enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Regular HTML Content - Scrollable and on top of the 3D background */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon className="h-6 w-6 text-white" />
                <span className="text-xl font-semibold text-white">Midnight Bloom</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
                  New Collection
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
                  Women
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
                  Men
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
                  Accessories
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:text-purple-300 transition-colors">
                  About
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Link>
                <Button variant="ghost" className="md:hidden text-white" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section with Centered Text */}
          <section className="h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-purple-900/30"></div>

              {/* Flashy color accents */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-300/30 blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-fuchsia-400/20 blur-3xl"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-yellow-300/20 blur-3xl"></div>
            </div>

            <div className="container relative mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="text-center"
              >
                {/* Centered "WEAR THE STORY" text with slower shimmer effect */}
                <div className="inline-block relative">
                  <div className="flex flex-col items-center text-center text-7xl md:text-8xl font-bold tracking-tight leading-none mb-12 relative z-10">
                    <span className="slow-shimmer-text">WEAR</span>
                    <span className="slow-shimmer-text">THE</span>
                    <span className="slow-shimmer-text">STORY</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="min-h-screen py-16 bg-black/70 backdrop-blur-md">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-12">Latest Collection</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4 bg-purple-900/30">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                        height={800}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg font-medium text-white">{product.name}</h3>
                    <p className="text-purple-300">${product.price}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900/50">
                  View All
                </Button>
              </div>
            </div>
          </section>

          {/* Brand Story */}
          <section className="min-h-screen py-16 bg-gradient-to-b from-black/80 to-purple-900/50 backdrop-blur-md">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Our Story</h2>
                  <p className="text-purple-200 mb-8 leading-relaxed">
                    Midnight Bloom was born under the gentle glow of a lavender moon. Our designs capture the essence of
                    dreams and transform them into wearable art. Each piece tells a story of mystical nights and
                    ethereal beauty, crafted with sustainable materials and timeless elegance.
                  </p>
                  <Button variant="link" className="text-purple-300 hover:text-white">
                    Learn More About Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="min-h-screen py-16 bg-purple-900/70 backdrop-blur-md">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Join Our Journey</h2>
                <p className="mb-8 text-purple-200">
                  Subscribe to receive updates on new collections, exclusive offers, and mystical inspirations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-full text-purple-900 focus:outline-none bg-white/90 backdrop-blur-sm"
                  />
                  <Button className="bg-white text-purple-900 hover:bg-purple-100 rounded-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="h-5 w-5 text-purple-400" />
                  <span className="text-lg font-medium text-white">Midnight Bloom</span>
                </div>
                <p className="text-sm text-purple-300">
                  Ethereal clothing inspired by moonlit nights and lavender dreams.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Shop</h3>
                <ul className="space-y-2 text-sm text-purple-300">
                  <li>
                    <Link href="#" className="hover:text-white">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-purple-300">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-purple-300 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-purple-300 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772a4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-purple-300 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-purple-900/50 text-center text-sm text-purple-300">
              <p>&copy; {new Date().getFullYear()} Midnight Bloom. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Static Particle Effect Component (no animation)
function StaticParticleEffect() {
  // Create static particles for the background
  const count = 300
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  // Position particles throughout the scene
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const radius = 5 + Math.random() * 15 // Distribute throughout the scene

    const i3 = i * 3
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi) - 10 // Offset to match previous depth

    sizes[i] = Math.random() * 0.05 + 0.02 // Small particles
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#d8b4fe"
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}

// Sample product data
const products = [
  {
    name: "Lavender Dickinson T-Shirt",
    price: "24.00",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Twilight Oversized Sweater",
    price: "34.00",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Dark Purple Linen Pants",
    price: "40.00",
    image: "/placeholder.svg?height=800&width=600",
  },
]
