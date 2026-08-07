import { Categories } from './Categories'

export function Hero({ image, categories, onCategoryClick }) {
  return (
    <section className="hero-forest relative isolate d-flex align-items-center justify-content-center min-h-[34rem] text-white" id="inicio" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content container position-relative z-1 px-4 py-5 text-center">
        <p className="hero-brand mb-4">Natural.IAN</p>
        <p className="lead fw-semibold mb-4">Tu bienestar, nuestra pasión</p>
        <Categories categories={categories} className="hero-categories justify-content-center" onCategoryClick={onCategoryClick} />
      </div>
    </section>
  )
}
