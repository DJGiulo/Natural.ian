import { About } from '../components/About'
import { Benefits } from '../components/Benefits'
import { categories } from '../data/categories'
import { Hero } from '../components/Hero'
import { Instagram } from '../components/Instagram'
import { Contacto } from '../components/Contacto'

export function Home({ heroImage, ritualImage, instagramImages, isSubscribed, onCategoryClick, onSubscribe }) {
    return (
        <>
        <Hero image={heroImage} categories={categories.filter((category) => category !== 'Todos')} onCategoryClick={onCategoryClick} />
        <Benefits /> 
        <About />
        <Instagram images={instagramImages} />
        <Contacto isSubscribed={isSubscribed} onSubscribe={onSubscribe} />
        </>
    )
}
