import { Featured, HeroBanner, NewDrops, OurStory, Shop, SpecialProducts } from '../components/Home';

export const Home = () => {
    return (
        <main className="home">
            <HeroBanner />
            <NewDrops />
            <SpecialProducts />
            <Featured />
            <OurStory />
            <Shop />
        </main>
    )
}
