import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Eye, EyeOff, Mail, Lock, User, MapPin, Phone, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signUp, user } = useAuth();
  const defaultRole = searchParams.get("role") || "customer";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: defaultRole,
    region: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    
    const { error } = await signUp(formData.email, formData.password, {
      name: formData.name,
      phone: formData.phone || undefined,
      location: formData.address || formData.region || undefined
    });

    if (error) {
      if (error.message.includes("already registered")) {
        toast.error("This email is already registered. Please sign in instead.");
      } else {
        toast.error(error.message);
      }
      setIsLoading(false);
      return;
    }

    toast.success("Account created successfully! Welcome to Heritage Handloom.");
    navigate("/");
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Create Account - Heritage Handloom</title>
      </Helmet>

      <main className="min-h-screen flex">
        {/* Left - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=1200&h=1600&fit=crop"
            alt="Handloom weaving"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-primary-foreground">
              <h2 className="font-display text-4xl font-bold mb-4">
                {formData.role === "artisan"
                  ? "Share Your Craft with the World"
                  : "Discover Authentic Handloom"}
              </h2>
              <p className="text-primary-foreground/80 max-w-md">
                {formData.role === "artisan"
                  ? "Join our community of master artisans and connect directly with customers who appreciate authentic craftsmanship."
                  : "Create an account to shop authentic handloom products and support artisan communities."}
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
          <div className="w-full max-w-md space-y-8 py-8">
            <div className="text-center">
              <Link to="/" className="inline-block mb-8">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-heritage">
                    <span className="font-display text-2xl font-bold text-primary-foreground">H</span>
                  </div>
                </div>
              </Link>
              <h1 className="font-display text-3xl font-bold text-foreground">Create your account</h1>
              <p className="text-muted-foreground mt-2">
                Join the Heritage Handloom community
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label>I want to join as</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="customer" id="customer" className="peer sr-only" />
                    <Label
                      htmlFor="customer"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-saffron cursor-pointer transition-all"
                    >
                      <User className="h-6 w-6 mb-2" />
                      <span className="font-medium">Customer</span>
                      <span className="text-xs text-muted-foreground">Browse & shop</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="artisan" id="artisan" className="peer sr-only" />
                    <Label
                      htmlFor="artisan"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-saffron cursor-pointer transition-all"
                    >
                      <MapPin className="h-6 w-6 mb-2" />
                      <span className="font-medium">Artisan</span>
                      <span className="text-xs text-muted-foreground">Sell products</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="address"
                    type="text"
                    placeholder="Your full address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {formData.role === "artisan" && (
                <div className="space-y-2">
                  <Label htmlFor="region">Region / Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="region"
                      type="text"
                      placeholder="e.g., Varanasi, Uttar Pradesh"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="heritage"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-saffron font-medium hover:underline">
                Sign in
              </Link>
            </p>

            <p className="text-center text-xs text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="underline">Terms of Service</Link> and{" "}
              <Link to="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
