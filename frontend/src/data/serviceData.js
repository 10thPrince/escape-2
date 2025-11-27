import livingRoomImg from "../assets/hero-1.jpeg";
import decorImg from "../assets/hero-1.jpeg";
import oakLaminate from '../assets/services-img/laminate/Oak-laminate-flooring.jpg'
import walnutLaminate from '../assets/services-img/laminate/dark-walnut.webp'
import greyLaminate from '../assets/services-img/laminate/grey-laminate1.webp'
import woodSPC from '../assets/services-img/spc/wood.webp'
import stoneSPC from '../assets/services-img/spc/stone.jpeg'
import marbleSPC from '../assets/services-img/spc/marble.jpg'
import wpc from '../assets/services-img/decking/wpc.avif'
import pvc from '../assets/services-img/decking/pvDecking.webp'
import bamboo from '../assets/services-img/decking/bamboo.webp'
import walnutEW from '../assets/services-img/engineered-w/walnut.webp'
import oakEW from '../assets/services-img/engineered-w/oak.webp'
import mapleEW from '../assets/services-img/engineered-w/maple.webp'
import cloth from '../assets/services-img/cleaning/cloth.webp'
import mop from '../assets/services-img/cleaning/mop.webp'
import spray from '../assets/services-img/cleaning/spray.webp'



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
            url: spray,
            title: 'Skirting',
            description: "Durable skirting designed to protect walls and create a clean, seamless floor finish."
          },
          {
            url: mop,
            title: 'Underlay',
            description: "High-quality underlay that enhances stability, reduces noise, and improves overall floor comfort."
          },
          {
            url: cloth,
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
        id: "photo-booths",
        name: "Photo Booths",
        description:
          "Custom-designed photo booths that add a unique experience to events, weddings, and exhibitions.",
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
        id: "decoration",
        name: "Decoration",
        description:
          "Creative booth decoration services — enhancing aesthetics through lighting, color, and design details.",
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
        id: "new-interior",
        name: "Mordern Kitchen",
        description:
          "Complete interior design solutions for brand-new kitchens, blending contemporary design with top-quality materials.",
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
        id: "tables",
        name: "Tables",
        description:
          "Dining, coffee, and side tables made from quality materials — functional and stylish for every setting.",
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
        id: "cabinets-tv-stand",
        name: "Cabinets & TV Stand",
        description:
          "Sleek and space-saving cabinets and TV stands, designed to bring organization and sophistication to your living area.",
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
        id: "chairs",
        name: "Chairs",
        description:
          "From dining chairs to lounge seating, we craft comfortable, stylish designs built to last.",
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
        id: "escape-furnitures",
        name: "Escape Furnitures",
        description:
          "Exclusive furniture designs crafted by Escape LTD, reflecting creativity, craftsmanship, and modern taste.",
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
        id: "wooden-doors",
        name: "Wooden Doors",
        description:
          "Classic wooden doors with timeless beauty, made from quality materials and finished to perfection.",
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
        id: "escape-doors",
        name: "Escape Doors",
        description:
          "Signature door collections by Escape LTD — combining craftsmanship, innovation, and design excellence.",
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
        id: "tv-wall",
        name: "TV Wall",
        description:
          "Creative wall paneling solutions for TVs — blending design and functionality for modern interiors.",
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
        id: "gypsum-partition",
        name: "Gypsum Partition",
        description:
          "Smooth, sound-insulating gypsum",
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
        id: "exterior-painting",
        name: "Exterior Painting",
        description:
          "Durable exterior coatings designed to protect your walls and maintain aesthetic appeal in all weather conditions.",
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
    ],
  },










};
