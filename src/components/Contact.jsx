import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g21gcpe",   // 🔥 your service ID
        "template_9tgd7bi",  // 🔥 your template ID (replace this)
        form.current,
        "YHtxXgfiowjgbbBeQ"    // 🔥 your public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 text-center bg-[#e7e3da] dark:bg-[#111] transition"
    >
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-white dark:bg-[#1a1a1a]"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-white dark:bg-[#1a1a1a]"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-3 rounded bg-white dark:bg-[#1a1a1a]"
        />

        <button
          type="submit"
          className="bg-[#c9a75d] text-black py-3 rounded-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}