export function Categories({ categories, className = '', onCategoryClick }) {
  return (
    <div className={`filters ${className}`.trim()} aria-label="Ir a una categoría de productos">
      {categories.map((category) => <button key={category} type="button" onClick={() => onCategoryClick(category)}>{category}</button>)}
    </div>
  )
}
