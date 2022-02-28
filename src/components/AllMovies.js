import "./AllMovies.css";
import Carousel from 'react-bootstrap/Carousel'

import Card from 'react-bootstrap/Card'
import data from './Movies.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AllMovies(){
  console.log(data);
    return (
      <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://in.bmscdn.com/promotions/cms/creatives/1635151891160_regionalbanner1240x300.jpg"
          alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://in.bmscdn.com/promotions/cms/creatives/1633805507230_generic_vacci_1240x300.png"
          alt="Second slide"/>
      </Carousel.Item>
      </Carousel>



      <div className="Allmovies__container">
        <div className="Txt__container">
          Movies In Bengaluru
        </div>

        <div className="img_cont">
          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/coming-soon-web-collection-202012090733.png" alt="" />
        </div>
      <Container className="Cards__container">
        <Row style={{textAlign:"center"}}>
        {data.map((mov) =>
            <Col onClick={()=>window.location.href="/movies/"+mov.id}  xs={6} md={4} lg={3} id={mov.id}>
              <Card className="Cards1" > 
              <Card.Img variant="top" style={{borderRadius:'30px'}} src={mov.image} />
              <Card.Body>
              <Card.Title>{mov.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">{mov.lang}</small>
              </Card.Footer>
              </Card>
                    
            </Col>
            )}
        </Row>
</Container>
      </div>
      </div>
    );

} 

export default AllMovies;