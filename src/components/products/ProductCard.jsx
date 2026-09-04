export function ProductCard({ product, onBuy }) {
  return (
    <article className="product-card">
      <div className={`product-image ${product.category.startsWith('Atrapa') ? 'product-image--dreamcatcher' : ''}`}>
        <img src={product.image} alt={product.name} />
        {product.tag && <span className="tag">{product.tag}</span>}
      </div>
      <div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div>
      <button className="buy-button" type="button" onClick={() => onBuy(product)}>Comprar</button>
    </article>
  )
}
