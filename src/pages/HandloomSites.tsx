import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Globe, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HandloomSite {
  id: string;
  name: string;
  location: string;
  state: string;
  specialty: string[];
  description: string;
  famousFor: string;
  bestTimeToVisit: string;
  contact?: string;
  website?: string;
  rating: number;
  image: string;
}

const handloomSites: HandloomSite[] = [
  {
    id: "1",
    name: "Varanasi Handloom Cluster",
    location: "Varanasi",
    state: "Uttar Pradesh",
    specialty: ["Banarasi Silk", "Brocade", "Zari Work"],
    description: "One of the oldest and most famous handloom centers in India, Varanasi is renowned for its exquisite Banarasi silk sarees with intricate gold and silver zari work.",
    famousFor: "Banarasi Silk Sarees with Mughal-inspired designs",
    bestTimeToVisit: "October to March",
    contact: "+91-542-2508380",
    website: "https://handlooms.nic.in",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    name: "Kanchipuram Silk Village",
    location: "Kanchipuram",
    state: "Tamil Nadu",
    specialty: ["Kanchipuram Silk", "Temple Borders", "Korvai Technique"],
    description: "Known as the 'Silk City of India', Kanchipuram produces some of the finest silk sarees, characterized by their durability, rich colors, and temple border designs.",
    famousFor: "Heavy silk sarees with contrast borders",
    bestTimeToVisit: "November to February",
    contact: "+91-4112-222333",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    name: "Pochampally Ikat Weavers",
    location: "Pochampally",
    state: "Telangana",
    specialty: ["Ikat Weaving", "Tie-Dye", "Geometric Patterns"],
    description: "A UNESCO-recognized handloom village famous for its unique Ikat technique where threads are tie-dyed before weaving to create mesmerizing patterns.",
    famousFor: "Double Ikat sarees and fabrics",
    bestTimeToVisit: "September to March",
    contact: "+91-8685-278456",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    name: "Chanderi Handloom Town",
    location: "Chanderi",
    state: "Madhya Pradesh",
    specialty: ["Chanderi Silk", "Cotton-Silk Blend", "Traditional Motifs"],
    description: "Ancient weaving center known for lightweight, sheer fabrics with traditional coin and peacock motifs, perfect for all seasons.",
    famousFor: "Lightweight sarees with golden zari borders",
    bestTimeToVisit: "October to March",
    contact: "+91-7547-252789",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    name: "Bhagalpur Silk Hub",
    location: "Bhagalpur",
    state: "Bihar",
    specialty: ["Tussar Silk", "Bhagalpuri Silk", "Natural Dyes"],
    description: "Known as the 'Silk City' of Bihar, Bhagalpur is famous for its Tussar silk, also called 'wild silk', produced from silkworms that feed on forest trees.",
    famousFor: "Tussar silk with earthy tones and textures",
    bestTimeToVisit: "October to February",
    contact: "+91-641-2422567",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    name: "Maheshwar Handloom Center",
    location: "Maheshwar",
    state: "Madhya Pradesh",
    specialty: ["Maheshwari Sarees", "Cotton-Silk", "Reversible Borders"],
    description: "Historic weaving town on the banks of Narmada River, known for cotton-silk blend sarees with distinctive reversible borders.",
    famousFor: "Elegant sarees with unique pallu designs",
    bestTimeToVisit: "October to March",
    contact: "+91-7283-273456",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    name: "Sambalpuri Weaving Village",
    location: "Sambalpur",
    state: "Odisha",
    specialty: ["Sambalpuri Ikat", "Bandha Work", "Traditional Motifs"],
    description: "Famous for its traditional tie-dye technique called 'Bandha', creating stunning geometric and nature-inspired patterns.",
    famousFor: "Ikat sarees with shankha, chakra motifs",
    bestTimeToVisit: "October to February",
    contact: "+91-663-2410789",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1599423423927-bb4d79e50a2c?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    name: "Patan Patola Heritage",
    location: "Patan",
    state: "Gujarat",
    specialty: ["Double Ikat Patola", "Geometric Designs", "Silk Weaving"],
    description: "Home to the extremely rare double-ikat Patola sarees, where both warp and weft threads are tie-dyed before weaving.",
    famousFor: "Royal Patola sarees (one can take 6 months to make)",
    bestTimeToVisit: "November to February",
    contact: "+91-2766-223456",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&h=600&fit=crop",
  },
];

const HandloomSites = () => {
  return (
    <>
      <Helmet>
        <title>Famous Handloom Sites in India - Heritage Handloom</title>
        <meta
          name="description"
          content="Explore India's most famous handloom centers and weaving villages. Discover the rich heritage of Banarasi, Kanchipuram, Pochampally, and more."
        />
      </Helmet>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Explore India's Textile Heritage
          </Badge>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Famous Handloom Sites of India
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the legendary weaving clusters that have preserved centuries-old
            traditions and continue to create masterpieces of textile art.
          </p>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {handloomSites.map((site) => (
            <Card key={site.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-display text-xl">
                          {site.name}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          {site.location}, {site.state}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="text-sm font-medium">{site.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {site.description}
                    </p>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground">Famous For:</p>
                      <p className="text-sm text-secondary">{site.famousFor}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {site.specialty.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {site.bestTimeToVisit}
                      </div>
                      {site.contact && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {site.contact}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            Plan Your Handloom Heritage Tour
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Weaving Villages</h3>
              <p className="text-sm text-muted-foreground">
                Experience the magic of traditional looms and meet the artisan families
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Buy Authentic Products</h3>
              <p className="text-sm text-muted-foreground">
                Purchase directly from weavers and support their livelihood
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Learn the Craft</h3>
              <p className="text-sm text-muted-foreground">
                Many villages offer workshops to experience handloom weaving
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HandloomSites;
