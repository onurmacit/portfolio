'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Video {
  url: string
  title: string
}

interface VideoCarouselProps {
  videos: Video[]
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
      scale: 0.8,
      rotateY: -45,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: 45,
    },
    visible: {
      x: '0',
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === videos.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? videos.length - 1 : prevIndex - 1
    )
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full py-12">
      {/* Carousel Container */}
      <div className="relative mx-auto max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1 shadow-2xl">
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
                animate="visible"
                exit="exit"
                className="absolute inset-0"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <video
                  src={videos[currentIndex].url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                
                {/* Video Title Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                >
                  <h3 className="text-xl font-medium text-white">
                    {videos[currentIndex].title}
                  </h3>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-lg transition-all hover:bg-white/20 hover:scale-110"
          aria-label="Previous video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-lg transition-all hover:bg-white/20 hover:scale-110"
          aria-label="Next video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {videos.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                : 'bg-zinc-300 dark:bg-zinc-700'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Orbs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}

export default VideoCarousel

