'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useState } from 'react'
import { XIcon } from 'lucide-react'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div 
            className="relative cursor-pointer group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/onur.png"
              alt="Onur Macit"
              width={120}
              height={120}
              quality={100}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-700 sm:h-15 sm:w-15 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-400 dark:group-hover:ring-blue-500"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </motion.div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Onur Macit
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Backend Developer
          </TextEffect>
        </div>
      </div>
    </header>

    {/* Profile Photo Modal */}
    {isModalOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          className="relative max-w-2xl max-h-[90vh] p-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-2 -right-2 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <XIcon className="h-5 w-5 text-gray-600" />
          </button>
          <Image
            src="/onur.png"
            alt="Onur Macit - Full Size"
            width={800}
            height={800}
            quality={100}
            className="rounded-2xl shadow-2xl max-w-full max-h-[80vh] object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    )}
  </>
  )
}
