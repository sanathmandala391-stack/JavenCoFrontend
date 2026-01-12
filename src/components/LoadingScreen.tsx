import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black">
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo text */}
        <h1 className="text-6xl md:text-8xl font-bold text-brand-off-white tracking-wider">
          JAVEN & CO.
        </h1>
        
        {/* Horizontal light sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-off-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
      </motion.div>
    </div>
  )
}

