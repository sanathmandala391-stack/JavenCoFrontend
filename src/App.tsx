import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Page Imports
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import MyOrders from './pages/MyOrders';
// Component Imports
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔓 PUBLIC ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 PROTECTED ROUTES */}
        {/* Home Page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Shop/Collections Page */}
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />

        {/* PRODUCT DETAIL PAGE 
          Changed from /shop/:id to /product/:id to match your ShopPage links
        */}
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* Shopping Cart */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Checkout Page */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        {/* 🔐 PROTECTED ROUTES */}
        
        {/* ✅ ADD THIS: My Orders Route */}
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK: Redirect any unknown routes to Shop or Home */}
        <Route path="*" element={<Navigate to="/shop" replace />} />
        
      </Routes>
    </Router>
  );
}

export default App;