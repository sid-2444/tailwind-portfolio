import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_g21gcpe",      // 🔥 YOUR SERVICE ID
        "template_9tgd7bi",      // 🔥 YOUR TEMPLATE ID
        form.current,
        "YHtxXgfiowjgbbBeQ"      // 🔥 YOUR PUBLIC KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 transition-all duration-500 
      bg-[#e8e6df] text-[#1a1a1a] 
      dark:bg-[#0a0a0a] dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Let’s build something amazing together
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 backdrop-blur-xl p-8 rounded-2xl 
          bg-white/40 dark:bg-white/5 
          border border-white/20 dark:border-white/10 
          shadow-xl"
        >
          {/* NAME */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg 
            bg-white/60 dark:bg-[#111] 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg 
            bg-white/60 dark:bg-[#111] 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg 
            bg-white/60 dark:bg-[#111] 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold 
            bg-gradient-to-r from-purple-500 to-pink-500 
            hover:scale-105 transition-all duration-300 text-white shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-sm mt-3 text-gray-700 dark:text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}