
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">EXO-<span className="text-primary/80">GUARDIANS</span></span>
            </div>
            <p className="text-gray-600 text-sm">
              Comprehensive protection and support for overseas workers, ensuring their welfare, legal rights, and peace of mind.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Worker Protection</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Legal Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Communication Channels</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Medical Assistance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Training & Education</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">EXO Tower, Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600 text-sm">+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600 text-sm">info@exoguardians.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EXO Guardians. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
