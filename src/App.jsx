import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CountdownTimer from './components/CountdownTimer'
import NewsTicker from './components/NewsTicker'
import FloatingWidgets from './components/FloatingWidgets'
import NotificationDashboard from './components/NotificationDashboard'
import AboutSection from './components/AboutSection'
import InfoSection from './components/InfoSection'
import PricingSection from './components/PricingSection'
import FounderSection from './components/FounderSection'
import BlogSection from './components/BlogSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Phase 1: Command Center - Header & Navigation */}
      <TopBar />
      <Navbar />

      {/* Phase 2: Hero Section & Engagement Triggers */}
      <HeroSection />
      <CountdownTimer />
      <NewsTicker />

      {/* Phase 3: Information Feeds */}
      <NotificationDashboard />
      <AboutSection />

      <InfoSection />

      {/* Phase 4: E-Commerce Services Grid */}
      <PricingSection />

      {/* Phase 5: Trust Builders & Footer */}
      <FounderSection />
      <BlogSection />
      <MapSection />
      <Footer />

      {/* Floating Widgets */}
      <FloatingWidgets />
    </div>
  )
}

export default App
