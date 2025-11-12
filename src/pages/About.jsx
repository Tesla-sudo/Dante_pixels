// src/pages/About.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, Camera, Leaf, Sparkles } from "lucide-react";
import profileImage from "../assets/done5.jpg";

export default function About() {
  const values = [
    {
      icon: <Camera className="w-6 h-6 text-yellow-600" />,
      title: "Authenticity",
      desc: "No filters. No staging. Just real moments in real light.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Conservation",
      desc: "10% of every project funds local wildlife protection.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
      title: "Craft",
      desc: "Pro gear, cinematic grading, and storytelling that moves.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={profileImage}
          alt="Evans Muholo — Done Pictures"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Dan
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light">
            Nature Videographer • Storyteller • Conservation Advocate
          </p>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profileImage}
              alt="Dan filming in nature"
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              My Journey with Nature
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Growing up in Kenya’s wild landscapes inspired a deep love for the
              natural world — the golden light, the storm’s hush, the quiet
              dignity of wildlife.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With my camera, I document these moments not just to capture them,
              but to <strong>preserve their soul</strong>. Every frame is a love
              letter to nature.
            </p>
            <p className="text-lg text-gray-700">
              Today,{" "}
              <span className="font-bold text-yellow-600">Done Pictures</span>{" "}
              tells these stories through film, photography, and conservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            What I Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-5xl font-bold mb-6">Let’s Tell Your Story</h2>
          <p className="text-lg mb-8 font-medium">
            Whether it’s a wedding in the wild, a brand film, or a personal
            nature reel — I’m ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254707888778"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Message on WhatsApp
            </a>
            <a
              href="/portfolio"
              className="border-2 border-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a
              href="tel:+254707888778"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <Phone className="w-4 h-4" /> +254 707 888 778
            </a>
            <a
              href="mailto:picturesbydone@gmail.com"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <Mail className="w-4 h-4" /> picturesbydone@gmail.com
            </a>
            <a
              href="https://www.instagram.com/done_pics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <Instagram className="w-4 h-4" /> @donepictures
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Done Pictures. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
