import { Link } from 'react-router-dom';
import poster1 from '../../assets/images/poster1.avif';
import poster2 from '../../assets/images/poster2.avif';
import poster3 from '../../assets/images/poster3.avif';

export const NewDrops = () => {

    const newDrops = [
        { title: "Nike Football", description: "Gifts for Goal Scorers", src: poster1 },
        { title: "Trail Running", description: "Up the Mountains, Through the Woods.", src: poster2 },
        { title: "New Arrivals", description: "Everyday comfort. Iconic look.", src: poster3 }
    ]

    return (
        <div className='new-drops container'>
            <div className="section-title">new drops</div>
            <div className="section-desc">Stand out with latest collection-bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone. Don't miss out!</div>

            <div className="home-new-products">
                {
                    newDrops.map((item, index) => (
                        <div className="home-product-card" key={index}>
                            <div className="image">
                                <img src={item.src} alt={item.title} loading='lazy' />

                                <div className="text-content">
                                    <div className="card-title">{item.title}</div>
                                    <div className="card-desc">{item.description}</div>
                                    <Link to={'/category/'}>
                                        <div className="btn-primary">
                                            shop
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
