import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
}

const CategoryCard = ({ name, slug, image }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${slug}`}>
      <Card className="overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-300 border-0">
        <CardContent className="p-0">
          <div className="relative h-64 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end">
              <h3 className="text-background font-serif text-2xl font-bold p-6">
                {name}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
