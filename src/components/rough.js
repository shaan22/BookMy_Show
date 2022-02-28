import "./AllMovies.css";
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'


function AllMovies(){
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
      <CardGroup className="Cards__container" xs={6} md={3}>
  <Card className="Cards" > 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAzNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122532-lyukkgtkfl-portrait.jpg" />
    <Card.Body>
      <Card.Title>Venom: Let There Be Carnage</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">English, Hindi, Tamil, Telugu</small>
    </Card.Footer>
  </Card>

  <Card className="Cards"> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICAxNGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00124531-bnvjhlnsdn-portrait.jpg" />
    <Card.Body>
      <Card.Title>Salaga</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>

  <Card className="Cards"> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAxNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00071828-ygyymsywuf-portrait.jpg" />
    <Card.Body>
      <Card.Title>Kotigobba 3</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>

  <Card className="Cards"> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA2Mmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00305742-jelqwajkgx-portrait.jpg" />
    <Card.Body>
      <Card.Title>Doctor</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>
</CardGroup>



<CardGroup className="Cards__container" >
  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICA0ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122526-dbnyypwzev-portrait.jpg" />
    <Card.Body>
      <Card.Title>Venom: Let There Be Carnage</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">English, Hindi, Tamil, Telugu</small>
    </Card.Footer>
  </Card>

  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICA0M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00300001-jymytkecke-portrait.jpg" />
    <Card.Body>
      <Card.Title>Salaga</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>

  <Card className="Cards" xs={6} md={3} > 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTggbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303386-lezypzgbaw-portrait.jpg" />
    <Card.Body>
      <Card.Title>Kotigobba 3</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>

  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTQgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303385-rrghfupmzt-portrait.jpg" />
    <Card.Body>
      <Card.Title>Doctor</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>
</CardGroup>




<CardGroup className="Cards__container" xs={6} md={3}>
  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTQgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303385-rrghfupmzt-portrait.jpg" />
    <Card.Body>
      <Card.Title>Venom: Let There Be Carnage</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">English, Hindi, Tamil, Telugu</small>
    </Card.Footer>
  </Card>

  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjAlICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00313056-qgpyckalbn-portrait.jpg" />
    <Card.Body>
      <Card.Title>Salaga</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>

  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICAzOTUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122518-qalhvtzntm-portrait.jpg" />
    <Card.Body>
      <Card.Title>Kotigobba 3</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>

  <Card className="Cards" xs={6} md={3}> 
    <Card.Img variant="top" style={{borderRadius:'30px'}} src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAzM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-mzvrfnuanm-portrait.jpg" />
    <Card.Body>
      <Card.Title>Doctor</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Kannada</small>
    </Card.Footer>
  </Card>
</CardGroup>
      </div>
      </div>
    );

} 

export default AllMovies;