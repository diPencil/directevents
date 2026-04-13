"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Languages, Sparkles, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { AnnouncementBanner } from "./announcement-banner"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t, isRtl } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 w-full max-w-5xl rounded-full border border-white/20 backdrop-blur-md shadow-lg ${
          isScrolled ? "bg-white/80 py-2" : "bg-white/40 py-3"
        } px-6 flex items-center justify-between`}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className={`relative overflow-hidden transition-all duration-300 ${
            isRtl 
              ? "w-28 h-8 md:w-32 md:h-10" 
              : "w-32 h-10 md:w-40 md:h-12"
          }`}>
            <Image 
              src={isRtl ? "/LogoAR.png" : "/logo.png"} 
              alt="Direct Events Services" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-primary" : "text-[#475569] hover:text-primary"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium text-[#475569] hover:text-primary transition-colors"
          >
            {t("nav.whyUs")}
          </Link>
          <Link
            href="#booking-form"
            className="text-sm font-medium text-[#475569] hover:text-primary transition-colors"
          >
            {t("common.bookNow")}
          </Link>

        </nav>

        {/* Right side Tools */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs font-semibold"
          >
            {language === "ar" ? "EN" : "AR"}
          </Button>
          <Link href="#booking-form">
            <Button
              variant="default"
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-4 md:px-6 font-semibold rounded-full h-10 text-sm shadow-md transition-all active:scale-95"
            >
              <span className="hidden md:inline">
                {isRtl ? "نظم فعاليتك الآن" : "Plan Your Event Now"}
              </span>
              <span className="inline md:hidden">
                {isRtl ? "احجز الآن" : "Book Now"}
              </span>
            </Button>
          </Link>

          <button className="md:hidden ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${isRtl ? "left-0" : "right-0"} w-4/5 max-w-sm bg-white shadow-2xl z-[70] md:hidden flex flex-col`}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <span className="text-xl font-bold text-slate-900">{t("common.brand")}</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <nav className="flex flex-col gap-6">
                  {[
                    { href: "/", label: t("nav.home") },
                    { href: "#why-us", label: t("nav.whyUs") },
                    { href: "#booking-form", label: t("common.bookNow") },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-bold text-slate-800 hover:text-brand-blue transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-12 space-y-6">
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl mt-8"
                  >
                    <span className="text-sm font-bold text-slate-600">{isRtl ? "اللغة" : "Language"}</span>
                    <span className="text-sm font-bold text-brand-blue uppercase">{language === "ar" ? "English" : "العربية"}</span>
                  </button>

                  <Link href="#booking-form" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      size="lg"
                      className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold h-14 rounded-2xl shadow-xl mt-4"
                    >
                      {isRtl ? "نظم فعاليتك الآن" : "Plan Your Event Now"}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
