import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      () => {
        alert("Failed to send message");
      }
    );
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

      <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-[#1a2233] text-white"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-[#1a2233] text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-lg bg-[#1a2233] text-white"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-full 
          bg-gradient-to-r from-[#c9a75d] to-[#b8893c] 
          text-black font-medium shadow-lg 
          hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}