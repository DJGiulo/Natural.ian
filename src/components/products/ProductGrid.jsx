import { ProductCard } from './ProductCard'

export function ProductGrid({ products, onBuy }) {
  return <div className="product-grid">{products.map((product) => <ProductCard key={`${product.category}-${product.name}`} product={product} onBuy={onBuy} />)}</div>
}
