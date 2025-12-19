import { Featured, HeroBanner, NewDrops, OurStory, Shop, SpecialProducts } from '../components/Home';
import { useTitle } from '../hooks/useTitle';

export const Home = () => {
    useTitle("NiKE ")
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
