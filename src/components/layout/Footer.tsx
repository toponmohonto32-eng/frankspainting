"use client";

import Link from "next/link";
import { Paintbrush, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks, services, contactInfo, companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">{companyInfo.name}</span>
                <p className="text-xs text-gray-400">{companyInfo.tagline}</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              {companyInfo.description}
            </p>
            <div className="flex gap-4">
              <a 
                href={contactInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Riverside, CA 92507</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">{companyInfo.license}</p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Serving Riverside, Inland Empire & Orange County
          </p>
        </div>
      </div>
    </footer>
  );
}
