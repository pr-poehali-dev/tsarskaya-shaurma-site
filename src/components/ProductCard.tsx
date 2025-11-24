import { Button } from "@/components/ui/button";
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
    <div className="group relative overflow-hidden bg-white border-2 border-black hover:shadow-2xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold uppercase tracking-wide">{product.name}</h3>
            <p className="text-sm text-gray-600 font-medium">{product.description}</p>
          </div>
          <div className="text-2xl font-bold whitespace-nowrap">{product.price} ₽</div>
        </div>
        
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-600">
          {product.sizes.map((size) => (
            <span key={size} className="border border-gray-300 px-3 py-1 hover:border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
              {size}
            </span>
          ))}
        </div>
        
        <Button 
          className="w-full h-14 text-sm font-bold uppercase tracking-widest bg-black hover:bg-gray-800 transition-colors" 
          onClick={() => onAddToCart(product)}
        >
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
}
