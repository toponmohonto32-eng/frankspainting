"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  Paintbrush, 
  Phone, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Shield,
  Award,
  Calendar,
  MapPin,
  Home,
  Building2,
  Sparkles,
  Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, stats, testimonials, serviceAreas } from "@/lib/data";

// Icon mapping
const iconMap: Record<string, any> = {
  Home,
  Building2,
  Paintbrush,
  Sparkles,
  Droplets,
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

// Stats icon mapping
const statsIconMap: Record<string, any> = {
  Calendar,
  CheckCircle2,
  Star,
  Award,
};

export default function HomePage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const areasRef = useRef(null);
  const areasInView = useInView(areasRef, { once: true, margin: "-100px" });

  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/25 px-8 py-6 text-lg"
                    >
                      Get Free Estimate
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                    >
                      View Services
                    </Button>
                  </Link>
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
            onClick={() => document.getElementById("services-preview")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section id="services-preview" ref={servicesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
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
              From residential interiors to commercial exteriors, we offer a full range of professional painting services.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Home;
              return (
                <motion.div
                  key={service.id}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/services/${service.slug}`}>
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                        <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section ref={areasRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={areasInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-500 text-emerald-600">
                Coverage Area
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Proudly Serving{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Southern California
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Riverside, Inland Empire, and Orange County for over 16 years.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={areasInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {serviceAreas.slice(0, 5).map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <MapPin className="w-8 h-8 text-emerald-500 mb-3" />
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{area.name}</h3>
                <p className="text-gray-500 text-sm">{area.zip}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={areasInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <Link href="/areas">
              <Button variant="outline" className="border-emerald-500 text-emerald-600">
                View All Service Areas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
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
          </motion.div>

          <motion.div
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/reviews">
              <Button variant="outline" className="border-emerald-500 text-emerald-600">
                Read All Reviews
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free estimate today and let us bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:3237072211">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  (323) 707-2211
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
