// Home Page SEO Configuration
// This file contains all SEO meta tags and JSON-LD structured data for the home page

export const seo = {
  // ===========================================
  // PART 1: META TAGS
  // ===========================================
  meta: {
    title: "Auslink Limousines | Premium Limousine Hire Melbourne",
    description:
      "Melbourne's premier luxury limousine service with over 24 years of excellence. Professional chauffeur-driven Lincoln Super Stretch limousine for weddings, school formals, winery tours, and special occasions. Book your ride today.",
    keywords: [
      "limousine hire Melbourne",
      "limo hire Melbourne",
      "wedding car hire Melbourne",
      "stretch limo Melbourne",
      "Lincoln limousine hire",
      "chauffeur service Melbourne",
      "luxury car hire Melbourne",
      "school formal limo",
      "winery tour limo",
      "corporate limousine Melbourne",
    ],
    path: "/",
    image: "/images/home-og.jpg",
  },

  // ===========================================
  // PART 2: JSON-LD STRUCTURED DATA
  // ===========================================
  jsonld: {
    // WebSite schema - identifies this as a website
    website: {
      name: "Auslink Limousines",
      url: "https://auslinklimousines.com.au",
      description:
        "Melbourne's premier luxury limousine service with over 24 years of excellence in chauffeured transportation.",
    },

    // Speakable schema - content for voice assistants
    speakable: [".hero-title", ".hero-subtitle", ".hero-description"],

    // Breadcrumbs - navigation path (home is just the root)
    breadcrumbs: [{ name: "Home", path: "/" }],

    // LocalBusiness schema - business details for Google Knowledge Panel
    localBusiness: {
      name: "Auslink Limousines",
      description:
        "Melbourne's premier luxury limousine service offering wedding cars, school formal transport, winery tours, corporate events, and special occasion transportation with over 24 years of experience.",
      phone: "0450 860 035",
      email: "info@auslinklimousines.com.au",
      address: {
        streetAddress: "Melbourne",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        postalCode: "3000",
        addressCountry: "AU",
      },
      geo: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
      priceRange: "$$",
      openingHours: ["Mo-Su 00:00-23:59"],
      areaServed: [
        "Melbourne",
        "Melbourne CBD",
        "South Melbourne",
        "St Kilda",
        "Brighton",
        "Toorak",
        "South Yarra",
        "Yarra Valley",
        "Mornington Peninsula",
        "Geelong",
        "Dandenong",
        "Frankston",
      ],
      serviceType: "Limousine Hire Service",
    },

    // Organization schema - brand identity and social links
    organization: {
      name: "Auslink Limousines",
      url: "https://auslinklimousines.com.au",
      logo: "/images/logo.png",
      sameAs: [
        "https://www.facebook.com/auslinklimousines",
        "https://www.instagram.com/auslinklimousines",
        "https://www.google.com/maps/place/Auslink+Limousines",
      ],
    },

    // Service offerings for the home page
    services: [
      {
        name: "Wedding Limousine Service",
        description:
          "Make your special day unforgettable with our elegant limousine service.",
        serviceType: "Wedding Transportation",
      },
      {
        name: "School Formal Transport",
        description: "Arrive in style at your formal or debutante ball.",
        serviceType: "School Formal Transportation",
      },
      {
        name: "Winery Tour Service",
        description:
          "Explore Victoria's finest wineries in luxury and comfort.",
        serviceType: "Winery Tour Transportation",
      },
      {
        name: "Corporate Event Transport",
        description:
          "Professional transportation for business functions and executives.",
        serviceType: "Corporate Transportation",
      },
      {
        name: "Spring Racing Carnival Transport",
        description: "Travel to the Melbourne Cup in ultimate luxury and style.",
        serviceType: "Event Transportation",
      },
      {
        name: "Special Occasion Transport",
        description:
          "Birthdays, anniversaries, hens & bucks parties - celebrate in style.",
        serviceType: "Special Occasion Transportation",
      },
    ],
  },
};
