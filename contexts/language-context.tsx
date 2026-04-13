"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations } from "../lib/translations"

type Language = "ar" | "en"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("ar")

    useEffect(() => {
        // Check if there's a saved language in local storage
        const savedLang = localStorage.getItem("language") as Language
        if (savedLang && (savedLang === "ar" || savedLang === "en")) {
            setLanguage(savedLang)
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = lang
    }

    useEffect(() => {
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = language
    }, [language])

    const t = (key: string) => {
        const keys = key.split(".")
        let result: any = translations[language]

        for (const k of keys) {
            if (result && result[k]) {
                result = result[k]
            } else {
                return key // Return key if translation not found
            }
        }

        return result
    }

    const isRtl = language === "ar"

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRtl }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
