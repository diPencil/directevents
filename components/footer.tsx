"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Twitter, Instagram, Linkedin, Send } from "lucide-react"

export function Footer() {
  const { t, isRtl } = useLanguage()

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
      {/* Giant Watermark Background - Positioned behind all content */}
      <div className="absolute inset-x-0 bottom-12 flex justify-center pointer-events-none select-none z-0">
        <div className="relative">
          <div className="text-[15vw] md:text-[25vw] font-black tracking-tighter uppercase italic whitespace-nowrap leading-none opacity-[0.03] text-slate-900">
            {t("common.brand")} {t("common.brandSub")}
          </div>
          <div className="absolute inset-0 text-[15vw] md:text-[25vw] font-black tracking-tighter uppercase italic whitespace-nowrap leading-none bg-gradient-to-b from-slate-200 to-transparent bg-clip-text text-transparent opacity-40">
            {t("common.brand")} {t("common.brandSub")}
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Large CTA Section */}
        <div className="flex flex-col items-center text-center mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] font-bold rounded-full bg-slate-50 border border-slate-100 text-slate-500"
          >
            <div className="w-4 h-4 rounded-full bg-brand-blue/10 flex items-center justify-center text-[10px]">✨</div>
            {isRtl ? "شريكك في النجاح" : "Partner for Your Success"}
          </motion.div>
          
          <h2 className={`text-2xl md:text-7xl ${isRtl ? 'font-bold' : 'font-extrabold'} tracking-tight text-slate-900 mb-8 leading-[1.2] md:leading-[1.1]`}>
            {isRtl ? "أطلق العنان لقوة" : "Unlock the Power of"} <br className="hidden md:block" />
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {t("common.brand")}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden shrink-0">
                <DotLottieReact 
                  src="https://lottie.host/3193c5bf-38e9-4003-8f9e-c3bb6ec9299b/0LrFVparmY.lottie" 
                  loop 
                  autoplay 
                  className="w-full h-full scale-125" 
                />
              </div>
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent uppercase">
                {t("common.brandSub")}
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            {isRtl 
              ? "نحن منصة متكاملة تساعد المنظمين على إدارة الحجوزات، تحسين التكاليف، وتعزيز تجربة الحضور من خلال تحليلات ذكية وعمليات دفع سلسة."
              : "We are an all-in-one platform that helps organizers manage bookings, optimize costs, and boost participant retention with smart analytics and seamless checkouts."}
          </p>

          <button 
            className="uiverse-next-button group"
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>{isRtl ? "ابدأ تنظيم فعاليتك" : "Start Organizing Your Event"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
              <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
              <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
              <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
            </svg>
          </button>
        </div>

        {/* Minimal Copyright Bar */}
        <div className="relative mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
          <p className="text-xs font-bold text-slate-400 relative z-10 uppercase tracking-widest">
            {isRtl 
              ? `© ${new Date().getFullYear()} ${t("common.brand")} ${t("common.brandSub")}. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} ${t("common.brand")} ${t("common.brandSub")}. All rights reserved.`}
          </p>
          <div className="flex gap-6 relative z-10">
            <Link href="/terms" className="text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">{isRtl ? "الشروط والأحكام" : "Terms"}</Link>
            <Link href="/privacy" className="text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">{isRtl ? "الخصوصية" : "Privacy"}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
