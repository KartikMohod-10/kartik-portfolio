import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mykpzlog", {
        method: "POST",
        body: new FormData(formRef.current),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully 🚀");
        formRef.current.reset();
      } else {
        console.error(result);
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error ❌");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-black px-5 sm:px-6 py-20 overflow-hidden pt-14"
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

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative bg-[#060010] border border-cyan-400/20 rounded-2xl overflow-hidden min-h-[420px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 blur-2xl opacity-60" />
          <img
            src="/me.jpg"
            alt="Kartik Mohod"
            className="relative z-10 w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.05]"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <div className="bg-[#060010] border border-white/10 rounded-2xl p-5 flex flex-col min-h-[420px]">

          <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none text-sm"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none text-sm"
            />

            <input
              name="subject"
              placeholder="Subject"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none text-sm"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none resize-none text-sm"
            />

            <button
              type="submit"
              className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 cursor-pointer
              text-black font-semibold py-2.5 rounded-lg text-sm transition-all hover:scale-[1.02]"
            >
              Send Message 🚀
            </button>
          </form>

          {/* CONTACT CARDS */}
          <div className="mt-6 space-y-3">
  <ContactCard
    icon={<Phone size={18} />}
    title="Phone"
    value="+91 84590 90746"
    href="tel:+918459090746"
  />
  <ContactCard
    icon={<Mail size={18} />}
    title="Email"
    value="kartikmohod204@gmail.com"
    href="mailto:kartikmohod204@gmail.com"
  />
  <ContactCard
    icon={<Linkedin size={18} />}
    title="LinkedIn"
    value="Kartik Mohod"
    href="https://www.linkedin.com/in/kartik-mohod/"
  />
  <ContactCard
    icon={<Github size={18} />}
    title="GitHub"
    value="KartikMohod-10"
    href="https://github.com/KartikMohod-10"
  />
</div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-start gap-3
        bg-white/5 hover:bg-white/10
        transition p-4 rounded-xl
        cursor-pointer group
      "
    >
      {/* ICON */}
      <div
        className="
          w-10 h-10 min-w-[40px] min-h-[40px]
          rounded-lg
          bg-cyan-500/20
          flex items-center justify-center
          text-cyan-400
          flex-shrink-0
        "
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="min-w-0">
        <p className="text-xs text-gray-400">{title}</p>
        <p
          className="
            text-sm text-white font-medium
            break-words
            leading-snug
            group-hover:text-cyan-400 transition
          "
        >
          {value}
        </p>
      </div>
    </a>
  );
}


