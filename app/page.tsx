"use client";

import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaDiscord,
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaExpand,
  FaSkull,
  FaInfinity,
} from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function NeoCyberLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // ===== DATA =====
  const featuredArtists = [
    { id: 1, name: "MIA", role: "Vocal / Producer", image: "https://yourimageshare.com/ib/wfhrQX5LJZ.jpg" },
    { id: 2, name: "KOUROSH", role: "Producer / DJ", image: "https://yourimageshare.com/ib/cC9Q6MMvOH.jpg" },
    { id: 3, name: "NOVA", role: "Visual Artist", image: "https://yourimageshare.com/ib/smA7U2nuNj.jpg" },
    { id: 4, name: "ZERO", role: "Sound Designer", image: "https://yourimageshare.com/ib/um8xJJOymI.jpg" },
  ];

  const trackList = [
    { id: 1, title: "Neon Dreams", artist: "MIA x KOUROSH", duration: "3:42", plays: "1.2M" },
    { id: 2, title: "Cyber Pulse", artist: "MIA x KOUROSH", duration: "4:15", plays: "892K" },
    { id: 3, title: "Dark Matter", artist: "MIA x KOUROSH", duration: "3:58", plays: "654K" },
    { id: 4, title: "Infinite Loop", artist: "MIA x KOUROSH", duration: "5:02", plays: "423K" },
    { id: 5, title: "Neon Ghost", artist: "MIA x KOUROSH", duration: "3:30", plays: "287K" },
  ];

  const upcomingEvents = [
    { id: 1, title: "CYBER FEST 2026", date: "SEP 26", location: "TOKYO", status: "SOLD OUT" },
    { id: 2, title: "NEON NIGHTS", date: "OCT 12", location: "BERLIN", status: "REGISTER" },
    { id: 3, title: "DARK FORCE TOUR", date: "NOV 05", location: "LONDON", status: "COMING" },
  ];

  const stats = [
    { label: "Monthly Listeners", value: "2.4M" },
    { label: "Total Plays", value: "18.7M" },
    { label: "Countries", value: "142" },
    { label: "Tracks", value: "47" },
  ];

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-['Inter',sans-serif] relative">
      
     

      {/* ===== GRID OVERLAY ===== */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ===== NAVBAR ===== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5 px-6 md:px-12 py-5 flex items-center justify-between"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full blur-sm" />
          <span className="text-2xl font-black tracking-wider bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            NV
          </span>
          <span className="text-xs text-white/20 font-light tracking-[0.2em]">STUDIO</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-white/30">
          {["ARTISTS", "MUSIC", "EVENTS", "STORE"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-all duration-300 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>LIVE</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 bg-linear-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-xs text-white/30">
            M
          </div>
        </div>
      </motion.nav>

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center px-4 md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(https://yourimageshare.com/ib/mfnKx0B9Ub.jpg)" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-pink-500/60 text-xs tracking-[0.3em] mb-6"
          >
            <span className="w-8 h-1px bg-pink-500/30" />
            FEATURED ARTIST
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-8xl md:text-9xl font-black leading-[0.9]"
          >
            <span className="bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MIA
            </span>
            <br />
            <span className="text-white/80">× KOUROSH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/30 max-w-lg font-light tracking-wide"
          >
            Exploring the boundaries of sound, visual, and digital art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full text-black font-bold text-sm tracking-wider overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,0,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                <FaPlay className="text-xs" /> LISTEN NOW
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border border-white/10 rounded-full text-white/40 text-sm hover:border-white/30 hover:text-white transition-all duration-300">
              Explore
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-8 text-xs text-white/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-white/5 pl-4">
                <div className="text-lg font-bold text-white/40">{stat.value}</div>
                <div className="text-[10px] tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-7xl text-pink-500/10"
          >
            <FaSkull />
          </motion.div>
        </div>
      </section>

      {/* ===== ARTISTS ===== */}
      <section id="artists" className="py-32 px-4 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-1px bg-pink-500/30" />
            <h2 className="text-2xl font-light tracking-[0.3em] text-white/30">ARTISTS</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredArtists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCard(artist.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/30 transition-all duration-500">
                  <Image
                    width={600}
                    height={600}
                    alt={artist.name}
                    src={artist.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                      <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                      <p className="text-xs text-white/30 tracking-wider">{artist.role}</p>
                    </div>
                  </div>
                </div>
                {hoveredCard === artist.id && (
                  <div className="absolute inset-0 rounded-2xl border border-pink-500/50 shadow-[0_0_60px_rgba(255,0,255,0.1)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MUSIC ===== */}
      <section id="music" className="py-32 px-4 md:px-12 bg-linear-to-b from-black via-[#050008] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-1px bg-pink-500/30" />
            <h2 className="text-2xl font-light tracking-[0.3em] text-white/30">MUSIC</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Player */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/5">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs text-white/20 tracking-widest">NOW PLAYING</p>
                  <h3 className="text-xl font-bold mt-1">Neon Dreams</h3>
                  <p className="text-sm text-white/30">MIA x KOUROSH</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-pink-500/30 hover:text-white transition">
                    <FaVolumeMute />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-pink-500/30 hover:text-white transition">
                    <FaExpand />
                  </button>
                </div>
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden mb-8 border border-white/5">
                <Image
                  width={800}
                  height={800}
                  alt="album art"
                  src="https://yourimageshare.com/ib/NOdVdtfD63.webp"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/20">1:24</span>
                  <span className="text-white/20">3:42</span>
                </div>
                <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="absolute inset-0 w-[35%] bg-linear-to-r from-pink-500 to-purple-500 rounded-full" />
                </div>
                <div className="flex justify-center gap-6 pt-4">
                  <button className="text-white/20 hover:text-white transition text-lg">⏮</button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center text-black text-xl hover:shadow-[0_0_40px_rgba(255,0,255,0.3)] transition"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button className="text-white/20 hover:text-white transition text-lg">⏭</button>
                </div>
              </div>
            </div>

            {/* Tracklist */}
            <div>
              <div className="space-y-2">
                {trackList.map((track, i) => (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-white/10 font-mono w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-white/70 group-hover:text-white transition">
                          {track.title}
                        </h4>
                        <p className="text-xs text-white/20">{track.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-xs text-white/20">
                      <span>{track.plays}</span>
                      <span className="hidden sm:inline">{track.duration}</span>
                      <button className="opacity-0 group-hover:opacity-100 transition text-pink-500">
                        <FaPlay className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                {[FaSpotify, FaApple, FaSoundcloud].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:border-pink-500/30 hover:text-white transition-all duration-300"
                  >
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      <section id="events" className="py-32 px-4 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-1px bg-pink-500/30" />
            <h2 className="text-2xl font-light tracking-[0.3em] text-white/30">EVENTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/5 hover:border-pink-500/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-700" />
                
                <div className="relative">
                  <div className="text-4xl font-black text-white/5 tracking-wider">
                    {event.date.replace(" ", "")}
                  </div>
                  <h3 className="text-xl font-bold mt-4">{event.title}</h3>
                  <p className="text-sm text-white/30 mt-1">{event.location}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className={`text-xs font-bold tracking-wider px-3 py-1 rounded-full border ${
                      event.status === "SOLD OUT" 
                        ? "border-red-500/30 text-red-400" 
                        : event.status === "REGISTER"
                        ? "border-green-500/30 text-green-400"
                        : "border-pink-500/30 text-pink-400"
                    }`}>
                      {event.status}
                    </span>
                    <button className="text-xs text-white/20 group-hover:text-white transition">
                      Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORE / MERCH ===== */}
      <section id="store" className="py-32 px-4 md:px-12 bg-linear-to-b from-black via-[#050008] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-1px bg-pink-500/30" />
            <h2 className="text-2xl font-light tracking-[0.3em] text-white/30">STORE</h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/5 p-12 text-center">
            <div className="absolute inset-0 bg-linear-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5" />
            <div className="relative">
              <FaInfinity className="text-6xl text-white/5 mx-auto mb-6" />
              <h3 className="text-3xl font-bold">Limited Edition</h3>
              <p className="text-white/30 mt-2 max-w-md mx-auto">
                Exclusive merch drops. Sign up for early access.
              </p>
              <button className="mt-8 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-sm tracking-wider transition-all duration-300 border border-white/5 hover:border-white/20">
                NOTIFY ME
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL ===== */}
      <section className="py-20 px-4 text-center">
        <div className="flex justify-center gap-6 text-2xl text-white/10">
          {[FaYoutube, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaDiscord].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="hover:text-pink-500 transition-all duration-300"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-4 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/10">
            <span className="tracking-widest">© 2026 NV STUDIO</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/30 transition">PRIVACY</a>
              <a href="#" className="hover:text-white/30 transition">TERMS</a>
              <a href="#" className="hover:text-white/30 transition">CONTACT</a>
            </div>
            <span className="tracking-wider">BUILT IN THE DARK</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}