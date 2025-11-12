// src/pages/Contact.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const WHATSAPP = "254707888778";

const goldIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -30],
});

export default function Contact() {
  const waLink = (msg) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400">
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md">
            Let’s talk about your next shoot.
          </p>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: "WhatsApp",
                desc: "Fastest way to chat",
                link: waLink("Hi! I'd love to book a shoot or get a quote."),
                label: "Open WhatsApp",
              },
              {
                icon: <Phone className="w-10 h-10" />,
                title: "Call",
                desc: "+254 707 888 778",
                link: "tel:+254707888778",
                label: "Call Now",
              },
              {
                icon: <Mail className="w-10 h-10" />,
                title: "Email",
                desc: "picturesbydone@gmail.com",
                link: "mailto:picturesbydone@gmail.com",
                label: "Send Email",
              },
            ].map((c, i) => (
              <motion.a
                key={i}
                href={c.link}
                target={c.title === "WhatsApp" ? "_blank" : undefined}
                rel={c.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-yellow-500 mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-600 mb-4">{c.desc}</p>
                <span className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold group-hover:bg-yellow-400 transition">
                  {c.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            My Service Region
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Based in Kenya — available for shoots across East Africa and beyond.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20">
            <MapContainer
              center={[-1.286389, 36.817223]} // Nairobi
              zoom={7}
              scrollWheelZoom={false}
              className="h-[400px] w-full grayscale-[40%] contrast-[120%]"
            >
              <TileLayer
                attribution='&copy; <a href="https://cartodb.com/">CartoDB</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              <Marker position={[-1.286389, 36.817223]} icon={goldIcon}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-yellow-600">
                      Done Pictures Studio
                    </h3>
                    <p className="text-sm text-gray-700">
                      Nairobi, Kenya — Capturing stories in nature.
                    </p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>

            {/* Glowing animated border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-500/10 animate-pulse pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* Social CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Follow the Journey
          </h2>
          <a
            href="https://www.instagram.com/done_pics?igsh=MXhncGtrbTdmc212aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            @donepictures
          </a>
        </motion.div>
      </section>
    </>
  );
}
