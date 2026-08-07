import { Categories } from '../components/Categories'
import { ProductGrid } from '../components/products/ProductGrid'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { categoryId } from '../utils/categoryId'

const productCategories = categories.filter((category) => category !== 'Todos')

export function Productos({ onAddToCart }) {
    function scrollToCategory(category) {
        document.querySelector(`#${categoryId(category)}`)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="catalog" id="catalogo">
        <div className="section-heading">
            <div><p className="eyebrow">Selección Natural</p><h1>Nuestro catálogo</h1></div>
            <Categories categories={productCategories} onCategoryClick={scrollToCategory} />
        </div>
        {productCategories.map((category) => (
            <section className="product-category" id={categoryId(category)} key={category}>
                <div className="product-category-heading"><p className="eyebrow">Categoría</p><h2>{category}</h2></div>
                <ProductGrid products={products.filter((product) => product.category === category)} onAddToCart={onAddToCart} />
            </section>
        ))}
        </section>
    )
}
