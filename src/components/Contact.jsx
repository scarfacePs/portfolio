import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

     emailjs.send(
      "service_gnp2tpn",   // remplace ak SERVICE_ID ou
      "template_q9wj02q",  // remplace ak TEMPLATE_ID ou
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "HQy2TP6I0StwGE4dB"       // remplace ak User ID ou
    )
    .then(() => {
      alert("Message envoyé ✔️");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      alert("Erreur, essai encore ");
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary-light dark:bg-secondary-dark text-gray-900 dark:text-gray-100 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Contacts</h2>
      <p className="text-gray-600 mb-10">Besoin d`un site? Contactez Moi⚡</p>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 max-w-3xl mx-auto">
        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition" />
        <textarea name="message" rows="5" placeholder="Message..." value={form.message} onChange={handleChange} required className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition"></textarea>
        <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold py-3 rounded-lg hover:from-primary-700 hover:to-accent transition transform hover:scale-105 disabled:opacity-50">
          {loading ? "Envoi..." : "Envoyer Message"}
        </button>
      </form>
    </section>
  );
}
