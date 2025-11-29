import livingRoomImg from "../assets/hero-1.jpeg";
import decorImg from "../assets/hero-1.jpeg";
import oakLaminate from '../assets/services-img/flooring/laminate/Oak-laminate-flooring.jpg'
import walnutLaminate from '../assets/services-img/flooring/laminate/dark-walnut.webp'
import greyLaminate from '../assets/services-img/flooring/laminate/grey-laminate1.webp'
import woodSPC from '../assets/services-img/flooring/spc/wood.webp'
import stoneSPC from '../assets/services-img/flooring/spc/stone.jpeg'
import marbleSPC from '../assets/services-img/flooring/spc/marble.jpg'
import wpc from '../assets/services-img/flooring/decking/wpc.avif'
import pvc from '../assets/services-img/flooring/decking/pvDecking.webp'
import bamboo from '../assets/services-img/flooring/decking/bamboo.webp'
import walnutEW from '../assets/services-img/flooring/engineered-w/walnut.webp'
import oakEW from '../assets/services-img/flooring/engineered-w/oak.webp'
import mapleEW from '../assets/services-img/flooring/engineered-w/maple.webp'
import cloth from '../assets/services-img/flooring/cleaning/cloth.webp'
import mop from '../assets/services-img/flooring/cleaning/mop.webp'
import spray from '../assets/services-img/flooring/cleaning/spray.webp'
import underlay from '../assets/services-img/flooring/accessories/accessories-Underlay.avif'
import molding from '../assets/services-img/flooring/accessories/accessories-Moulding.webp'
import skirting from '../assets/services-img/flooring/accessories/accessories-Skirting.webp'
import boothEx1 from '../assets/services-img/booth/exbition-booth/booth-premium.jpeg'
import boothEx2 from '../assets/services-img/booth/exbition-booth/booth-compact.webp'
import boothEx3 from '../assets/services-img/booth/exbition-booth/booth-modern.webp'
import classicBooth from '../assets/services-img/booth/photo-booth/photo-booth.webp'
import selfieBooth from '../assets/services-img/booth/photo-booth/selfie-booth.png'
import ledBooth from '../assets/services-img/booth/photo-booth/LED-booth.webp'
import elegathBooth from '../assets/services-img/booth/decor/elegant-booth.webp'
import modernBooth from '../assets/services-img/booth/decor/modern-booth.webp'
import themeBooth from '../assets/services-img/booth/decor/theme-booth.webp'
import remodelKitchen from '../assets/services-img/kitchen/renovate/kitchen-remodel.webp'
import cabinetKitchen from '../assets/services-img/kitchen/renovate/binet-kitchen.webp'
import flooringKitchen from '../assets/services-img/kitchen/renovate/flooring-kitchen.webp'
import contemporaryKitchen from '../assets/services-img/kitchen/modern/contemporary-kitchen.webp'
import cabinetInstallation from '../assets/services-img/kitchen/modern/cabinet-installation.webp'
import modernKitchen from '../assets/services-img/kitchen/modern/modern-kitchen.webp'


export const servicesData = {
  flooring: {
    title: "Flooring",
    description:
      "We provide premium flooring solutions that combine style, durability, and functionality — perfectly crafted for every space.",
    subs: [
      {
        id: "laminate",
        name: "Laminate",
        description:
          "Elegant, scratch-resistant laminate flooring that mimics the beauty of wood while offering unmatched durability and easy maintenance.",
        images: [
          {
            url: walnutLaminate,
            title: 'Walnut Laminate Flooring',
            description: "Dark, rich color that adds a touch of luxury and modern style."
          },
          {
            url: oakLaminate,
            title: 'Oak Laminate Flooring',
            description: "Mimics natural oak wood, giving your room a warm and classic look."
          },
          {
            url: greyLaminate,
            title: 'Grey Laminate Flooring',
            description: "A trendy, neutral tone that fits perfectly with modern interiors."
          },
        ],
      },
      {
        id: "spc-water-proof",
        name: "SPC (Water Proof)",
        description:
          "Stone Plastic Composite flooring with watertight technology, ideal for moisture-prone areas like kitchens and bathrooms.",
        images: [
          {
            url: stoneSPC,
            title: 'Stone Texture SPC Flooring',
            description: "Looks like natural stone but is 100% waterproof and easy to clean."
          },
          {
            url: woodSPC,
            title: 'Wood Grain SPC Flooring',
            description: "Mimics real wood while being strong and water-resistant — perfect for kitchens or bathrooms."
          },
          {
            url: marbleSPC,
            title: 'Marble Design SPC Flooring',
            description: "Elegant marble look without the high cost or maintenance."
          },
        ],
      },
      {
        id: "decking",
        name: "Decking",
        description:
          "Stylish outdoor decking made from long-lasting materials, designed to withstand weather conditions while maintaining beauty.",
        images: [
          {
            url: wpc,
            title: 'Wood Plastic Composite (WPC) Decking',
            description: "Durable outdoor flooring made from recycled wood and plastic."
          },
          {
            url: bamboo,
            title: 'Bamboo Decking',
            description: "Eco-friendly and stylish, ideal for patios or garden walkways."
          },
          {
            url: pvc,
            title: 'PVC Decking',
            description: "Lightweight and water-resistant, great for pool areas and balconies."
          },
        ],
      },
      {
        id: "engineered-woods",
        name: "Engineered Woods",
        description:
          "Premium engineered wood floors combining natural aesthetics with high structural stability and resilience.",
        images: [
          {
            url: oakEW,
            title: 'Oak Engineered Wood',
            description: "Real oak top layer for a natural look, stable and durable."
          },
          {
            url: mapleEW,
            title: 'Maple Engineered Wood',
            description: "Smooth, light-colored finish that brightens up any room."
          },
          {
            url: walnutEW,
            title: 'Walnut Engineered Wood',
            description: "Dark, rich tone that adds elegance and warmth to interiors."
          },
        ],
      },
      {
        id: "cleaning-kits-wooden-floor",
        name: "Cleaning Kits (Wooden Floor)",
        description:
          "Specialized cleaning and care kits designed to preserve the natural finish and shine of your wooden floors.",
        images: [
          {
            url: spray,
            title: 'Wood Floor Cleaner Spray',
            description: "Quick and safe cleaning for wood surfaces."
          },
          {
            url: mop,
            title: 'Microfiber Mop Kit',
            description: "Gentle mop that traps dust without scratching."
          },
          {
            url: cloth,
            title: 'Polishing Cloth Set',
            description: "Shine and maintain floors easily."
          },
        ],
      },
      {
        id: "accessories",
        name: "ACCESSORIES",
        description:
          "Essential accessories crafted to enhance functionality and add a refined touch to your everyday space.",
        images: [
          {
            url: skirting,
            title: 'Skirting',
            description: "Durable skirting designed to protect walls and create a clean, seamless floor finish."
          },
          {
            url: underlay,
            title: 'Underlay',
            description: "High-quality underlay that enhances stability, reduces noise, and improves overall floor comfort."
          },
          {
            url: molding,
            title: 'Moulding',
            description: "Precision-crafted moulding that adds a refined decorative touch to edges and transitions."
          },
        ],
      },
    ],
  },

  booths: {
    title: "Booths",
    description:
      "We design and build premium-quality booths that bring your brand and events to life with style and functionality.",
    subs: [
      {
        id: "exhibition-booths",
        name: "Exhibition Booths",
        description:
          "Professional exhibition booths that combine impactful design and durability to showcase your brand effectively.",
        images: [
          {
            url: boothEx1,
            title: "Premium Booth Setup",
            description: "A high-end booth layout designed to attract attention and enhance brand visibility."
          },
          {
            url: boothEx2,
            title: "Compact Display Booth",
            description: "A space-efficient booth ideal for small exhibitions while maintaining professional presentation."
          },
          {
            url: boothEx3,
            title: "Modern Modular Booth",
            description: "A clean, adaptable booth design suitable for modern brands and product demonstrations."
          },
        ],
      },
      {
        id: "photo-booths",
        name: "Photo Booths",
        description:
          "Custom-designed photo booths that add a unique experience to events, weddings, and exhibitions.",
        images: [
          {
            url: classicBooth,
            title: "Classic Event Photo Booth",
            description: "A stylish booth design perfect for weddings, parties, and corporate gatherings."
          },
          {
            url: selfieBooth,
            title: "Interactive Selfie Booth",
            description: "Equipped with touch-screen features, ideal for guest engagement and fun photos."
          },
          {
            url: ledBooth,
            title: "Modern LED Photo Booth",
            description: "A sleek booth with dynamic lighting that enhances the photo experience."
          },
        ],
      },

      {
        id: "decoration",
        name: "Decoration",
        description:
          "Creative booth decoration services — enhancing aesthetics through lighting, color, and design details.",
        images: [
          {
            url: elegathBooth,
            title: "Elegant Booth Decor",
            description: "Premium decorative elements that add sophistication and visual appeal."
          },
          {
            url: themeBooth,
            title: "Theme-Based Decoration",
            description: "Customized decorations that match your event’s theme and brand identity."
          },
          {
            url: modernBooth,
            title: "Modern Minimalist Styling",
            description: "Clean and subtle decoration that highlights simplicity and elegance."
          },
        ],
      }


    ],
  },
  kitchen: {
    title: "Kitchen",
    description:
      "From design to installation, our kitchen services create stylish, functional spaces where elegance meets efficiency.",
    subs: [
      {
        id: "kitchen-renovation",
        name: "Kitchen Renovation",
        description:
          "Transform your kitchen into a modern and efficient space with our full renovation services — from cabinets to flooring.",
        images: [
          {
            url: remodelKitchen,
            title: "Full Kitchen Remodel",
            description: "A complete renovation solution including cabinets, countertops, and modern finishes."
          },
          {
            url: cabinetKitchen,
            title: "Cabinet & Storage Upgrade",
            description: "Efficiently redesigned cabinets and storage systems to maximize kitchen space."
          },
          {
            url: flooringKitchen,
            title: "Flooring & Surface Renovation",
            description: "Durable and stylish kitchen flooring options for long-lasting beauty."
          },
        ],
      },

      {
        id: "mordern-kitchen",
        name: "Modern Kitchen",
        description:
          "Complete interior design solutions for brand-new kitchens, blending contemporary design with top-quality materials.",
        images: [
          {
            url: contemporaryKitchen,
            title: "Contemporary Kitchen Design",
            description: "A stylish, sleek kitchen layout tailored for modern homes."
          },
          {
            url: cabinetInstallation,
            title: "Premium Cabinet Installation",
            description: "High-quality modern cabinets crafted for elegance and functionality."
          },
          {
            url: modernKitchen,
            title: "Modern Finishes & Lighting",
            description: "Clean, minimalist finishes and lighting that elevate the kitchen aesthetic."
          },
        ],
      }

    ],
  },

  furnitures: {
    title: "Furnitures",
    description:
      "Elegant, custom-made furniture crafted to fit your lifestyle — combining design, comfort, and durability.",
    subs: [
      {
        id: "sofa",
        name: "Sofa",
        description:
          "Modern and comfortable sofas tailored to complement your home’s design and offer long-lasting relaxation.",
        images: [
          {
            url: walnutLaminate,
            title: "Modern Sofa",
            description: "A stylish, comfortable sofa designed for everyday relaxation."
          },
          {
            url: oakLaminate,
            title: "Luxe Sofa",
            description: "Premium sofa craftsmanship for elegant living spaces."
          },
          {
            url: greyLaminate,
            title: "Compact Sofa",
            description: "Space-saving sofa with modern design and comfort."
          },

        ],
      },
      {
        id: "tables",
        name: "Tables",
        description:
          "Dining, coffee, and side tables made from quality materials — functional and stylish for every setting.",
        images: [
          {
            url: walnutLaminate,
            title: "Dining Table",
            description: "A durable dining table designed for everyday use."
          },
          {
            url: oakLaminate,
            title: "Coffee Table",
            description: "A sleek coffee table that blends with any interior."
          },
          {
            url: greyLaminate,
            title: "Side Table",
            description: "A functional side table for bedrooms or living rooms."
          },

        ],
      },
      {
        id: "cabinets-tv-stand",
        name: "Cabinets & TV Stand",
        description:
          "Sleek and space-saving cabinets and TV stands, designed to bring organization and sophistication to your living area.",
        images: [
          {
            url: walnutLaminate,
            title: "Modern Cabinet",
            description: "Stylish storage cabinet that organizes your space."
          },
          {
            url: oakLaminate,
            title: "TV Stand",
            description: "A clean, modern TV stand with strong build quality."
          },
          {
            url: greyLaminate,
            title: "Wall Cabinet",
            description: "Space-efficient cabinet ideal for all interiors."
          },

        ],
      },
      {
        id: "chairs",
        name: "Chairs",
        description:
          "From dining chairs to lounge seating, we craft comfortable, stylish designs built to last.",
        images: [
          {
            url: walnutLaminate,
            title: "Dining Chair",
            description: "A comfortable dining chair built for daily use."
          },
          {
            url: oakLaminate,
            title: "Lounge Chair",
            description: "A relaxing chair with a modern touch."
          },
          {
            url: greyLaminate,
            title: "Office Chair",
            description: "Ergonomic seating ideal for long working hours."
          },

        ],
      },
      {
        id: "escape-furnitures",
        name: "Escape Furnitures",
        description:
          "Exclusive furniture designs crafted by Escape LTD, reflecting creativity, craftsmanship, and modern taste.",
        images: [
          {
            url: walnutLaminate,
            title: "Escape Design",
            description: "Unique Escape LTD furniture crafted with detail."
          },
          {
            url: oakLaminate,
            title: "Signature Piece",
            description: "Exclusive design showcasing modern craftsmanship."
          },
          {
            url: greyLaminate,
            title: "Custom Build",
            description: "A tailor-made piece reflecting your style."
          },

        ],
      },
    ],
  },
  doors: {
    title: "Doors",
    description:
      "Strong, elegant, and secure doors designed to complement every architectural style — built for beauty and safety.",
    subs: [
      {
        id: "metal-doors",
        name: "Metal Doors",
        description:
          "High-security metal doors crafted with precision for durability and modern appeal.",
        images: [
          {
            url: walnutLaminate,
            title: "Steel Door",
            description: "High-security steel door with modern finish."
          },
          {
            url: oakLaminate,
            title: "Heavy Door",
            description: "Strong, durable door for maximum protection."
          },
          {
            url: greyLaminate,
            title: "Metal Frame",
            description: "A clean, stylish metal door frame design."
          },

        ],
      },
      {
        id: "wooden-doors",
        name: "Wooden Doors",
        description:
          "Classic wooden doors with timeless beauty, made from quality materials and finished to perfection.",
        images: [
          {
            url: walnutLaminate,
            title: "Classic Door",
            description: "A timeless wooden door made from quality wood."
          },
          {
            url: oakLaminate,
            title: "Panel Door",
            description: "Smooth, elegant door with a natural finish."
          },
          {
            url: greyLaminate,
            title: "Modern Wood Door",
            description: "A stylish door that fits any contemporary home."
          },

        ],
      },
      {
        id: "escape-doors",
        name: "Escape Doors",
        description:
          "Signature door collections by Escape LTD — combining craftsmanship, innovation, and design excellence.",
        images: [
          {
            url: walnutLaminate,
            title: "Escape Door",
            description: "Premium door design by Escape LTD."
          },
          {
            url: oakLaminate,
            title: "Signature Door",
            description: "Exclusive style crafted with precision."
          },
          {
            url: greyLaminate,
            title: "Designer Door",
            description: "A modern signature piece for luxury homes."
          },

        ],
      },
    ],
  },

  ceiling: {
    title: "Ceiling",
    description:
      "Transform your space with high-end ceiling designs that enhance lighting, style, and acoustic comfort.",
    subs: [
      {
        id: "gypsum-ceiling",
        name: "Gypsum Ceiling",
        description:
          "Custom gypsum ceiling installations that elevate interiors with modern patterns and smooth finishes.",
        images: [
          {
            url: walnutLaminate,
            title: "Modern Ceiling",
            description: "Smooth gypsum ceiling with clean patterns."
          },
          {
            url: oakLaminate,
            title: "LED Ceiling",
            description: "Gypsum ceiling enhanced with LED lighting."
          },
          {
            url: greyLaminate,
            title: "Panel Ceiling",
            description: "Stylish gypsum panels for modern interiors."
          },

        ],
      },
      {
        id: "tv-wall",
        name: "TV Wall",
        description:
          "Creative wall paneling solutions for TVs — blending design and functionality for modern interiors.",
        images: [
          {
            url: walnutLaminate,
            title: "TV Panel",
            description: "A clean, decorative wall panel for your TV."
          },
          {
            url: oakLaminate,
            title: "Feature Wall",
            description: "A modern feature wall with sleek finish."
          },
          {
            url: greyLaminate,
            title: "Wall Unit",
            description: "A stylish media wall blending design and function."
          },

        ],
      },
    ],
  },

  partition: {
    title: "Partition",
    description:
      "Our partition systems redefine spaces — creating privacy and flexibility while maintaining open, elegant designs.",
    subs: [
      {
        id: "aluminium-partition",
        name: "Aluminium Partition",
        description:
          "Durable and modern aluminium partitions for offices, showrooms, and residential spaces.",
        images: [
          {
            url: walnutLaminate,
            title: "Glass Partition",
            description: "Modern aluminium-framed partition for offices."
          },
          {
            url: oakLaminate,
            title: "Slim Partition",
            description: "Minimal, elegant aluminium partition design."
          },
          {
            url: greyLaminate,
            title: "Office Divider",
            description: "Strong, clean partitions for workspaces."
          },

        ],
      },
      {
        id: "gypsum-partition",
        name: "Gypsum Partition",
        description:
          "Smooth, sound-insulating gypsum",
        images: [
          {
            url: walnutLaminate,
            title: "Gypsum Wall",
            description: "Smooth gypsum wall with excellent insulation."
          },
          {
            url: oakLaminate,
            title: "Room Divider",
            description: "Effective gypsum divider for modern homes."
          },
          {
            url: greyLaminate,
            title: "Panel Partition",
            description: "Clean gypsum panels perfect for interiors."
          },

        ],
      },
    ],
  },

  painting: {
    title: "Painting",
    description:
      "We deliver professional painting services for both interiors and exteriors — enhancing your space with quality and precision.",
    subs: [
      {
        id: "interior-painting",
        name: "Interior Painting",
        description:
          "Premium interior painting using high-quality, low-odor paints to create smooth finishes and vibrant atmospheres.",
        images: [
          {
            url: walnutLaminate,
            title: "Wall Finish",
            description: "Smooth, high-quality interior painting."
          },
          {
            url: oakLaminate,
            title: "Color Coat",
            description: "Vibrant color application for any room."
          },
          {
            url: greyLaminate,
            title: "Matte Finish",
            description: "Modern matte wall coating with clean look."
          },

        ],
      },
      {
        id: "exterior-painting",
        name: "Exterior Painting",
        description:
          "Durable exterior coatings designed to protect your walls and maintain aesthetic appeal in all weather conditions.",
        images: [
          {
            url: walnutLaminate,
            title: "Weather Coat",
            description: "Durable exterior paint for harsh conditions."
          },
          {
            url: oakLaminate,
            title: "Protective Paint",
            description: "Long-lasting outdoor paint with UV resistance."
          },
          {
            url: greyLaminate,
            title: "Exterior Finish",
            description: "Smooth, elegant exterior wall finish."
          },

        ],
      },
    ],
  },










};
