import img1 from '../../assets/images/poster1.avif';
import img2 from '../../assets/images/poster2.avif';
import { Button } from '../Button';

export const Featured = () => {
    return (
        <div className="featured-section container">
            <div className="section-title">Featured</div>
            <div className="section-desc">Stand out with latest collection-bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone. Don't miss out!</div>

            <div className="section-contents">
                <div className="grid-1">
                    <div className="image-section">
                        <img src={img1} alt="" />
                    </div>
                    <div className="text-content">
                        <div className="content-title">built by the streets, made for you</div>
                        <p>From the streets to your style-our jouney is all about self-expression and rebelion. Jon the movement.</p>
                        <Button title={"read our story"} bg={'dark'} />
                    </div>
                </div>
                <div className="grid-2">
                    <div className="text-content">
                        <div className="content-title">elevate your street game</div>
                        <p>From bold graphics to everyday essentialsm explore our latest drops and signature pieces designed for the culture. </p>
                        <Button title={"shop collections"} />
                    </div>
                    <div className="image-section"><img src={img2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}
