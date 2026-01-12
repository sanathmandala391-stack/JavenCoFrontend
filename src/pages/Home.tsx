import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import HeroSlideshow from '@/components/HeroSlideshow'
import FeaturedCollections from '@/components/FeaturedCollections'
import ShopByCategory from '@/components/ShopByCategory'
import BrandStory from '@/components/BrandStory'
import Footer from '@/components/Footer'

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (showLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-brand-off-white">
      <Navbar />
      <HeroSlideshow />
      <FeaturedCollections />
      <ShopByCategory />
      <BrandStory />
      <Footer />
    </main>
  )
}

