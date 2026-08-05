export function Categories({ categories, selectedCategory, onSelectCategory }) {
  return <div className="filters" aria-label="Filtrar productos">{categories.map((category) => <button className={selectedCategory === category ? 'active' : ''} key={category} type="button" onClick={() => onSelectCategory(category)}>{category}</button>)}</div>
}
