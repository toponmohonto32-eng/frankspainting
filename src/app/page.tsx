"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { 
  Paintbrush, 
  Home, 
  Building2, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown,
  Menu,
  X,
  Star,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Shield,
  Award,
  Users,
  Calendar,
  Droplets,
  Hammer,
  Palette,
  Brush
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Navigation sections
const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "areas", label: "Service Areas" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

// Services data
const services = [
  {
    id: "interior",
    title: "Interior Painting",
    icon: Home,
    description: "Transform your living spaces with our expert interior painting services. We use premium paints and techniques to deliver flawless finishes that last.",
    features: [
      "Wall & ceiling painting",
      "Color consultation",
      "Trim & molding",
      "Texture application",
      "Primer & sealant services",
      "Eco-friendly options"
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    icon: Building2,
    description: "Protect and beautify your property with our comprehensive exterior painting services. Built to withstand California's climate.",
    features: [
      "House & building painting",
      "Stucco & siding",
      "Deck & fence staining",
      "Pressure washing",
      "Weatherproofing",
      "Caulking & sealing"
    ],
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    icon: Paintbrush,
    description: "Professional painting solutions for businesses of all sizes. Minimal disruption, maximum impact.",
    features: [
      "Office spaces",
      "Retail stores",
      "Warehouses",
      "Multi-unit properties",
      "Flexible scheduling",
      "ADA compliance"
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "cabinet",
    title: "Cabinet Refinishing",
    icon: Sparkles,
    description: "Give your kitchen and bathroom cabinets a stunning makeover without the cost of replacement.",
    features: [
      "Kitchen cabinets",
      "Bathroom vanities",
      "Color matching",
      "Glaze & distressing",
      "Hardware updating",
      "Lacquer finishes"
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "epoxy",
    title: "Epoxy Flooring",
    icon: Droplets,
    description: "Durable, beautiful epoxy flooring solutions for garages, patios, and commercial spaces.",
    features: [
      "Garage floors",
      "Commercial flooring",
      "Decorative flakes",
      "Metallic finishes",
      "Anti-slip coatings",
      "UV resistant"
    ],
    color: "from-purple-500 to-pink-500",
  },
];

// Service areas
const serviceAreas = [
  { name: "Riverside", zip: "92501-92509" },
  { name: "Corona", zip: "92877-92883" },
  { name: "Moreno Valley", zip: "92551-92557" },
  { name: "San Bernardino", zip: "92401-92427" },
  { name: "Ontario", zip: "91758-91762" },
  { name: "Pomona", zip: "91766-91769" },
  { name: "Anaheim", zip: "92801-92899" },
  { name: "Orange County", zip: "Various" },
  { name: "Rancho Cucamonga", zip: "91701-91739" },
  { name: "Fontana", zip: "92331-92337" },
];

// Gallery items
const galleryItems = [
  { id: 1, title: "Modern Living Room", category: "Interior", description: "Contemporary color scheme with accent wall", image: "/images/gallery/interior-1.png" },
  { id: 2, title: "Colonial Exterior", category: "Exterior", description: "Complete exterior transformation", image: "/images/gallery/exterior-1.png" },
  { id: 3, title: "Office Complex", category: "Commercial", description: "Professional office space refresh", image: "/images/gallery/commercial-1.png" },
  { id: 4, title: "Kitchen Makeover", category: "Cabinet", description: "White shaker style cabinets", image: "/images/gallery/cabinet-1.png" },
  { id: 5, title: "Garage Floor", category: "Epoxy", description: "Metallic epoxy with flake finish", image: "/images/gallery/epoxy-1.png" },
  { id: 6, title: "Bedroom Suite", category: "Interior", description: "Master bedroom with vaulted ceilings", image: "/images/gallery/interior-2.png" },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah M.",
    location: "Riverside",
    rating: 5,
    text: "Frank and his team did an amazing job on our home exterior. They were professional, on time, and the quality exceeded our expectations. Highly recommend!",
  },
  {
    name: "Robert J.",
    location: "Corona",
    rating: 5,
    text: "Best painting experience we've ever had. Frank was so helpful with color selection, and the crew was respectful of our home. The attention to detail was outstanding.",
  },
  {
    name: "Lisa T.",
    location: "Moreno Valley",
    rating: 5,
    text: "They transformed our outdated kitchen cabinets into something beautiful. Professional service from start to finish. Would definitely use again!",
  },
  {
    name: "Michael G.",
    location: "Anaheim",
    rating: 5,
    text: "Frank Painting painted our entire office building. Minimal disruption to our business and excellent results. Very impressed with their professionalism.",
  },
];

// Stats
const stats = [
  { number: "16+", label: "Years Experience", icon: Calendar },
  { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
  { number: "100%", label: "Satisfaction Rate", icon: Star },
  { number: "33+", label: "5-Star Reviews", icon: Award },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Section component wrapper
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
      className={`min-h-screen py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// Navigation component
function Navigation({ activeSection, scrolled }: { activeSection: string; scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
                Frank Painting
              </span>
              <p className={`text-xs ${scrolled ? "text-gray-500" : "text-white/70"}`}>
                Excellence in Every Stroke
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-emerald-500 text-white"
                    : scrolled
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25"
            >
              Free Estimate
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-600" : "text-white"}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-emerald-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500"
              >
                Get Free Estimate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white/90 text-sm font-medium">5.0 Rating • 33+ Reviews</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Space with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Expert Painting
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-white/70 mb-8 max-w-xl">
              With over 16 years of experience serving Riverside, Inland Empire, and Orange County, 
              we deliver exceptional quality on every project. Licensed, insured, and committed to excellence.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/25 px-8 py-6 text-lg"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 mb-6">
                    <Paintbrush className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white/80 text-xl font-medium">Quality You Can Trust</p>
                  <p className="text-white/50 mt-2">Since 2008</p>
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Licensed & Insured</p>
                  <p className="text-gray-500 text-xs">Full Protection</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">5.0 Rating</p>
                  <p className="text-gray-500 text-xs">33+ Happy Customers</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-500 text-emerald-600">
              Our Services
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Painting{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential interiors to commercial exteriors, we offer a full range of professional painting services tailored to your needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  selectedService === service.id ? "ring-2 ring-emerald-500" : ""
                }`}>
                  {/* Gradient accent */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="ghost"
                      className="mt-4 w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg"
          >
            Request Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center p-6 bg-gray-50 rounded-2xl"
                        >
                          <Icon className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                          <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 border-4 border-emerald-200 rounded-full"
              />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-500 text-emerald-600">
                About Us
              </Badge>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Local Painter
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-6">
              Frank Painting has been transforming homes and businesses across the Inland Empire and Orange County 
              for over 16 years. Founded by Frank Dora, our company is built on a foundation of quality craftsmanship, 
              honest pricing, and exceptional customer service.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8">
              We take pride in every project, whether it&apos;s a single room refresh or a complete commercial property makeover. 
              Our team is fully licensed and insured, giving you peace of mind throughout the entire process.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                "Licensed & Fully Insured",
                "Free Color Consultation",
                "Quality Paints & Materials",
                "Clean & Respectful Crew",
                "Flexible Scheduling",
                "Written Guarantees"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              >
                Contact Us Today
              </Button>
              <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                <Phone className="mr-2 w-4 h-4" />
                (323) 707-2211
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Service Areas Section
function ServiceAreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="areas" ref={ref} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-400 text-emerald-400">
              Coverage Area
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-4">
            Areas We{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Serve
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-white/70 max-w-2xl mx-auto">
            Proudly serving Riverside, the Inland Empire, and Orange County for over 16 years.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all cursor-pointer"
            >
              <MapPin className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{area.name}</h3>
              <p className="text-white/50 text-sm">{area.zip}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">Don&apos;t see your area? Contact us to check availability!</p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Check Your Area
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-500 text-emerald-600">
              Our Work
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Project{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our recent projects and see the quality of our work.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge variant="outline" className="mb-2 border-white/30 text-white">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-500 text-emerald-600">
              Testimonials
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>
              
              <Separator className="my-4" />
              
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">Y</span>
            </div>
            <span>5.0 on Yelp</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">G</span>
            </div>
            <span>5.0 on Google</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-600" />
            </div>
            <span>33+ Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-500 text-emerald-600">
              Get In Touch
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Request Your{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Free Estimate
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below or give us a call. We&apos;ll get back to you within 24 hours with a free, no-obligation quote.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Free Estimate
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                
                <div className="space-y-6">
                  <a href="tel:3237072211" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">(323) 707-2211</p>
                    </div>
                  </a>

                  <a href="mailto:info@frankspainting.net" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@frankspainting.net</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon - Fri: 7:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: By Appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-600">Riverside, Inland Empire</p>
                      <p className="text-gray-600">Orange County, CA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Frank Painting?</h3>
                <ul className="space-y-3">
                  {[
                    "Free estimates & consultations",
                    "Licensed & fully insured",
                    "16+ years experience",
                    "Quality materials guaranteed",
                    "Clean, respectful crews",
                    "Competitive pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Frank Painting</span>
                <p className="text-xs text-gray-400">Excellence in Every Stroke</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional painting services for residential and commercial properties. 
              Serving Riverside, Inland Empire, and Orange County for over 16 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
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
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {sections.slice(1).map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                (323) 707-2211
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                info@frankspainting.net
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Riverside, CA 92507
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Frank Painting. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Licensed & Insured | Riverside, CA
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} scrolled={scrolled} />
      
      <HeroSection />
      
      <ServicesSection />
      
      <AboutSection />
      
      <ServiceAreasSection />
      
      <GallerySection />
      
      <TestimonialsSection />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}
