"use client"

import { ArrowUpRight, Quote, Star } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import image from "../../public/me/me1.png"

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="space-y-4">
          <Quote className={`w-10 h-10 ${isDark ? "text-gray-400" : "text-gray-700"}`} />
          <div>
            <p className={`font-semibold leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Faizu delivers thoughtful product design that directly contributes to business success.
            </p>
            <p className={`font-semibold mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Highly Recommended</p>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
       

          <div className="text-center mb-8">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-2 ${isDark ? "text-gray-100" : "text-gray-800"}`}>
              I'm <span className="text-theme-primary">Faizu</span>,
            </h1>
            <h2 className={`text-4xl lg:text-5xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"}`}>
              Product Engineer
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-theme-primary rounded-full -z-10 opacity-90"></div>

            <svg className="absolute -top-0 -left-20 w-24 h-24" viewBox="0 0 100 100">
              <path d="M20,50 Q30,20 50,30 Q70,40 80,20" stroke="#6b5ce7" strokeWidth="3" fill="none" />
            </svg>
            <svg className="absolute top-0 right-0 w-20 h-20" viewBox="0 0 100 100">
              <path d="M30,50 Q40,30 60,40 L70,30 L80,50 L70,60" stroke="#6b5ce7" strokeWidth="3" fill="none" />
            </svg>
            <svg className="absolute bottom-20 -left-10 w-16 h-16" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="5" fill="#6b5ce7" />
              <path d="M50,50 L30,30 M50,50 L70,30 M50,50 L50,20" stroke="#6b5ce7" strokeWidth="2" />
            </svg>
            <svg className="absolute bottom-10 right-20 w-20 h-20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" stroke="#6b5ce7" strokeWidth="3" fill="none" />
              <circle cx="50" cy="30" r="5" fill="#6b5ce7" />
            </svg>
            <svg className="absolute -bottom-5 left-10 w-24 h-24" viewBox="0 0 100 100">
              <path d="M20,50 Q40,20 60,50 Q80,80 100,50" stroke="#6b5ce7" strokeWidth="3" fill="none" />
            </svg>

         <div className="relative flex justify-center">
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[320px] h-[320px] lg:w-[600px] lg:h-[400px] bg-theme-primary rounded-full opacity-90" />
  </div>

  <img
    src={image}
    alt="Faizu"
    className="relative z-10 w-[280px] lg:w-[400px] h-auto object-cover"
  />
</div>


        
          </div>

          <div className="flex gap-4 mt-8 relative z-20 mb-8">
            <button className="bg-theme-primary text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-theme-primary-hover transition-colors">
              Explore My Work <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              className={`border-2 px-8 py-3 rounded-full font-medium transition-colors ${
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-600 hover:bg-gray-700"
                  : "bg-white text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-theme-primary text-theme-primary" />
            ))}
          </div>
          <div className="text-right">
            <div className={`text-5xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"}`}>2+ Years</div>
            <div className={`text-xl font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
