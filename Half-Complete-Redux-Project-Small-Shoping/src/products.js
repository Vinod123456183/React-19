const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality. Features 30-hour battery life and comfortable over-ear design.",
    category: "Electronics",
    rating: 4.8,
    reviews: 324,
    inStock: true,
    stockCount: 15,
    brand: "AudioTech",
    features: [
      "Noise Cancellation",
      "30h Battery",
      "Wireless",
      "Premium Sound",
    ],
    discount: 25,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    category: "Electronics",
    rating: 4.6,
    reviews: 187,
    inStock: true,
    stockCount: 8,
    brand: "FitTech",
    features: [
      "Heart Rate Monitor",
      "GPS",
      "Water Resistant",
      "Sleep Tracking",
    ],
    discount: 20,
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 599.99,
    originalPrice: 699.99,
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Professional grade camera lens for stunning photography with superior optics and precision engineering.",
    category: "Photography",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    stockCount: 5,
    brand: "LensMaster",
    features: [
      "Professional Grade",
      "Superior Optics",
      "Weather Sealed",
      "Image Stabilization",
    ],
    discount: 14,
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Modern minimalist desk lamp with adjustable brightness and sleek design perfect for any workspace.",
    category: "Home & Office",
    rating: 4.5,
    reviews: 156,
    inStock: true,
    stockCount: 12,
    brand: "ModernLight",
    features: [
      "Adjustable Brightness",
      "LED Technology",
      "Touch Control",
      "Energy Efficient",
    ],
    discount: 25,
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Comfortable organic cotton t-shirt with premium fabric and sustainable production methods.",
    category: "Fashion",
    rating: 4.7,
    reviews: 243,
    inStock: true,
    stockCount: 25,
    brand: "EcoWear",
    features: [
      "Organic Cotton",
      "Sustainable",
      "Comfortable Fit",
      "Breathable",
    ],
    discount: 25,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649772/pexels-photo-1649772.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Portable Bluetooth speaker with rich bass and crystal clear audio quality for music lovers.",
    category: "Electronics",
    rating: 4.4,
    reviews: 198,
    inStock: true,
    stockCount: 18,
    brand: "SoundWave",
    features: ["Portable", "Rich Bass", "Long Battery", "Water Resistant"],
    discount: 20,
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 129.99,
    originalPrice: 159.99,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "High-performance running shoes with advanced cushioning and breathable design for optimal comfort.",
    category: "Sports",
    rating: 4.6,
    reviews: 312,
    inStock: true,
    stockCount: 20,
    brand: "RunFast",
    features: ["Advanced Cushioning", "Breathable", "Lightweight", "Durable"],
    discount: 19,
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 49.99,
    originalPrice: 69.99,
    image:
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life for productivity.",
    category: "Electronics",
    rating: 4.3,
    reviews: 145,
    inStock: true,
    stockCount: 30,
    brand: "TechGear",
    features: ["Ergonomic", "Precision Tracking", "Long Battery", "Wireless"],
    discount: 29,
  },
];

export default products;
