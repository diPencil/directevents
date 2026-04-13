"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function FaqSection() {
  const { isRtl } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: isRtl ? "كيف يمكنني التسجيل؟" : "How do I sign up?",
      a: isRtl ? "يمكنك التسجيل بسهولة من خلال الضغط على زر اطلب حجزك وملء البيانات المطلوبة." : "You can easily sign up by clicking the Book Now button and filling in the required information."
    },
    {
      q: isRtl ? "ما الذي يميزنا عن الآخرين؟" : "What makes us different?",
      a: isRtl ? "نحن نقدم حلاً متكاملاً لإدارة الفعاليات مع التركيز على تجربة المستخدم والاحترافية العالية." : "We provide an integrated solution for event management with a focus on user experience and high professionalism."
    },
    {
      q: isRtl ? "ما هي تكلفة الخدمات؟" : "How much does it cost?",
      a: isRtl ? "تختلف التكلفة بناءً على نوع الفعالية والخدمات المطلوبة. يمكنك طلب عرض سعر مخصص." : "Cost varies based on the type of event and services required. You can request a custom quote."
    },
    {
      q: isRtl ? "كم يستغرق تنظيم المعرض؟" : "How long does it take to design a website?",
      a: isRtl ? "يعتمد الوقت على حجم المعرض ومتطلباته، وعادة ما يستغرق من أسبوعين إلى شهر." : "Time depends on the size and requirements of the exhibition, usually taking two weeks to a month."
    },
    {
      q: isRtl ? "هل ندعم الفعاليات الدولية؟" : "What verticals/niches are supported?",
      a: isRtl ? "نعم، نحن ندعم تنظيم الفعاليات والمؤتمرات على مستوى دولي ومحلي." : "Yes, we support organizing events and conferences on both international and local levels."
    },
    {
      q: isRtl ? "هل النظام آمن ومتوافق؟" : "Is it compliant and secure?",
      a: isRtl ? "نعم، نستخدم أحدث معايير الأمان لحماية بياناتك وبيانات المشاركين." : "Yes, we use the latest security standards to protect your data and participant data."
    },
    {
      q: isRtl ? "كيف يعمل النظام مع نشاطي؟" : "How does it work with my business?",
      a: isRtl ? "نظامنا مرن ويمكن تخصيصه ليتناسب مع احتياجات أي قطاع أعمال أو نوع فعالية." : "Our system is flexible and can be customized to fit the needs of any business sector or event type."
    },
    {
      q: isRtl ? "ماذا لو لم يعجبني التصميم؟" : "What if my competitor is using us?",
      a: isRtl ? "نعمل معك خطوة بخطوة لضمان رضاك التام عن جميع جوانب التنظيم والتصميم." : "We work with you step-by-step to ensure your complete satisfaction with all aspects of organization and design."
    },
    {
      q: isRtl ? "هل يمكنني اختيار استراتيجية معينة؟" : "What if I don't like the designs or strategies?",
      a: isRtl ? "بالتأكيد، فريقنا الاستشاري سيساعدك في اختيار أفضل الاستراتيجيات لفعاليتك." : "Certainly, our consulting team will help you choose the best strategies for your event."
    },
    {
      q: isRtl ? "لماذا أحتاج إلى خدماتكم؟" : "I can do this myself, why do I need you?",
      a: isRtl ? "نحن نوفر عليك الوقت والجهد ونضمن لك احترافية عالية ونتائج ملموسة لفعاليتك." : "We save you time and effort and guarantee high professionalism and tangible results for your event."
    },
    {
      q: isRtl ? "كيف نبدأ العمل معكم؟" : "How do we start working with you?",
      a: isRtl ? "يمكنك البدء بملء نموذج طلب الحجز، وسيقوم فريقنا بالتواصل معك خلال 24 ساعة لمناقشة كافة التفاصيل والاحتياجات." : "You can start by filling out the booking request form, and our team will contact you within 24 hours to discuss all details and needs."
    },
  ]

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 mb-6 text-[11px] font-extrabold uppercase tracking-widest rounded-full bg-white border border-slate-200 shadow-sm text-slate-500"
          >
            {isRtl ? "الأسئلة الشائعة" : "FAQs"}
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 flex items-center justify-center gap-3">
            {isRtl ? "الأسئلة" : "Curated"}
            <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center shrink-0 -mx-4 md:-mx-10 -my-10">
              <DotLottieReact
                src="https://lottie.host/c1c09570-9e57-4c04-8652-a830f399a2b1/Q2cjWdwW73.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            {isRtl ? "المنسقة" : "Questions"}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            {isRtl ? "احجز مكالمة أو تواصل معنا في أي وقت، نحن هنا للمساعدة." : "Book a call or reach out anytime, we're here to help."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto items-start">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`bg-white rounded-3xl border border-slate-100 transition-all cursor-pointer overflow-hidden ${openIndex === index ? 'shadow-xl shadow-slate-200/50' : 'hover:shadow-lg hover:shadow-slate-200/30'}`}
            >
              <div className="p-6 flex items-center justify-between group">
                <h3 className={`text-base font-bold transition-colors ${openIndex === index ? 'text-brand-blue' : 'text-slate-800'}`}>{faq.q}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === index ? 'bg-brand-blue text-white rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                  <Plus className="w-4 h-4" />
                </div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] md:rounded-3xl p-6 md:p-1.5 border border-slate-100 flex flex-col md:flex-row items-center justify-between self-stretch gap-6 md:gap-0 md:pr-6"
          >
            <h3 className="text-base font-bold text-slate-400 md:pl-4 text-center md:text-start">
              {isRtl ? "لم تجد ما تبحث عنه؟" : "Couldn't find an answer?"}
            </h3>
            <a
              href={`https://wa.me/201130720860?text=${encodeURIComponent(isRtl ? "مرحباً، أود التواصل مع فريق الدعم بخصوص تنظيم فعالية." : "Hello, I would like to contact support regarding organizing an event.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm py-4 px-8 rounded-[1.5rem] transition-all shadow-xl shadow-green-200/50 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 group"
            >
              {isRtl ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-colors group-hover:bg-white/30">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 0 1-3.876-.984l-.278-.164-2.885.756.77-2.812-.179-.285a8.17 8.17 0 0 1-1.258-4.387c0-4.51 3.67-8.18 8.182-8.18 2.186 0 4.24.85 5.783 2.396 1.545 1.546 2.395 3.595 2.395 5.784 0 4.51-3.67 8.18-8.182 8.18m.003-19.188C7.502 0 3.497 4.004 3.497 8.948c0 1.58.411 3.12 1.194 4.488L2.001 22l8.689-2.28a8.91 8.91 0 0 0 4.257 1.076h.004c4.945 0 8.949-4.004 8.949-8.948 0-2.397-.933-4.651-2.63-6.347C19.575.935 17.32 0 14.925 0z" /></svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
