"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export function AboutSection() {
  const isMobile = useIsMobile()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % hairstyleShowcase.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isMobile])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + hairstyleShowcase.length) % hairstyleShowcase.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % hairstyleShowcase.length)
  }

  const hairstyleShowcase = [
    {
      image: "/ghanaweaving.jpg",
      title: "Ghana Weaving",
      description: "Traditional Ghana weaving with a modern twist"
    },
    {
      image: "/bobmarley.jpg",
      title: "Bob Marley Style",
      description: "Classic dreadlocks and natural styles"
    },
    {
      image: "/weavingii.jpg",
      title: "Premium Weaving",
      description: "Elegant and sophisticated weaving patterns"
    },
    {
      image: "/twist.jpg",
      title: "Twist Styles",
      description: "Creative and versatile twist hairstyles"
    },
       {
      image: "/Twistt.jpg",
      title: "Twist Styles",
      description: "Creative and versatile twist hairstyles"
    },
       {
      image: "/twist2.jpg",
      title: "Twist Styles",
      description: "Creative and versatile twist hairstyles"
    },
       {
      image: "/twist3.jpg",
      title: "Twist Styles",
      description: "Creative and versatile twist hairstyles"
    },
    {
      image: "/twist4.jpg",
      title: "Twist Styles",
      description: "Creative and versatile twist hairstyles"
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            About Doxaluxe
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Doxaluxe is a premier hairstyling destination in Nigeria, dedicated to celebrating and enhancing your natural beauty
            through exceptional hairstyling artistry. Our skilled stylists specialize in creating stunning hairstyles
            that reflect your personality and boost your confidence.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed mb-16">
            Our passion lies in the art of hairstyling, combining traditional African techniques with contemporary trends.
            Every style we craft is designed to make you feel extraordinary and showcase the versatility of African hair.
          </p>
        </div>

        {/* Expertise Cards - Grid on desktop, Carousel on mobile */}
        <div id="services" className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {hairstyleShowcase.map((style, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-3/4 overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={style.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-linear-to-t from-black/60 to-transparent absolute bottom-0 w-full">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{style.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative mt-8">
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-3/4">
                {hairstyleShowcase.map((style, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={style.image} 
                      alt={style.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-6 bg-linear-to-t from-black/60 to-transparent absolute bottom-0 w-full">
                      <h3 className="font-serif text-xl font-bold text-white mb-2">{style.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {style.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Mobile Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {hairstyleShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-6" : "bg-primary/50 hover:bg-primary/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hairstyling Expertise Card */}
        <div className="mt-16">
          <div className="group relative overflow-hidden rounded-lg bg-card p-8 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Expert Hairstyling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our skilled team specializes in a wide range of hairstyling services, from traditional African braiding
                and weaving to contemporary styling. We take pride in creating personalized looks that enhance your
                natural beauty while maintaining the health of your hair. Whether you're looking for elegant updos,
                creative braids, or protective styles, our expertise ensures you'll leave feeling confident and beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
