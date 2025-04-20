import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Logo from '@/assets/school-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t dark:bg-gray-900 dark:border-gray-800">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About School Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="School Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-[#3A59D1] dark:text-blue-300">Cloud Tech Mind Solutions</span>
            </div>
            <p className="text-gray-600 text-sm mt-4 dark:text-gray-400">
            CTMS teaches all the listed courses in both English & Tamil. CTMS will provide live projects guidance at the end of the Course.  Bulk Discounts available for Group Coaching.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#3A59D1] hover:text-[#2A49C1] dark:text-blue-300 dark:hover:text-blue-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#3A59D1] hover:text-[#2A49C1] dark:text-blue-300 dark:hover:text-blue-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#3A59D1] hover:text-[#2A49C1] dark:text-blue-300 dark:hover:text-blue-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#3A59D1] hover:text-[#2A49C1] dark:text-blue-300 dark:hover:text-blue-200">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#3A59D1] text-sm flex items-center gap-1 dark:text-gray-400 dark:hover:text-blue-300">
                  <ArrowRight size={14} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-600 hover:text-[#3A59D1] text-sm flex items-center gap-1 dark:text-gray-400 dark:hover:text-blue-300">
                  <ArrowRight size={14} /> Courses
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-600 hover:text-[#3A59D1] text-sm flex items-center gap-1 dark:text-gray-400 dark:hover:text-blue-300">
                  <ArrowRight size={14} /> Services
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-600 hover:text-[#3A59D1] text-sm flex items-center gap-1 dark:text-gray-400 dark:hover:text-blue-300">
                  <ArrowRight size={14} /> Transformations
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="text-gray-600 hover:text-[#3A59D1] text-sm flex items-center gap-1 dark:text-gray-400 dark:hover:text-blue-300">
                  <ArrowRight size={14} /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#3A59D1] text-sm flex items-center gap-1 dark:text-gray-400 dark:hover:text-blue-300">
                  <ArrowRight size={14} /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column - UPDATED BASED ON IMAGE DETAILS */}
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 text-[#3A59D1] shrink-0 dark:text-blue-300" />
                <span>57, First Floor, Dhargha Road, Rajaji Nagar, Zamin Pallavaram, Chennai -600043</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 text-[#3A59D1] shrink-0 dark:text-blue-300" />
                <span>+91 9789351057 / +91 7200065374</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 text-[#3A59D1] shrink-0 dark:text-blue-300" />
                <span>ctmst@cloudethmind.com</span>
              </li>
            </ul>
            {/* Optionally, you can add a map iframe here if needed */}
          </div>

          {/* Newsletter Signup Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-white">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
              Subscribe to our chourse to receive updates on chourse events, news, and announcements.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white dark:bg-gray-800"
                aria-label="Your email address"
              />
              <Button
                type="submit"
                className="w-full bg-[#3A59D1] hover:bg-[#2A49C1] text-white dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 dark:bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Cloud Tech Mind Solutions(CTMS). All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-[#3A59D1] dark:hover:text-blue-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#3A59D1] dark:hover:text-blue-300">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-[#3A59D1] dark:hover:text-blue-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
