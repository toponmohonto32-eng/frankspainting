import { 
  Paintbrush, 
  Home, 
  Building2, 
  Sparkles,
  Droplets,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  CheckCircle2,
  Calendar,
  Award,
  Shield
} from "lucide-react";

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

// Services data
export const services = [
  {
    id: "interior",
    title: "Interior Painting",
    slug: "interior",
    icon: Home,
    description: "Transform your living spaces with our expert interior painting services. We use premium paints and techniques to deliver flawless finishes that last.",
    longDescription: `Our interior painting services are designed to transform your home into a beautiful, comfortable space that reflects your personal style. With over 16 years of experience, we've perfected our techniques to deliver exceptional results every time.

We understand that your home is your sanctuary, which is why we take extra care to protect your belongings, minimize disruption, and leave your space cleaner than we found it. Our team uses only premium quality paints and materials, ensuring a finish that looks beautiful and lasts for years to come.

From single room refreshes to whole-home transformations, we handle projects of all sizes with the same attention to detail and commitment to excellence.`,
    features: [
      "Wall & ceiling painting",
      "Professional color consultation",
      "Trim & molding painting",
      "Texture application & repair",
      "Primer & sealant services",
      "Eco-friendly paint options",
      "Drywall repair",
      "Popcorn ceiling removal"
    ],
    color: "from-emerald-500 to-teal-500",
    image: "/images/gallery/interior-1.png",
    benefits: [
      "Increase your home's value",
      "Fresh, clean appearance",
      "Personalize your space",
      "Low VOC options available"
    ],
    process: [
      { step: 1, title: "Consultation", description: "Free on-site estimate and color consultation" },
      { step: 2, title: "Preparation", description: "Protect furniture, floors, and fixtures" },
      { step: 3, title: "Painting", description: "Expert application with premium materials" },
      { step: 4, title: "Cleanup", description: "Thorough cleanup and final inspection" }
    ]
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    slug: "exterior",
    icon: Building2,
    description: "Protect and beautify your property with our comprehensive exterior painting services. Built to withstand California's climate.",
    longDescription: `Your home's exterior is its first impression. Our exterior painting services not only enhance your property's curb appeal but also provide essential protection against the elements. California's intense sun and occasional rain can take a toll on your home's exterior, making quality paint work essential for both aesthetics and protection.

We begin every exterior project with thorough preparation, including pressure washing, scraping, sanding, and priming as needed. This attention to prep work ensures that our paint jobs last longer and look better than the competition.

Our team is experienced with all exterior surfaces including stucco, wood siding, vinyl, brick, and more. We use premium exterior paints specifically formulated for California's climate, ensuring your home looks beautiful for years to come.`,
    features: [
      "House & building painting",
      "Stucco & siding specialists",
      "Deck & fence staining",
      "Professional pressure washing",
      "Weatherproofing services",
      "Caulking & sealing",
      "Gutter painting",
      "Door & window trim"
    ],
    color: "from-teal-500 to-cyan-500",
    image: "/images/gallery/exterior-1.png",
    benefits: [
      "Boost curb appeal",
      "Protect from weather damage",
      "Increase property value",
      "Extend surface life"
    ],
    process: [
      { step: 1, title: "Inspection", description: "Assess condition and identify repairs needed" },
      { step: 2, title: "Preparation", description: "Pressure wash, scrape, sand, and prime" },
      { step: 3, title: "Painting", description: "Apply premium exterior paint system" },
      { step: 4, title: "Final Touches", description: "Touch-ups and thorough cleanup" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    slug: "commercial",
    icon: Paintbrush,
    description: "Professional painting solutions for businesses of all sizes. Minimal disruption, maximum impact.",
    longDescription: `First impressions matter in business. Our commercial painting services help create professional, welcoming environments that impress clients and inspire employees. We understand that your business can't afford extended downtime, which is why we offer flexible scheduling including nights and weekends.

From office buildings and retail spaces to warehouses and restaurants, we have experience painting a wide variety of commercial properties. Our team is trained to work efficiently while maintaining the highest quality standards, ensuring minimal disruption to your operations.

We're fully licensed and insured, and we understand the unique requirements of commercial projects including ADA compliance, safety protocols, and working around your business hours. Our project managers keep you informed every step of the way.`,
    features: [
      "Office spaces & complexes",
      "Retail stores & shopping centers",
      "Warehouses & industrial facilities",
      "Multi-unit properties",
      "Flexible scheduling (nights/weekends)",
      "ADA compliant finishes",
      "Safety-certified crews",
      "Project management"
    ],
    color: "from-cyan-500 to-blue-500",
    image: "/images/gallery/commercial-1.png",
    benefits: [
      "Professional appearance",
      "Minimal business disruption",
      "Flexible scheduling",
      "Volume discounts available"
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "Evaluate scope and schedule requirements" },
      { step: 2, title: "Planning", description: "Develop project timeline and safety plan" },
      { step: 3, title: "Execution", description: "Professional painting with minimal disruption" },
      { step: 4, title: "Completion", description: "Final walkthrough and documentation" }
    ]
  },
  {
    id: "cabinet-refinishing",
    title: "Cabinet Refinishing",
    slug: "cabinet-refinishing",
    icon: Sparkles,
    description: "Give your kitchen and bathroom cabinets a stunning makeover without the cost of replacement.",
    longDescription: `Transform your kitchen or bathroom without the expense and hassle of a full remodel. Our cabinet refinishing services can give your cabinets a beautiful, like-new appearance at a fraction of the cost of replacement.

Cabinet refinishing is an excellent option for homeowners who are happy with their current cabinet layout but want to update the look. Whether you want to go from dark to light, add a trendy glaze, or simply refresh tired-looking cabinets, our expert team can help.

We use specialized cabinet-grade paints and finishes that are durable, washable, and designed to withstand the daily wear and tear of kitchen and bathroom use. The result is a professional finish that looks factory-new.`,
    features: [
      "Kitchen cabinet refinishing",
      "Bathroom vanity painting",
      "Custom color matching",
      "Glaze & distressing techniques",
      "Hardware updating",
      "Lacquer & enamel finishes",
      "Cabinet door replacement",
      "Interior cabinet painting"
    ],
    color: "from-amber-500 to-orange-500",
    image: "/images/gallery/cabinet-1.png",
    benefits: [
      "Save vs. replacement",
      "Complete in days, not weeks",
      "Endless color options",
      "Eco-friendly choice"
    ],
    process: [
      { step: 1, title: "Consultation", description: "Select finish and color options" },
      { step: 2, title: "Preparation", description: "Remove doors, clean, sand, and prime" },
      { step: 3, title: "Finishing", description: "Apply professional-grade finish" },
      { step: 4, title: "Reassembly", description: "Reinstall with new hardware if desired" }
    ]
  },
  {
    id: "epoxy-flooring",
    title: "Epoxy Flooring",
    slug: "epoxy-flooring",
    icon: Droplets,
    description: "Durable, beautiful epoxy flooring solutions for garages, patios, and commercial spaces.",
    longDescription: `Upgrade your garage, workshop, or commercial space with our professional epoxy flooring services. Epoxy coatings create a durable, seamless surface that resists stains, chemicals, and wear while looking absolutely stunning.

Our epoxy flooring systems are perfect for homeowners who want to transform their garage into a showroom-quality space, or for businesses that need flooring that can stand up to heavy use. The coating bonds directly to concrete, creating a surface that's easy to clean and maintain.

Choose from a variety of finishes including solid colors, decorative flakes, and metallic effects. All our epoxy flooring comes with UV-resistant topcoats to prevent yellowing and ensure long-lasting beauty.`,
    features: [
      "Garage floor coating",
      "Commercial flooring systems",
      "Decorative flake finishes",
      "Metallic epoxy effects",
      "Anti-slip coatings",
      "UV resistant topcoats",
      "Concrete staining",
      "Patio & pool deck coating"
    ],
    color: "from-purple-500 to-pink-500",
    image: "/images/gallery/epoxy-1.png",
    benefits: [
      "Extremely durable",
      "Easy to clean",
      "Stain resistant",
      "Professional appearance"
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate concrete condition and prep needs" },
      { step: 2, title: "Preparation", description: "Grind, repair cracks, and etch surface" },
      { step: 3, title: "Application", description: "Apply epoxy base and decorative elements" },
      { step: 4, title: "Protection", description: "Apply clear topcoat for durability" }
    ]
  },
];

// Service areas
export const serviceAreas = [
  { name: "Riverside", zip: "92501-92509", description: "Our home base and primary service area" },
  { name: "Corona", zip: "92877-92883", description: "Serving all Corona neighborhoods" },
  { name: "Moreno Valley", zip: "92551-92557", description: "Fast response times for Moreno Valley residents" },
  { name: "San Bernardino", zip: "92401-92427", description: "Full service coverage throughout San Bernardino" },
  { name: "Ontario", zip: "91758-91762", description: "Serving Ontario and surrounding areas" },
  { name: "Pomona", zip: "91766-91769", description: "Quality painting services in Pomona" },
  { name: "Anaheim", zip: "92801-92899", description: "Expanding into Orange County" },
  { name: "Orange County", zip: "Various", description: "Growing coverage across Orange County" },
  { name: "Rancho Cucamonga", zip: "91701-91739", description: "Serving the Inland Empire's finest communities" },
  { name: "Fontana", zip: "92331-92337", description: "Professional painting in Fontana" },
];

// Gallery items
export const galleryItems = [
  { id: 1, title: "Modern Living Room", category: "Interior", description: "Contemporary color scheme with accent wall", image: "/images/gallery/interior-1.png" },
  { id: 2, title: "Colonial Exterior", category: "Exterior", description: "Complete exterior transformation", image: "/images/gallery/exterior-1.png" },
  { id: 3, title: "Office Complex", category: "Commercial", description: "Professional office space refresh", image: "/images/gallery/commercial-1.png" },
  { id: 4, title: "Kitchen Makeover", category: "Cabinet", description: "White shaker style cabinets", image: "/images/gallery/cabinet-1.png" },
  { id: 5, title: "Garage Floor", category: "Epoxy", description: "Metallic epoxy with flake finish", image: "/images/gallery/epoxy-1.png" },
  { id: 6, title: "Bedroom Suite", category: "Interior", description: "Master bedroom with vaulted ceilings", image: "/images/gallery/interior-2.png" },
];

// Testimonials
export const testimonials = [
  {
    name: "Sarah M.",
    location: "Riverside",
    rating: 5,
    text: "Frank and his team did an amazing job on our home exterior. They were professional, on time, and the quality exceeded our expectations. Highly recommend!",
    service: "Exterior Painting",
  },
  {
    name: "Robert J.",
    location: "Corona",
    rating: 5,
    text: "Best painting experience we've ever had. Frank was so helpful with color selection, and the crew was respectful of our home. The attention to detail was outstanding.",
    service: "Interior Painting",
  },
  {
    name: "Lisa T.",
    location: "Moreno Valley",
    rating: 5,
    text: "They transformed our outdated kitchen cabinets into something beautiful. Professional service from start to finish. Would definitely use again!",
    service: "Cabinet Refinishing",
  },
  {
    name: "Michael G.",
    location: "Anaheim",
    rating: 5,
    text: "Frank Painting painted our entire office building. Minimal disruption to our business and excellent results. Very impressed with their professionalism.",
    service: "Commercial Painting",
  },
  {
    name: "Jennifer K.",
    location: "Rancho Cucamonga",
    rating: 5,
    text: "The epoxy floor in our garage looks incredible! It's transformed the space completely. The team was efficient and the price was fair.",
    service: "Epoxy Flooring",
  },
  {
    name: "David L.",
    location: "Ontario",
    rating: 5,
    text: "Second time using Frank Painting. They painted our new office space just as perfectly as they did our home. Consistently excellent work!",
    service: "Commercial Painting",
  },
];

// Stats
export const stats = [
  { number: "16+", label: "Years Experience", icon: Calendar },
  { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
  { number: "100%", label: "Satisfaction Rate", icon: Star },
  { number: "33+", label: "5-Star Reviews", icon: Award },
];

// Contact info
export const contactInfo = {
  phone: "(323) 707-2211",
  email: "info@frankspainting.net",
  address: "4455 Angelo St, Riverside, CA 92507",
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "By Appointment",
    sunday: "Closed"
  },
  social: {
    facebook: "https://facebook.com/frankspainting",
    instagram: "https://instagram.com/frankspainting",
    yelp: "https://www.yelp.com/biz/frank-painting-riverside"
  }
};

// Company info
export const companyInfo = {
  name: "Frank Painting",
  tagline: "Excellence in Every Stroke",
  description: "Professional painting services for residential and commercial properties. Serving Riverside, Inland Empire, and Orange County for over 16 years.",
  founded: 2008,
  owner: "Frank Dora",
  license: "Licensed & Insured",
};

// Why choose us
export const whyChooseUs = [
  { title: "Free estimates & consultations", icon: CheckCircle2 },
  { title: "Licensed & fully insured", icon: Shield },
  { title: "16+ years experience", icon: Calendar },
  { title: "Quality materials guaranteed", icon: Award },
  { title: "Clean, respectful crews", icon: CheckCircle2 },
  { title: "Competitive pricing", icon: CheckCircle2 },
];

// Business hours
export const businessHours = [
  { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "Closed" },
];
