import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 15000000]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [selectedCategories, priceRange]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-center mb-4">Product</h1>
          <p className="text-xl text-center opacity-90">
            Discover our complete furniture collection
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden cursor-pointer hover:shadow-card transition-all"
                onClick={() => toggleCategory(category.slug)}
              >
                <CardContent className="p-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="font-semibold text-center">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products with Filters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold mb-6">Filters</h2>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={category.slug}
                            checked={selectedCategories.includes(category.slug)}
                            onCheckedChange={() => toggleCategory(category.slug)}
                          />
                          <Label htmlFor={category.slug} className="cursor-pointer">
                            {category.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-4">
                      <Slider
                        min={0}
                        max={15000000}
                        step={100000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 text-muted-foreground">
                Showing {filteredProducts.length} products
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">
                    No products found matching your filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
