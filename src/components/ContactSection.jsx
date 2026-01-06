import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    city: '',
    inquiry: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to join ACADS? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 h-full">
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Visit Us</h3>

              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://maps.google.com/maps?q=16.65335101946007,74.26109754067468&z=16&output=embed"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  title="KIT College of Engineering Map"
                />
                <div className="absolute inset-0 pointer-events-none" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      KIT's College of Engineering (Autonomous)<br />
                      Gokul Shirgaon, Kolhapur, Maharashtra 416234
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-secondary/20 to-secondary/10">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-accent/10">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@acadskitcoek.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-input w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glass-input w-full"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-input w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="glass-input w-full"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-foreground mb-2">
                  Current Occupation <span className="text-accent">*</span>
                </label>
                <select
                  id="occupation"
                  name="occupation"
                  required
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="glass-input w-full"
                >
                  <option value="">Select your occupation</option>
                  <option value="student">Student</option>
                  <option value="working-professional">Working Professional</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-foreground mb-2">
                  Required Assistance/Inquiry <span className="text-accent">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  required
                  rows={4}
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="glass-input w-full resize-none"
                  placeholder="Tell us how we can help you or what you'd like to know about ACADS..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-auto bg-gradient-to-r from-primary to-secondary text-background font-semibold py-4 px-6 rounded-xl hover:scale-105 transition-transform duration-300 glow-effect flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;