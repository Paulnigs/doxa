"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Aisha Mohammed",
    role: "Ghana Weaving Enthusiast",
    image: "/ghanaweaving.jpg",
    content:
      "The Ghana weaving style I got from Doxaluxe is absolutely stunning! The precision in their braiding technique and pattern design is exceptional. My hair looks amazing and the style has lasted perfectly.",
    rating: 5,
  },
  {
    name: "Sarah Okoro",
    role: "Natural Hair Advocate",
    image: "/bobmarley.jpg",
    content:
      "Their expertise with dreadlocks is unmatched! They understood exactly what I wanted and created the perfect style. The maintenance advice they gave me has been invaluable for keeping my locs healthy.",
    rating: 5,
  },
  {
    name: "Blessing Adebayo",
    role: "Regular Client",
    image: "/weavingii.jpg",
    content:
      "I'm in love with their weaving techniques! The stylist took time to understand my preferences and suggested styles that perfectly match my face shape. The attention to detail is remarkable.",
    rating: 5,
  },
  {
    name: "Joy Okonkwo",
    role: "Professional Stylist",
    image: "/twist.jpg",
    content:
      "The twist styles they create are works of art! As a fellow stylist, I'm impressed by their innovative techniques and commitment to hair health. They're setting new standards in African hairstyling.",
    rating: 5,
  },
  {
    name: "Fatima Ibrahim",
    role: "Business Professional",
    image: "/twist2.jpg",
    content:
      "Found my go-to salon for protective styling! They create beautiful, professional-looking styles that are perfect for my corporate environment while maintaining African beauty traditions.",
    rating: 5,
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-card rounded-lg p-8 sm:p-12 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg sm:text-xl text-foreground mb-8 leading-relaxed text-pretty">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-transparent"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-transparent"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
