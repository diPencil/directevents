"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function VideoHero() {
    const { t, isRtl, language } = useLanguage()

    const scrollToForm = () => {
        const element = document.getElementById("booking-form")
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="relative pt-40 md:pt-44 pb-0 overflow-visible animate-mesh z-10">
            {/* Soft Gradient Orbs based on reference image */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] -z-10" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* Precisely Designed Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-6 md:mb-10 text-[12px] font-semibold rounded-full bg-white border border-slate-100 shadow-sm text-slate-500"
                    >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-50 text-[10px]">✨</span>
                        <span className="hidden md:inline">{t("hero.badge")}</span>
                        <span className="inline md:hidden">{t("hero.badgeMobile")}</span>
                    </motion.div>

                    {/* Ultra Bold Typography (Scaled Down) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-3xl md:text-6xl lg:text-7xl ${isRtl ? 'font-bold' : 'font-extrabold'} tracking-tighter text-[#0f172a] mb-8 leading-[1.0] max-w-4xl`}
                    >
                        {isRtl ? (
                            <>
                                حوّل فعاليتك <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 -mx-1 md:-mx-2 overflow-hidden align-middle"><DotLottieReact src="https://lottie.host/0586338a-c54d-4c8e-b19c-4570477053a0/YvCHf5kV2P.lottie" loop autoplay className="w-14 h-14 md:w-20 md:h-20" /></span> <br /> 

                                <span className="text-slate-900">إلى تجربة استثنائية</span>
                            </>
                        ) : (
                            <>
                                Turn your events <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 -mx-1 md:-mx-2 overflow-hidden align-middle"><DotLottieReact src="https://lottie.host/0586338a-c54d-4c8e-b19c-4570477053a0/YvCHf5kV2P.lottie" loop autoplay className="w-14 h-14 md:w-20 md:h-20" /></span> <br /> 
                                <span className="text-slate-900">into Experiences</span>
                            </>
                        )}
                    </motion.h1>

                    {/* Dark Pill CTA Button (Reference Style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5 mb-12"
                    >
                        <button 
                            className="uiverse-next-button group"
                            onClick={scrollToForm}
                        >
                            <span>{isRtl ? "سجل فعاليتك الآن" : "Register Your Event"}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
                                <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
                                <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
                                <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
                            </svg>
                        </button>
                    </motion.div>

                    {/* Video Mockup (The "Curved Card" style from reference) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-6xl -mb-20 md:-mb-40 lg:-mb-48 aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[4px] md:border-[8px] border-white/40 backdrop-blur-sm z-20"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="/eventsvideo-hero-section.mp4" 
                                type="video/mp4"
                            />
                        </video>
                        {/* Overlay to match reference "curved" or "glassy" effect */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                        
                        {/* Interactive dots like mockup windows */}
                        <div className="absolute top-6 left-8 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
