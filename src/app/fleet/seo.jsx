// Fleet Page SEO Configuration
// This file contains all SEO meta tags and JSON-LD structured data for the fleet page

export const seo = {
  // ===========================================
  // PART 1: META TAGS
  // ===========================================
  meta: {
    title: "Our Fleet | Lincoln Super Stretch Limousine",
    description:
      "Discover our stunning 10-seater Lincoln Super Stretch limousine. Premium leather interior, entertainment system, climate control, and complimentary refreshments. Melbourne's finest luxury vehicle for weddings, formals, and special occasions.",
    keywords: [
      "Lincoln limousine Melbourne",
      "stretch limo hire",
      "10 seater limousine",
      "luxury limo Melbourne",
      "Lincoln Super Stretch",
      "wedding limousine Melbourne",
      "formal car hire Melbourne",
      "premium limousine service",
      "chauffeur driven limo",
      "party limo Melbourne",
    ],
    path: "/fleet",
    image: "/images/fleet-og.jpg",
  },

  // ===========================================
  // PART 2: JSON-LD STRUCTURED DATA
  // ===========================================
  jsonld: {
    // Speakable schema - content for voice assistants
    speakable: [".fleet-hero__title", ".fleet-hero__subtitle", ".fleet-hero__description"],

    // Breadcrumbs - navigation path
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Our Fleet", path: "/fleet" },
    ],

    // Vehicle schema - details about the limousine
    vehicle: {
      name: "Lincoln Super Stretch Limousine",
      brand: "Lincoln",
      model: "Town Car Super Stretch",
      vehicleType: "Limousine",
      seatingCapacity: 10,
      color: "Black",
      description:
        "Our flagship 10-seater Lincoln Super Stretch limousine features premium leather seating, ambient lighting, entertainment system, climate control, and complimentary refreshments for the ultimate luxury experience.",
      features: [
        "10 Passenger Capacity",
        "Premium Leather Interior",
        "Ambient LED Lighting",
        "Premium Sound System",
        "Climate Control",
        "Privacy Partition",
        "Complimentary Refreshments",
        "Professional Chauffeur",
      ],
    },

    // Service offering for fleet
    service: {
      name: "Luxury Limousine Hire",
      description:
        "Professional chauffeur-driven Lincoln Super Stretch limousine service for weddings, school formals, winery tours, corporate events, and special occasions in Melbourne.",
      provider: "Auslink Limousines",
      areaServed: "Melbourne and surrounding areas",
      serviceType: "Limousine Hire Service",
    },
  },
};
