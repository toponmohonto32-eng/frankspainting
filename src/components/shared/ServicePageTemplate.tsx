"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PageHeader from "@/components/shared/PageHeader";
import { services, testimonials } from "@/lib/data";

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

interface ServicePageTemplateProps {
  service: typeof services[0];
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const Icon = service.icon;
  
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  // Filter testimonials for this service
  const relatedTestimonials = testimonials.filter(
    t => t.service.toLowerCase().includes(service.title.toLowerCase().split(" ")[0])
  );

  return (
    <>
      <PageHeader
        badge="Professional Services"
        title={service.title}
        subtitle={service.description}
        gradient={service.color}
      />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                {/* Hero Image */}
                <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden mb-12 h-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-32 h-32 text-white/80" />
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div variants={fadeInUp} className="prose prose-lg max-w-none mb-12">
                  {service.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Benefits */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-28"
              >
                {/* CTA Card */}
                <Card className="border-0 shadow-xl mb-6">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Free Quote</h3>
                    <p className="text-gray-600 mb-6">
                      Ready to start your project? Contact us for a free, no-obligation estimate.
                    </p>
                    <div className="space-y-3">
                      <Link href="/contact" className="block">
                        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500">
                          Request Quote
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <a href="tel:3237072211" className="block">
                        <Button variant="outline" className="w-full border-emerald-500 text-emerald-600">
                          <Phone className="mr-2 w-4 h-4" />
                          (323) 707-2211
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        <div>
                          <p className="font-medium text-gray-900">16+ Years</p>
                          <p className="text-sm text-gray-500">Experience</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <div>
                          <p className="font-medium text-gray-900">Licensed & Insured</p>
                          <p className="text-sm text-gray-500">Full Protection</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-emerald-500" />
                        <div>
                          <p className="font-medium text-gray-900">Quality Guaranteed</p>
                          <p className="text-sm text-gray-500">Written Warranty</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive {service.title.toLowerCase()} services cover everything you need.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={processInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process from start to finish.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate={processInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {relatedTestimonials.length > 0 && (
        <section ref={testimonialsRef} className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate={testimonialsInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
                Customer Reviews
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our customers say about our {service.title.toLowerCase()} services.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              animate={testimonialsInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {relatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Your {service.title} Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free estimate today. No obligation, just honest advice.
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
