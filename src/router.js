import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Layout Container
import Layout from '@containers/Layout'

// Import Routes
const Home = lazy(() => import('@routes/Home'))
const Contact = lazy(() => import('@routes/Contact'))
const NotFound = lazy(() => import('@routes/NotFound'))
const Privacy = lazy(() => import('@routes/Privacy'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback="loading">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  </BrowserRouter>
)

export default Router
