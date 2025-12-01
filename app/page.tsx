"use client"
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaInstagram, FaTiktok, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function GamingLanding() {
  const [galleryLinks] = useState([
    "https://yourimageshare.com/ib/wfhrQX5LJZ.jpg",
    "https://yourimageshare.com/ib/cC9Q6MMvOH.jpg",
    "https://yourimageshare.com/ib/smA7U2nuNj.jpg",
    "https://yourimageshare.com/ib/um8xJJOymI.jpg",
    "https://yourimageshare.com/ib/mq8Y78j8Jf.jpg",
    "https://yourimageshare.com/ib/NOdVdtfD63.webp",
  ]);

  const [fanMessages] = useState([
    { name: "Alex", message: "Absolutely love the energy!" },
    { name: "Jordan", message: "Your content is fire!" },
    { name: "Sam", message: "Can't wait for the next stream!" },
  ]);

  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  const toggleFaq = (index:number) => {
    setFaqOpen(faqOpen.map((open, i) => i === index ? !open : open));
  };

  const faqs = [
    { question: "What platforms do you stream on?", answer: "Mia and Kourosh stream on YouTube, Twitch, and TikTok, sharing exclusive gaming content and live tournaments." },
    { question: "How can I join your tournaments?", answer: "All tournament details are posted on our social media and website. You can register directly through the links provided in each tournament announcement." },
    { question: "Can I send fan messages?", answer: "Yes! Use the fan message section to send your messages and see them featured live on the site." }
  ];

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-[#0a0013] to-black text-white overflow-hidden select-none font-['Orbitron',sans-serif]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-blue-500/20 py-4 px-6 md:px-10 flex justify-between items-center">
        <span className="text-blue-400 text-2xl md:text-3xl font-extrabold tracking-wider drop-shadow-[0_0_15px_rgba(0,150,255,0.8)]">
          MIA × KOUROSH
        </span>
        <div className="hidden md:flex gap-6 text-blue-200 text-sm md:text-lg">
          <a href="#about" className="hover:text-blue-400 duration-300">About</a>
          <a href="#gallery" className="hover:text-blue-400 duration-300">Gallery</a>
          <a href="#video" className="hover:text-blue-400 duration-300">Trailer</a>
          <a href="#fans" className="hover:text-blue-400 duration-300">Fans</a>
          <a href="#faq" className="hover:text-blue-400 duration-300">FAQ</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full h-screen flex items-center justify-center px-4 md:px-10">
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url(https://yourimageshare.com/ib/mfnKx0B9Ub.jpg)" }} />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-[0_10px_30px_rgba(0,150,255,0.8)] text-blue-400 text-center" style={{ fontFamily: "Orbitron, sans-serif" }}>
          MIA × KOUROSH
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="relative z-10 mt-4 md:mt-6 text-lg sm:text-xl md:text-3xl font-light text-blue-200 drop-shadow-xl text-center max-w-3xl mx-auto">
          The Ultimate Elite Gaming Universe
        </motion.p>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 md:px-10 max-w-6xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 drop-shadow-[0_5px_20px_rgba(0,150,255,0.6)]">
          Who Are We?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-blue-100 max-w-3xl mx-auto">
          Mia and Kourosh have built a dark, cinematic, high-energy world that redefines entertainment and gaming culture.
        </motion.p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-4 md:px-10 bg-linear-to-b from-black to-[#0a0013]">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 drop-shadow-[0_5px_25px_rgba(0,150,255,0.7)] mb-10 sm:mb-16">
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryLinks.map((link, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,150,255,0.4)] hover:scale-105 duration-300 cursor-pointer">
              <Image width={1000} height={1000} alt="mia" src={link} className="w-full h-60 sm:h-72 md:h-80 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO TRAILER */}
      <section id="video" className="py-20 px-4 md:px-10 text-center bg-black">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-6 sm:mb-10 drop-shadow-[0_5px_25px_rgba(0,150,255,0.7)]">
          Official Music Video
        </motion.h2>
        <div className="max-w-full sm:max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/LJ_PF72XkB8?si=iRm_q13q-QXgIA1V" title="YouTube video player" allowFullScreen />
        </div>
      </section>

      {/* FAN MESSAGES */}
      <section id="fans" className="py-20 px-4 md:px-10 text-center bg-black">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-6 sm:mb-10 drop-shadow-[0_5px_25px_rgba(0,150,255,0.7)]">
          Fan Messages
        </motion.h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {fanMessages.map((fan, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }} className="bg-black/40 border border-blue-500/30 backdrop-blur-2xl p-4 rounded-lg shadow-[0_0_20px_rgba(0,150,255,0.3)] text-left">
              <p className="text-blue-100">{fan.message}</p>
              <span className="text-blue-300 font-bold mt-1 block">- {fan.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 md:px-10 max-w-3xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-6 text-center drop-shadow-[0_5px_25px_rgba(0,150,255,0.7)]">
          Frequently Asked Questions
        </motion.h2>
        {faqs.map((faq, i) => (
          <motion.div key={i} layout className="bg-black/60 border border-blue-500/40 backdrop-blur-2xl p-6 rounded-xl shadow-[0_0_25px_rgba(0,150,255,0.5)] cursor-pointer mb-4 hover:shadow-[0_0_35px_rgba(0,150,255,0.7)] transition-shadow duration-300" onClick={() => toggleFaq(i)}>
            <div className="flex justify-between items-center">
              <h3 className="text-blue-200 font-semibold text-lg md:text-xl">{faq.question}</h3>
              {faqOpen[i] ? <FaChevronUp className="text-blue-400" /> : <FaChevronDown className="text-blue-400" />}
            </div>
            <AnimatePresence>
              {faqOpen[i] && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}>
                  <p className="text-blue-100 mt-3 overflow-hidden">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* SOCIAL */}
      <section className="py-20 px-4 md:px-10 text-center">
        <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-6 sm:mb-10 drop-shadow-[0_5px_25px_rgba(0,150,255,0.7)]">
          Follow The Empire
        </motion.h2>
        <div className="flex justify-center gap-6 sm:gap-10 text-2xl sm:text-3xl text-blue-200">
          <motion.a whileHover={{ scale: 1.2 }} href="#"><FaYoutube /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#"><FaInstagram /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTiktok /></motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-blue-200 opacity-70 text-base sm:text-lg">
        Made with ❤️ for Mia & Kourosh — Ultra Elite Edition
      </footer>
    </div>
  );
}