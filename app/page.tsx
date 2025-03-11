import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ClientReviews from "@/components/client-reviews";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsSection from "@/components/skills-section";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
// import BookCallSection from "@/components/book-call-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ClientReviews />

      {/* Professional Profiles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover bg-center"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Professional Profiles
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upwork Profile */}
            <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-purple-500/20 transform hover:scale-[1.01] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Upwork Profile
              </h3>
              <p className="text-lg mb-6 text-center text-gray-200">
                View my verified work history and 5 awesome client reviews on
                Upwork.
                <span className="block mt-2 text-purple-300 font-medium">
                  Note: I am not using Upwork for payments, it was just a way to
                  communicate with clients receiving some of the amount there to
                  close a job.
                </span>
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://www.upwork.com/freelancers/ahmeddalhoum5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-500/30"
                >
                  Visit My Upwork Profile
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* LinkedIn Profile */}
            <div className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-purple-500/20 transform hover:scale-[1.01] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                LinkedIn Profile
              </h3>
              <p className="text-lg mb-6 text-center text-gray-200">
                Connect with me professionally and explore my complete work
                history, skills, and recommendations on LinkedIn.
                <span className="block mt-2 text-purple-300 font-medium">
                  Stay updated with my latest projects and professional
                  achievements.
                </span>
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://www.linkedin.com/in/ahmed-dalhoum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-500/30"
                >
                  Visit My LinkedIn Profile
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <BookCallSection /> */}
      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Ahmed Dalhoum
            </h2>
            <p className="text-gray-400 mt-1">
              Blockchain Developer & Engineer
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/dalhoum-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmed-dalhoum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:dalhoum.co@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ahmed Dalhoum. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
