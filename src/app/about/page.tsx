"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, Calendar, Award, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/shared/PageHeader";
import { stats, companyInfo, whyChooseUs } from "@/lib/data";

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

export default function AboutPage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <>
      <PageHeader
        badge="About Us"
        title="Your Trusted Local Painter"
        subtitle="Serving Riverside, Inland Empire, and Orange County for over 16 years."
      />

      {/* Story Section */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
                            animate={storyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
              animate={storyInView ? "animate" : "initial"}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-6">
                Frank Painting was founded in {companyInfo.founded} by Frank Dora with a simple mission: 
                to provide exceptional painting services with honesty, integrity, and craftsmanship.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-6">
                What started as a one-man operation has grown into a trusted team of skilled painters 
                serving homeowners and businesses throughout Riverside, the Inland Empire, and Orange County. 
                Despite our growth, we&apos;ve maintained our commitment to personalized service and attention to detail.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8">
                We take pride in every project, whether it&apos;s a single room refresh or a complete commercial 
                property makeover. Our team is fully licensed and insured, giving you peace of mind throughout 
                the entire process.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500">
                    Contact Us Today
                  </Button>
                </Link>
                <a href="tel:3237072211">
                  <Button variant="outline" className="border-emerald-500 text-emerald-600">
                    <Phone className="mr-2 w-4 h-4" />
                    (323) 707-2211
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "Honest pricing, transparent communication, and no hidden fees."
              },
              {
                icon: Award,
                title: "Quality",
                description: "Premium materials and expert craftsmanship on every project."
              },
              {
                icon: Users,
                title: "Respect",
                description: "We treat your home like our own and clean up after every job."
              },
              {
                icon: Calendar,
                title: "Reliability",
                description: "We show up on time and complete projects as promised."
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={statsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Frank Painting?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{item.title}</span>
                </motion.div>
              );
            })}
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss your project and bring your vision to life.
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
