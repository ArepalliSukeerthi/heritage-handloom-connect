import banarsiSaree from "@/assets/products/banarasi-saree.jpg";
import chanderiDupatta from "@/assets/products/chanderi-dupatta.jpg";
import ikatStole from "@/assets/products/ikat-stole.jpg";
import kanchipuramSaree from "@/assets/products/kanchipuram-saree.jpg";
import khadiKurta from "@/assets/products/khadi-kurta.jpg";
import pashminaShawl from "@/assets/products/pashmina-shawl.jpg";
import pochampallySaree from "@/assets/products/pochampally-saree.jpg";
import jamdaniSaree from "@/assets/products/jamdani-saree.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  region: string;
  artisanId: string;
  artisanName: string;
  stock: number;
  isHandmade: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Banarasi Silk Saree",
    description: "Exquisite handwoven Banarasi silk saree with intricate gold zari work. Each piece takes over 15 days to complete by master weavers.",
    price: 15999,
    originalPrice: 19999,
    image: banarsiSaree,
    category: "Sarees",
    region: "Varanasi",
    artisanId: "a1",
    artisanName: "Ramesh Kumar",
    stock: 5,
    isHandmade: true,
    rating: 4.9,
    reviews: 127,
    tags: ["silk", "wedding", "traditional", "zari"],
  },
  {
    id: "2",
    name: "Chanderi Cotton Dupatta",
    description: "Lightweight Chanderi cotton dupatta with traditional butis. Perfect for both casual and festive occasions.",
    price: 2499,
    image: chanderiDupatta,
    category: "Dupattas",
    region: "Chanderi",
    artisanId: "a2",
    artisanName: "Lakshmi Devi",
    stock: 12,
    isHandmade: true,
    rating: 4.7,
    reviews: 89,
    tags: ["cotton", "casual", "lightweight"],
  },
  {
    id: "3",
    name: "Ikat Handloom Stole",
    description: "Handwoven Ikat stole with geometric patterns. Each pattern is unique, created through the ancient resist-dyeing technique.",
    price: 1899,
    image: ikatStole,
    category: "Stoles",
    region: "Odisha",
    artisanId: "a3",
    artisanName: "Priya Behera",
    stock: 18,
    isHandmade: true,
    rating: 4.8,
    reviews: 56,
    tags: ["ikat", "geometric", "vibrant"],
  },
  {
    id: "4",
    name: "Kanchipuram Silk Saree",
    description: "Classic Kanchipuram silk saree with temple border design. A timeless piece handcrafted by third-generation weavers.",
    price: 24999,
    originalPrice: 29999,
    image: kanchipuramSaree,
    category: "Sarees",
    region: "Kanchipuram",
    artisanId: "a4",
    artisanName: "Suresh Pillai",
    stock: 3,
    isHandmade: true,
    rating: 5.0,
    reviews: 203,
    tags: ["silk", "wedding", "temple-border", "premium"],
  },
  {
    id: "5",
    name: "Khadi Cotton Kurta",
    description: "Handspun and handwoven khadi cotton kurta. Breathable and perfect for everyday wear.",
    price: 1599,
    image: khadiKurta,
    category: "Apparel",
    region: "Gujarat",
    artisanId: "a5",
    artisanName: "Meera Ben",
    stock: 25,
    isHandmade: true,
    rating: 4.6,
    reviews: 134,
    tags: ["khadi", "cotton", "casual", "everyday"],
  },
  {
    id: "6",
    name: "Pashmina Shawl",
    description: "Authentic Kashmiri Pashmina shawl with intricate sozni embroidery. Each piece is a work of art taking months to complete.",
    price: 45999,
    image: pashminaShawl,
    category: "Shawls",
    region: "Kashmir",
    artisanId: "a6",
    artisanName: "Abdul Rashid",
    stock: 2,
    isHandmade: true,
    rating: 5.0,
    reviews: 78,
    tags: ["pashmina", "embroidery", "luxury", "winter"],
  },
  {
    id: "7",
    name: "Pochampally Ikat Saree",
    description: "Vibrant Pochampally Ikat saree with double-ikat technique. A GI-tagged product from Telangana.",
    price: 8999,
    image: pochampallySaree,
    category: "Sarees",
    region: "Telangana",
    artisanId: "a7",
    artisanName: "Sita Lakshmi",
    stock: 7,
    isHandmade: true,
    rating: 4.8,
    reviews: 167,
    tags: ["ikat", "GI-tagged", "cotton", "colorful"],
  },
  {
    id: "8",
    name: "Jamdani Cotton Saree",
    description: "Delicate Jamdani cotton saree with floral motifs woven on the loom. UNESCO-recognized heritage craft.",
    price: 12999,
    originalPrice: 15999,
    image: jamdaniSaree,
    category: "Sarees",
    region: "West Bengal",
    artisanId: "a8",
    artisanName: "Ananya Das",
    stock: 4,
    isHandmade: true,
    rating: 4.9,
    reviews: 92,
    tags: ["jamdani", "cotton", "heritage", "floral"],
  },
];

export const categories = [
  { id: "sarees", name: "Sarees", count: 156 },
  { id: "dupattas", name: "Dupattas", count: 89 },
  { id: "stoles", name: "Stoles & Scarves", count: 67 },
  { id: "shawls", name: "Shawls", count: 45 },
  { id: "apparel", name: "Apparel", count: 112 },
  { id: "home", name: "Home Textiles", count: 78 },
];

export const regions = [
  { id: "varanasi", name: "Varanasi", state: "Uttar Pradesh" },
  { id: "kanchipuram", name: "Kanchipuram", state: "Tamil Nadu" },
  { id: "chanderi", name: "Chanderi", state: "Madhya Pradesh" },
  { id: "kashmir", name: "Kashmir", state: "Jammu & Kashmir" },
  { id: "odisha", name: "Odisha", state: "Odisha" },
  { id: "telangana", name: "Telangana", state: "Telangana" },
  { id: "west-bengal", name: "West Bengal", state: "West Bengal" },
  { id: "gujarat", name: "Gujarat", state: "Gujarat" },
];
