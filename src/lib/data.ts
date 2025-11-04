export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
}

export const categories = [
  { id: 1, name: "Meja", slug: "table", image: "/src/assets/category-table.jpg" },
  { id: 2, name: "Kursi", slug: "chair", image: "/src/assets/category-chair.jpg" },
  { id: 3, name: "Lemari", slug: "cabinet", image: "/src/assets/category-cabinet.jpg" },
  { id: 4, name: "Kasur & Sofa", slug: "sofa", image: "/src/assets/category-sofa.jpg" },
  { id: 5, name: "Rak Penyimpanan", slug: "storage", image: "/src/assets/category-storage.jpg" },
];

export const products: Product[] = [
  { id: 1, name: "Modern Dining Table", category: "table", price: 4500000, image: "/src/assets/category-table.jpg", description: "Elegant solid wood dining table with modern minimalist design. Perfect for family gatherings and dinner parties. Made from premium oak wood with natural finish.", rating: 4.8, reviews: 156 },
  { id: 2, name: "Classic Wooden Chair", category: "chair", price: 850000, image: "/src/assets/category-chair.jpg", description: "Comfortable ergonomic chair with classic wooden design. Features curved backrest for optimal support and durable construction.", rating: 4.6, reviews: 203 },
  { id: 3, name: "Executive Wardrobe", category: "cabinet", price: 8900000, image: "/src/assets/category-cabinet.jpg", description: "Spacious wardrobe with multiple compartments and drawers. Premium finish with soft-close mechanism and ample storage space.", rating: 4.9, reviews: 89 },
  { id: 4, name: "Luxury Sofa Set", category: "sofa", price: 12500000, image: "/src/assets/category-sofa.jpg", description: "Premium 3-seater sofa with high-quality fabric upholstery. Deep cushioning for maximum comfort with contemporary design.", rating: 4.7, reviews: 127 },
  { id: 5, name: "Industrial Storage Shelf", category: "storage", price: 2200000, image: "/src/assets/category-storage.jpg", description: "Multi-tier storage shelf with industrial design. Combines wood and metal for modern aesthetic and sturdy construction.", rating: 4.5, reviews: 178 },
  { id: 6, name: "Office Desk", category: "table", price: 3800000, image: "/src/assets/category-table.jpg", description: "Spacious office desk with built-in cable management. Perfect for home office or professional workspace.", rating: 4.7, reviews: 142 },
  { id: 7, name: "Lounge Chair", category: "chair", price: 1200000, image: "/src/assets/category-chair.jpg", description: "Relaxing lounge chair with padded armrests. Ideal for reading corner or living room accent piece.", rating: 4.8, reviews: 95 },
  { id: 8, name: "Bedside Cabinet", category: "cabinet", price: 1500000, image: "/src/assets/category-cabinet.jpg", description: "Compact bedside cabinet with two drawers. Elegant design with smooth gliding mechanism.", rating: 4.4, reviews: 167 },
];

export const customerReviews: Review[] = [
  { id: 1, name: "Andi Pratama", rating: 5, comment: "Kualitas produk sangat bagus! Furniture yang saya beli sangat kokoh dan desainnya elegan. Pengiriman juga cepat dan aman.", date: "2024-01-15" },
  { id: 2, name: "Siti Nurhaliza", rating: 5, comment: "Pelayanan memuaskan dari awal konsultasi hingga pemasangan. Tim Bene sangat profesional dan produknya berkualitas tinggi.", date: "2024-01-20" },
  { id: 3, name: "Budi Santoso", rating: 4, comment: "Produk sesuai dengan deskripsi. Harga cukup kompetitif untuk kualitas yang ditawarkan. Akan order lagi untuk ruangan lain.", date: "2024-02-05" },
];

export const projects: Project[] = [
  { id: 1, title: "Modern Living Room", description: "Complete living room furniture set with contemporary design featuring custom sofa, coffee table, and entertainment unit.", image: "/src/assets/hero-1.jpg", location: "Jakarta Selatan", year: "2024" },
  { id: 2, title: "Minimalist Dining Space", description: "Elegant dining area with handcrafted wooden table and matching chairs, perfect for family meals and entertaining guests.", image: "/src/assets/hero-2.jpg", location: "Bandung", year: "2024" },
  { id: 3, title: "Luxury Master Bedroom", description: "Premium bedroom furniture including king-size bed, wardrobes, and nightstands with sophisticated finish.", image: "/src/assets/hero-3.jpg", location: "Surabaya", year: "2023" },
];
