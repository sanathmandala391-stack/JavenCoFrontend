/*import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "@/services/api" // We defined this in the API Step
import { motion } from "framer-motion"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Calls your backend exports.userRegister
      const { data } = await registerUser(formData)
      
      // Save the JWT token returned by generateToken(user._id, 'user')
      localStorage.setItem("token", data.token)
      
      alert("Registration Successful!")
      navigate("/shop") // Redirect to shop after success
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-off-white flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 shadow-sm border border-brand-charcoal/10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tighter text-brand-black">
          CREATE ACCOUNT
        </h2>

        {error && (
          <p className="mb-4 text-red-500 text-sm text-center bg-red-50 py-2">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-brand-charcoal/20 focus:outline-none focus:border-brand-black transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-brand-charcoal/20 focus:outline-none focus:border-brand-black transition-colors"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-brand-charcoal/20 focus:outline-none focus:border-brand-black transition-colors"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-brand-black text-white py-4 font-medium uppercase tracking-widest hover:bg-brand-charcoal transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "CREATING..." : "REGISTER"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-brand-charcoal">
          Already have an account?{" "}
          <Link to="/login" className="underline font-medium hover:text-brand-black">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}*/
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { registerUser } from "@/services/api"
import { motion } from "framer-motion"

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const { data } = await registerUser(formData)
      localStorage.setItem("token", data.token)
      navigate("/shop")
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-off-white flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md bg-white p-8 shadow-sm border border-brand-charcoal/10">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tighter text-brand-black uppercase">Create Account</h2>
        {error && <p className="mb-4 text-red-500 text-sm text-center bg-red-50 py-2">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-brand-charcoal/20 focus:outline-none" required />
          <input type="email" name="email" placeholder="Email Address" onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-brand-charcoal/20 focus:outline-none" required />
          <input type="password" name="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} className="w-full p-3 border border-brand-charcoal/20 focus:outline-none" required />

          <button type="submit" disabled={loading} className="w-full bg-brand-black text-white py-4 font-medium uppercase tracking-widest flex items-center justify-center gap-3">
            {loading ? <><div className="button-loader" /> CREATING...</> : "REGISTER"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}