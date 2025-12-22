import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron">
                <span className="font-display text-xl font-bold text-foreground">H</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Heritage</h3>
                <p className="text-xs text-primary-foreground/70 -mt-1">Handloom</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Connecting master artisans with conscious consumers. Every thread tells a story of tradition, skill, and heritage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-saffron transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-saffron transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-saffron transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Artisans", "Categories", "New Arrivals", "Best Sellers"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/80 hover:text-saffron transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              {["FAQs", "Shipping Info", "Returns", "Track Order", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/80 hover:text-saffron transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-saffron" />
                <span className="text-sm text-primary-foreground/80">
                  123 Artisan Lane, Craft District, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-saffron" />
                <span className="text-sm text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-saffron" />
                <span className="text-sm text-primary-foreground/80">hello@heritagehandloom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Heritage Handloom. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-saffron transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-saffron transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
