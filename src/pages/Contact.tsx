import type React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Please fill out the form below, give us a call, or visit us in person.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-[#3A59D1]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Our Location</h3>
                        <p className="text-gray-600 mb-1">No. 3, 2nd Floor, Royal Tower,</p>
                        <p className="text-gray-600 mb-1">Opposite MIT Flyover,</p>
                        <p className="text-gray-600">Pallavaram, Chennai – 600043</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-[#3A59D1]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <p className="text-gray-600 mb-1">Main: +91 91503 14780</p>
                        <p className="text-gray-600">Training & Admissions: +91 99403 65182</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-[#3A59D1]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-1">ctms@cloudtechmind.in</p>
                        <p className="text-gray-600">training@cloudtechmind.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-[#3A59D1]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                        <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 01:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-6">
                We’re active on social media! Follow us for updates, workshops, career tips, and events.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#3A59D1] text-white flex items-center justify-center hover:bg-[#2A49C1] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#3A59D1] text-white flex items-center justify-center hover:bg-[#2A49C1] transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#3A59D1] text-white flex items-center justify-center hover:bg-[#2A49C1] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#3A59D1] text-white flex items-center justify-center hover:bg-[#2A49C1] transition-colors"
                    aria-label="YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Enter message subject"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#3A59D1] hover:bg-[#2A49C1]">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* Replace this iframe with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6347335661215!2d80.15082517481727!3d12.96407239285225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ff43f959715%3A0x68faaff50cb5aeb2!2sCloud%20Tech%20Mind%20Solutions!5e0!3m2!1sen!2sin!4v1617764014853!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about contacting us and visiting our campus.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#3A59D1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">What are the best times to visit?</h3>
                    <p className="text-gray-600">
                    We recommend visiting during office hours, Monday to Friday, 9:00 AM to 6:00 PM. 
                    For dedicated guidance, please book an appointment in advance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#3A59D1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">How long does it take to receive a response?</h3>
                    <p className="text-gray-600">
                    We usually respond within 24–48 business hours. For urgent queries, please call us directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#3A59D1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Is parking available for visitors?</h3>
                    <p className="text-gray-600">
                    Yes, visitor parking is available in front of our building. Kindly check in at the 
                    reception upon arrival.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#3A59D1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Can I request a specific department?</h3>
                    <p className="text-gray-600">
                    Absolutely! Mention the department (training, sales, support, etc.) in your message, 
                    and we’ll route it accordingly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3A59D1] text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <AlertCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight mb-4">Need Immediate Assistance?</h2>
            <p className="mb-6 text-white/90">
            Our support and admissions team are ready to assist you in taking the next step in your career.
            </p>
            <div className="inline-block bg-white px-6 py-3 rounded-lg">
              <p className="text-[#3A59D1] font-bold text-xl">Call us: +91 91503 14780</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
