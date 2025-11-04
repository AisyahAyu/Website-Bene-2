import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ id, name, price, image, rating, reviews }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-hover transition-all duration-300">
      <CardContent className="p-0">
        <Link to={`/products/${id}`}>
          <div className="relative h-64 overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </Link>
        <div className="p-4">
          <Link to={`/products/${id}`}>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 mb-2">
            <Star size={16} className="fill-primary text-primary" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
          </div>
          <p className="text-xl font-bold text-primary mb-4">{formatPrice(price)}</p>
          <Button asChild className="w-full">
            <Link to={`/products/${id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
