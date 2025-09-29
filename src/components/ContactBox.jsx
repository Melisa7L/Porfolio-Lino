import React, { useState } from 'react';

const ContactBox = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const res = await fetch('https://formspree.io/f/xwkzqgqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('¡Mensaje enviado!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Error al enviar. Intenta nuevamente.');
      }
    } catch {
      setStatus('Error de conexión.');
    }
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <h3 className="text-xl font-bold mb-2 text-teal-300">¿Quieres contactarme?</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="p-2 rounded bg-white/80 text-black"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu email"
          required
          className="p-2 rounded bg-white/80 text-black"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje..."
          required
          rows={4}
          className="p-2 rounded bg-white/80 text-black"
        />
        <button
          type="submit"
          className="bg-teal-400 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition"
        >
          Enviar
        </button>
        {status && <p className="text-sm mt-2 text-teal-300">{status}</p>}
      </form>
    </div>
  );
};

export default ContactBox;
