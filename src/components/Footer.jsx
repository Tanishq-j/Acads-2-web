import { Mail, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ACADSSLogo from '@/assets/ACADSS.png';
import KitCoEKLogo from '@/assets/kitlogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:contact@acadskitcoek.in',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/',
      label: 'Instagram'
    }
  ];
  const quickLinks = [
    { name: 'About ACADS', to: '/about' },
    { name: 'Events', to: '/events' },
    { name: 'Join Us', to: '/join' },
    { name: 'Contact', to: '/contact' },
    { name: 'KITCoEK', href: 'http://kitcoek.in', external: true }
  ];
  const resources = [
    { name: 'Workshops', to: '/workshops' },
    { name: 'News', to: '/news' },
    { name: 'Sponsors', to: '/sponsors' },
    { name: 'FAQs', to: '/faq' }
  ];

  return (
    <footer className="relative">
      <div className="glass-card rounded-none border-x-0 border-b-0">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Left-aligned logo and info */}
            <div className="lg:col-span-2 flex flex-col items-start mb-8">
              <div className="flex gap-8 mb-6">
                <a href="https://acadskitcoek.in" target="_blank" rel="noopener noreferrer">
                  <img src={ACADSSLogo} alt="ACADSS Logo" className="h-20 w-auto object-contain" />
                </a>
                <a href="https://kitcoek.in" target="_blank" rel="noopener noreferrer">
                  <img src={KitCoEKLogo} alt="KITCoEK Logo" className="h-20 w-auto object-contain" />
                </a>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Association of CSE (AIML & DS) Students of KIT's College of Engineering (Autonomous), Kolhapur.<br />
                Empowering students through technical excellence and innovation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-white/70" />
                  <span className="text-sm">KIT's College of Engineering, Kolhapur</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-white/70" />
                  <span className="text-sm">contact@acadskitcoek.in</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-white/70" />
                  <span className="text-sm">+91 XXX XXX XXXX</span>
                </div>
              </div>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="glass-card p-3 group"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map(({ name, to, href, external }) => (
                  <li key={name}>
                    {external && href ? (
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    ) : (
                      <Link
                        to={to || '/'}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Resources</h4>
              <ul className="space-y-3">
                {resources.map(({ name, to }) => (
                  <li key={name}>
                    <Link to={to} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright with less spacing below */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-center h-12 text-muted-foreground text-sm">
              <span>&copy; {currentYear} ACADS KITCoEK.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient shape */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
