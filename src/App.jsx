import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import BlogPosts from './components/BlogPosts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}

export default App
