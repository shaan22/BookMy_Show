
import './Singlemovie.css'
// import Carousel from 'react-bootstrap/Carousel'

import Card from 'react-bootstrap/Card'
import data from './movies.json'
import data1 from './SingleMovie.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from "react-router";

function SingleMovie(){
    const {movid} = useParams();
  console.log(data);
  console.log(data1);
    return (
      <div>
            <Container className="img_wal">
                {data1.map((mov1) =>{
                if(mov1.id===movid){
                    return (
                        <div className="img_wall_cont">
                <img src={mov1.img} alt="" className="img" />
                </div>
                    )
                }
            }
                )}

            </Container>



      <div className="Allmovies__container">
        

        
      <Container className="Cards__container">
        <Row >
        {data.map((mov) =>{
        if(mov.id=== movid)  {
            return (
              <Container>
            <Col  xs={6} md={4} lg={3} id={mov.id}>
              <Card className="Cards" > 
              <Card.Img variant="top" style={{borderRadius:'30px'}} src={mov.image} />
              <Card.Body>
              <Card.Title>{mov.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">{mov.lang}</small>
              </Card.Footer>
              </Card>
            </Col>
            <div className="about_m">About The Movie </div>
                    <div className="about_movie">{mov.txt}</div>
            </Container>
                
            )
        }
    }
            )}
        </Row>
</Container>
      </div>
      </div>
    );

} 

export default SingleMovie;