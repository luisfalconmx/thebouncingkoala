import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Layout Container
import Layout from '@containers/Layout'

// Import Routes
const Home = lazy(() => import('@routes/Home'))
const Contact = lazy(() => import('@routes/Contact'))
const NotFound = lazy(() => import('@routes/NotFound'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback="loading">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  </BrowserRouter>
)

export default Router
