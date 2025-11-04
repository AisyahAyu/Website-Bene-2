import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    toast.success("Product added to cart!");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/products">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-4xl font-bold text-primary mb-6">
              {formatPrice(product.price)}
            </p>

            <div className="prose prose-lg mb-8">
              <h2 className="font-serif text-2xl font-bold mb-3">Description</h2>
              <p className="text-foreground/80 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Andi Pratama",
                rating: 5,
                comment: "Produk sangat berkualitas dan sesuai ekspektasi!",
                date: "2024-01-15",
              },
              {
                id: 2,
                name: "Siti Nurhaliza",
                rating: 5,
                comment: "Pengiriman cepat dan packaging rapi. Sangat puas!",
                date: "2024-01-20",
              },
              {
                id: 3,
                name: "Budi Santoso",
                rating: 4,
                comment: "Kualitas bagus, harga sesuai dengan kualitas produk.",
                date: "2024-02-01",
              },
            ].map((review) => (
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
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
