import  './Sliderimages.css';
import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
       <Carousel fade variant="dark" interval={1000}>
       
            <Carousel.Item >
            <div id="img_container1">
                <img 
                className="d-block w-50"
                src="https://in.bmscdn.com/promotions/cms/creatives/1634807496864_acetechdesktop.jpg"
                alt="First slide"
                />
                </div>
                
            </Carousel.Item>
            <Carousel.Item>
              <div id="img_container1">
          
                <img 
                className="d-block w-50"
                src="https://in.bmscdn.com/promotions/cms/creatives/1634218468007_movieseternals_incinemas5thnovknowmore_webshowcase_1240x300.jpg"
                alt="Second slide"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div id="img_container1">
                <img 
                className="d-block w-50"
                src="https://in.bmscdn.com/promotions/cms/creatives/1633099172106_bas_oct21_finalbannerweb1240x300.png"
                alt="Third slide"
                />
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
