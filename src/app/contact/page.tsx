'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyInfo } from '@/data/company';
import { validateEmail, validatePhone, sanitizeInput } from '@/lib/utils';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Sanitize inputs
    const sanitized = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      company: sanitizeInput(formData.company),
      product: sanitizeInput(formData.product),
      message: sanitizeInput(formData.message),
    };

    // Simulate API call (replace with real API in Phase 2)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', sanitized);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3.5 rounded-xl bg-navy-800/50 border ${
      hasError ? 'border-red-500/50' : 'border-steel-800'
    } text-white placeholder:text-steel-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-2xl leading-relaxed">
              Ready to discuss your engineering needs? Contact us for custom quotes,
              technical specifications, and expert consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: <Phone className="w-5 h-5" />, label: 'Phone', values: companyInfo.phones, type: 'tel' },
              { icon: <Mail className="w-5 h-5" />, label: 'Email', values: companyInfo.emails, type: 'mailto' },
              { icon: <MapPin className="w-5 h-5" />, label: 'Location', values: ['Mira Road East, Thane, Maharashtra'], type: 'text' },
              { icon: <Clock className="w-5 h-5" />, label: 'Working Hours', values: ['Mon - Sat: 9AM - 7PM'], type: 'text' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeInUp} className="glass-card p-5 hover:border-accent/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-2">{item.label}</h3>
                {item.values.map((val) => (
                  <p key={val} className="text-steel-400 text-sm">
                    {item.type === 'tel' ? (
                      <a href={`tel:${val}`} className="hover:text-accent transition-colors">{val}</a>
                    ) : item.type === 'mailto' ? (
                      <a href={`mailto:${val}`} className="hover:text-accent transition-colors">{val}</a>
                    ) : val}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <div className="glass-card p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">Thank You!</h3>
                    <p className="text-steel-400 mb-6">Your inquiry has been received. Our team will get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' }); }}
                      className="btn-outline text-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-2xl text-white mb-2">Send Us an Inquiry</h2>
                    <p className="text-steel-400 text-sm mb-8">Fill out the form and we&apos;ll respond within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-steel-300 text-sm font-medium mb-1.5">Full Name*</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={inputClasses(!!errors.name)}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-steel-300 text-sm font-medium mb-1.5">Email Address*</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={inputClasses(!!errors.email)}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-steel-300 text-sm font-medium mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className={inputClasses(!!errors.phone)}
                          />
                          {errors.phone && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-steel-300 text-sm font-medium mb-1.5">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className={inputClasses(false)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-steel-300 text-sm font-medium mb-1.5">Product Interest</label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className={inputClasses(false) + ' cursor-pointer'}
                        >
                          <option value="" className="bg-navy-900">Select a product category</option>
                          <option value="tube-fittings" className="bg-navy-900">Tube & Instrumentation Fittings</option>
                          <option value="hydraulic-fittings" className="bg-navy-900">Hydraulic Fittings</option>
                          <option value="valves" className="bg-navy-900">Valves</option>
                          <option value="custom" className="bg-navy-900">Custom Requirements</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-steel-300 text-sm font-medium mb-1.5">Message*</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          rows={4}
                          className={inputClasses(!!errors.message) + ' resize-none'}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} className="mr-2" />
                              Send Inquiry
                            </>
                          )}
                        </button>
                        <a
                          href={`https://wa.me/917021193600?text=${encodeURIComponent('Hi Preciflow! I would like to request a quote.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline !border-green-500 !text-green-400 hover:!bg-green-500 hover:!text-white text-center"
                        >
                          <MessageCircle size={16} className="mr-2" />
                          WhatsApp
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <div className="glass-card overflow-hidden h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7!2d72.85!3d19.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMira+Road+East!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter brightness-75 contrast-110"
                  title="Preciflow Location - Mira Road East, Thane"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
