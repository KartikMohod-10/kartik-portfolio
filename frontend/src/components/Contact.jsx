import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnybut6",
        "template_yrueblp",
        formRef.current,
        "VtRAcsniEhVEStijg"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (err) => {
          console.error(err);
          alert("Message failed ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-black px-5 sm:px-6 py-20 overflow-hidden pt-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070012] via-black to-[#020024]" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          Let’s connect and build something together
        </p>
      </motion.div>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch">

        {/* LEFT IMAGE CARD */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
            bg-[#060010]
            border border-cyan-400/20
            rounded-2xl
            p-5
            flex items-center justify-center
            lg:h-full
          "
        >
          <img
            src="/me4.jpg"
            alt="Kartik Mohod"
            className="
              w-full
              max-w-[260px] sm:max-w-[300px] md:max-w-[340px]
              lg:max-w-[360px]
              object-contain
              rounded-xl
            "
          />
        </motion.div>

        {/* RIGHT FORM CARD */}
        <div
          className="
            bg-[#060010]
            border border-white/10
            rounded-2xl
            p-5
            flex flex-col
            lg:h-full
          "
        >
          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-3"
          >
            <input
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-white/10
              rounded-lg px-4 py-2.5 text-white outline-none text-sm"
            />

            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-white/10
              rounded-lg px-4 py-2.5 text-white outline-none text-sm"
            />

            <input
              name="subject"
              placeholder="Subject"
              className="w-full bg-black/40 border border-white/10
              rounded-lg px-4 py-2.5 text-white outline-none text-sm"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
              className="w-full bg-black/40 border border-white/10
              rounded-lg px-4 py-2.5 text-white outline-none resize-none text-sm"
            />

            <button
              type="submit"
              className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600
              cursor-pointer transition-all hover:scale-[1.02]
              text-black font-semibold py-2.5 rounded-lg text-sm"
            >
              Send Message 🚀
            </button>
          </form>

          {/* DETAILS */}
          <div
            className="
              mt-6 lg:mt-auto
              pt-4
              border-t border-white/10
              grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm
            "
          >
            <a
              href="tel:+918459090746"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <Phone size={16} /> +91 84590 90746
            </a>

            <a
              href="mailto:kartikmohod204@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <Mail size={16} /> kartikmohod204@gmail.com
            </a>

            <a
              href="https://github.com/KartikMohod-10"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <Github size={16} /> KartikMohod-10
            </a>

            <a
              href="https://www.linkedin.com/in/kartik-mohod/"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <Linkedin size={16} /> Kartik Mohod
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
