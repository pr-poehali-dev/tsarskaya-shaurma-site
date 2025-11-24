import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
          {product.price} ₽
        </div>
      </div>
      <CardContent className="p-6 space-y-3">
        <h3 className="font-bold text-xl">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        <div className="flex items-center gap-2 pt-2">
          <Icon name="Ruler" size={18} className="text-primary" />
          <span className="text-sm font-medium">
            {product.sizes.join(' · ')}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full h-12 text-base font-semibold shadow-md hover:shadow-lg transition-shadow" 
          onClick={() => onAddToCart(product)}
        >
          <Icon name="ShoppingBag" size={20} className="mr-2" />
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
}