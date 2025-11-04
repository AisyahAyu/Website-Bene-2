import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, products, customerReviews, projects } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const bestProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                slug={category.slug}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Best Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Our Rooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} to="/prototype">
                <Card className="overflow-hidden group cursor-pointer hover:shadow-hover transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end">
                        <div className="p-4">
                          <h3 className="text-background font-bold text-xl mb-1">
                            {project.title}
                          </h3>
                          <p className="text-background/80 text-sm">{project.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((review) => (
              <Card key={review.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.comment}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Room Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Visit Our Room</h2>
          <p className="text-lg opacity-90 mb-8">
            Experience our furniture in person at our showroom
          </p>
          <div className="flex items-center justify-center gap-2 text-xl mb-8">
            <MapPin size={24} />
            <span>Jl. Furniture Indah No. 123, Jakarta Selatan, Indonesia</span>
          </div>
          <div className="max-w-4xl mx-auto h-96 bg-muted/20 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087788252927!2d106.82493631476889!3d-6.236704995469449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Bene Showroom Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
