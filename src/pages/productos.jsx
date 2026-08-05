import { Categories } from '../components/Categories'
import { ProductGrid } from '../components/products/ProductGrid'
import { categories } from '../data/categories'
import { products } from '../data/products'

export function Productos({ activeCategory, onAddToCart, onSelectCategory }) {
  const visibleProducts = activeCategory === 'Todos'
    ? products
    : products.filter((product) => product.category === activeCategory)

  return (
    <section className="catalog" id="catalogo">
      <div className="section-heading">
        <div><p className="eyebrow">Selección Natural</p><h1>Para tu ritual diario</h1></div>
        <Categories categories={categories} selectedCategory={activeCategory} onSelectCategory={onSelectCategory} />
      </div>
      <ProductGrid products={visibleProducts} onAddToCart={onAddToCart} />
    </section>
  )
}
