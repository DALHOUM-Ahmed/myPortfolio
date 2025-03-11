"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar as CalendarComponent } from "@/components/ui/calendar" // Using the existing calendar component [^4]

export default function BookCallSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    time: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or email service
    console.log({ ...formState, date })
    alert("Your booking request has been submitted. I'll contact you shortly to confirm.")
  }

  // Available time slots - you can customize these
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  return (
    <section id="book-call" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/calendarbackground.png?height=800&width=1600')] bg-no-repeat bg-cover bg-center"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Book a Call
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Schedule a consultation to discuss your blockchain project needs. Select a date and time that works for you,
            and I'll reach out to confirm our meeting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/10 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Select a Date</h3>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/10">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="bg-slate-800 rounded-lg"
                disabled={{ before: new Date() }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/10 shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6">Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-purple-500/20 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-purple-500/20 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                  Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formState.time}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md bg-slate-800/50 border border-purple-500/20 focus:border-purple-500 py-2 px-3 text-sm"
                  disabled={!date}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="bg-slate-800/50 border-purple-500/20 focus:border-purple-500"
                  placeholder="Tell me briefly about your project or questions"
                />
              </div>

              <Button
                type="submit"
                disabled={!date || !formState.time}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/30"
              >
                Book Call
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

