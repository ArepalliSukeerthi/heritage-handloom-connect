export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  craft: string;
  region: string;
  state: string;
  experience: number;
  story: string;
  awards: string[];
  productCount: number;
  rating: number;
  isVerified: boolean;
}

export const artisans: Artisan[] = [
  {
    id: "a1",
    name: "Ramesh Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    craft: "Banarasi Weaving",
    region: "Varanasi",
    state: "Uttar Pradesh",
    experience: 35,
    story: "Born into a family of weavers, Ramesh ji learned the art of Banarasi silk weaving at the age of 12. His father and grandfather were renowned weavers who created sarees for royal families. Today, he continues this legacy with his sons, preserving ancient techniques while creating contemporary designs.",
    awards: ["National Award for Master Craftsman 2018", "State Handicraft Award 2015"],
    productCount: 47,
    rating: 4.9,
    isVerified: true,
  },
  {
    id: "a2",
    name: "Lakshmi Devi",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=1200&h=600&fit=crop",
    craft: "Chanderi Weaving",
    region: "Chanderi",
    state: "Madhya Pradesh",
    experience: 28,
    story: "Lakshmi Devi is a pioneer in reviving the traditional Chanderi weaving craft. After her husband's passing, she took over their small loom and has since trained over 50 women in her village. Her work has been featured in national exhibitions and she now leads a cooperative of women weavers.",
    awards: ["Women Entrepreneur Award 2020", "Craft Revival Award 2019"],
    productCount: 32,
    rating: 4.7,
    isVerified: true,
  },
  {
    id: "a3",
    name: "Priya Behera",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=1200&h=600&fit=crop",
    craft: "Ikat Weaving",
    region: "Sambalpur",
    state: "Odisha",
    experience: 22,
    story: "Priya brings a modern sensibility to the ancient art of Ikat. She combines traditional Sambalpuri patterns with contemporary color palettes, making handloom accessible to younger generations. Her innovative approach has earned her recognition at international textile exhibitions.",
    awards: ["Young Designer Award 2021"],
    productCount: 28,
    rating: 4.8,
    isVerified: true,
  },
  {
    id: "a4",
    name: "Suresh Pillai",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    craft: "Kanchipuram Silk Weaving",
    region: "Kanchipuram",
    state: "Tamil Nadu",
    experience: 40,
    story: "Third generation master weaver Suresh Pillai is renowned for his exceptional temple border designs. His sarees have adorned celebrities and have been featured in major fashion shows. He trains young weavers to ensure this art form survives for future generations.",
    awards: ["Padma Shri Nominee 2022", "National Master Craftsman 2016"],
    productCount: 23,
    rating: 5.0,
    isVerified: true,
  },
  {
    id: "a5",
    name: "Meera Ben",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&h=600&fit=crop",
    craft: "Khadi Spinning & Weaving",
    region: "Ahmedabad",
    state: "Gujarat",
    experience: 30,
    story: "Meera Ben's journey with Khadi began as a form of self-reliance and has grown into a movement. She leads a collective of 200 women who spin and weave khadi, providing sustainable livelihoods while preserving Gandhi's vision of self-sufficiency.",
    awards: ["Gandhi Khadi Award 2019", "Women Empowerment Award 2020"],
    productCount: 56,
    rating: 4.6,
    isVerified: true,
  },
  {
    id: "a6",
    name: "Abdul Rashid",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=1200&h=600&fit=crop",
    craft: "Pashmina & Sozni Embroidery",
    region: "Srinagar",
    state: "Jammu & Kashmir",
    experience: 45,
    story: "Abdul Rashid is a living legend of Kashmiri craftsmanship. His Pashmina shawls with intricate Sozni embroidery take up to two years to complete. Each piece tells a story of Kashmiri culture, featuring traditional patterns passed down through generations.",
    awards: ["National Award for Master Craftsman 2012", "Shilp Guru 2018"],
    productCount: 15,
    rating: 5.0,
    isVerified: true,
  },
];
