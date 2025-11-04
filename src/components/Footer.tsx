import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import beneLogo from "@/assets/bene logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={beneLogo} alt="Bene Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90">
              Premium furniture for your home. Quality craftsmanship and timeless design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/prototype" className="opacity-90 hover:opacity-100 transition-opacity">
                  Prototype
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Phone size={16} />
                <span>+62 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail size={16} />
                <span>info@bene.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Bene Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
