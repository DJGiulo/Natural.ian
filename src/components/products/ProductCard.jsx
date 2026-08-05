export function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.tag && <span className="tag">{product.tag}</span>}
        <button type="button" onClick={() => onAddToCart(product)} aria-label={`Agregar ${product.name} a la bolsa`}>+</button>
      </div>
      <div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div>
    </article>
  )
}
