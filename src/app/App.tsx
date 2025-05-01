import { BrowserRouter as Router } from "react-router-dom"

import { QueryClientProvider } from "@/app/providers/QueryClientProvider"

import PostsManagerPage from "@/pages/PostsManagerPage.tsx"

import Header from "@/widgets/layout/ui/Header"
import Footer from "@/widgets/layout/ui/Footer"

const App = () => {
  return (
    <QueryClientProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <PostsManagerPage />
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
