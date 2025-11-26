'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

export function PhotoGallery() {
  const [showAll, setShowAll] = useState(false)

  const photos = Array.from({ length: 14 }, (_, i) => i + 1)

  return (
    <div className="not-prose mt-12">
      <h3 className="mb-5 text-lg font-medium">Photos</h3>
      <div className="grid grid-cols-1 gap-6 max-w-xs mx-auto sm:max-w-4xl sm:grid-cols-2 lg:grid-cols-3">
        {photos.slice(0, 3).map((num) => (
          <MorphingDialog
            key={num}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            }}
          >
            <MorphingDialogTrigger>
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 cursor-zoom-in">
                <img src={`/${num}.png`} alt={`Photo ${num}`} className="w-full h-full rounded-xl object-cover" />
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 max-w-4xl">
                <img src={`/${num}.png`} alt={`Photo ${num}`} className="w-full h-full rounded-xl object-contain max-h-[90vh]" />
              </MorphingDialogContent>
              <MorphingDialogClose
                className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.1 },
                  },
                  exit: { opacity: 0, transition: { duration: 0 } },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-zinc-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </MorphingDialogClose>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}

        <AnimatePresence>
          {showAll && (
            <>
              {photos.slice(3).map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <MorphingDialog
                    transition={{
                      type: 'spring',
                      bounce: 0,
                      duration: 0.3,
                    }}
                  >
                    <MorphingDialogTrigger>
                      <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 cursor-zoom-in">
                        <img src={`/${num}.png`} alt={`Photo ${num}`} className="w-full h-full rounded-xl object-cover" />
                      </div>
                    </MorphingDialogTrigger>
                    <MorphingDialogContainer>
                      <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 max-w-4xl">
                        <img src={`/${num}.png`} alt={`Photo ${num}`} className="w-full h-full rounded-xl object-contain max-h-[90vh]" />
                      </MorphingDialogContent>
                      <MorphingDialogClose
                        className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                        variants={{
                          initial: { opacity: 0 },
                          animate: {
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.1 },
                          },
                          exit: { opacity: 0, transition: { duration: 0 } },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5 text-zinc-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </MorphingDialogClose>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {!showAll ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAll(true)}
            className="col-span-full mt-4 text-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors cursor-pointer underline"
          >
            See others
          </motion.button>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAll(false)}
            className="col-span-full mt-4 text-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors cursor-pointer underline"
          >
            Hide
          </motion.button>
        )}
      </div>
    </div>
  )
}

