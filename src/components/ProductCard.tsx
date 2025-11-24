import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  images?: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-500">
      <div className="grid md:grid-cols-3 gap-4 p-4">
        {product.images && product.images.length > 0 ? (
          product.images.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
              <img
                src={img}
                alt={`${product.name} - ${index + 1}`}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))
        ) : (
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:col-span-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        )}
      </div>
      
      <div className="p-8 space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
        </div>
        
        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-3xl font-bold">{product.price.toLocaleString()} ₽</div>
          <Button 
            className="rounded-full px-6"
            onClick={() => onAddToCart(product)}
          >
            В корзину
          </Button>
        </div>
      </div>
    </Card>
  );
}