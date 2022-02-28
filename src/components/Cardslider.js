import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import "./Cardslider.css"
import CardGroup from "react-bootstrap/CardGroup"

function Cardslider() {
  return (
    <div id="grp__Cards"> Recommended Movies
        <Carousel fade variant="dark" interval={1000}>
            <Carousel.Item >
            <CardGroup>
    <Card id="crd_1">
    <Card.Img style={{borderRadius:"10px"}} variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTQlICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00322025-lbcskrvdar-portrait.jpg" />
    <Card.Body>
      <Card.Title>Love MockTail 2</Card.Title>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{fontSize:"17px"}}>Action/Horror/Sci-Fi/Thriller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px",height:"24.8rem"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICA3Njcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00322589-ncjqlsnzyj-portrait.jpg" />
    <Card.Body>
      <Card.Title>By Tow Love</Card.Title>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{fontSize:"17px"}}>Crime Thiller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICA5ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311712-myfgpbtwvg-portrait.jpg" />
    <Card.Body>
      <Card.Title>Uncharted</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"17px"}}>
      <small className="text-muted">Action/Drama/Romantic/Thriller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"15px",height:"22.9rem"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0MWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00320877-lzqnxqsrha-portrait.jpg" />
    <Card.Body>
      <Card.Title>DJ Tillu</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"17px"}}>
      <small className="text-muted">Action/Comedy/Thriller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAzOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00305648-flduhjwduc-portrait.jpg" />
    <Card.Body>
      <Card.Title>Khalid</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"17px"}}>
      <small className="text-muted">Action/Adventure/Drama/Sci-Fi</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Carousel.Item>


<Carousel.Item>
            <CardGroup>
            <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00316029-uqjxduknbf-portrait.jpg" />
    <Card.Body>
      <Card.Title>Resident Evil</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"15px"}}>
      <small className="text-muted">Action/Horror/Sci-Fi/Thriller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00322185-ndenwebgvm-portrait.jpg" />
    <Card.Body>
      <Card.Title>Furius</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"15px"}}>
      <small className="text-muted">Crime Thiller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00321596-nxmnqsuhzj-portrait.jpg" />
    <Card.Body>
      <Card.Title>Die</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"15px"}}>
      <small className="text-muted">Action/Drama/Romantic/Thriller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00322656-qrbqwzajul-portrait.jpg" />
    <Card.Body>
      <Card.Title>Fatale</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"15px"}}>
      <small className="text-muted">Action/Comedy/Thriller</small>
    </Card.Footer>
  </Card>
  <Card id="crd_1">
    <Card.Img variant="top" style={{borderRadius:"10px"}} src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00320322-enymlkvhpz-portrait.jpg" />
    <Card.Body>
      <Card.Title>Hate Game</Card.Title>
      
    </Card.Body>
    <Card.Footer style={{fontSize:"15px"}}>
      <small className="text-muted">Action/Adventure/Drama/Sci-Fi</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </Carousel.Item>
        </Carousel>
        <div class="ImageWrapper">
    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="" width="100%" height="100%"/>
        
    </div>
    </div>


  );
}

export default Cardslider;
