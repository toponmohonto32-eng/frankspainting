"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Home, Building2, Paintbrush, Sparkles, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/shared/PageHeader";
import { services } from "@/lib/data";

// Icon mapping
const iconMap: Record<string, any> = {
  Home,
  Building2,
  Paintbrush,
  Sparkles,
  Droplets,
};

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

export default function ServicesPage() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });

  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Professional Painting Services"
        subtitle="From residential interiors to commercial exteriors, we offer comprehensive painting solutions tailored to your needs."
      />

      {/* All Services */}
      <section ref={servicesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
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
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-20 h-20 text-white/90" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={whyInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Frank Painting?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to delivering exceptional results on every project.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={whyInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "16+ Years Experience", description: "Decades of expertise in residential and commercial painting." },
              { title: "Licensed & Insured", description: "Full protection and peace of mind on every project." },
              { title: "Quality Materials", description: "We use only premium paints and professional-grade supplies." },
              { title: "Free Estimates", description: "No-obligation quotes with detailed project breakdowns." },
              { title: "Clean Work Sites", description: "We protect your property and clean up thoroughly." },
              { title: "Satisfaction Guaranteed", description: "We stand behind our work with written guarantees." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free estimate on your painting project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
