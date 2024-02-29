
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import './Home.css';


function Home() {
  return (
    <div>
    <Container className="ContainerHome">
        <Col md={12}>
          <div className="text-info">
            <h1>Art by Ellinor</h1>
            <p></p>
           </div>
          </Col>
          <Row>
          {/* Första kolumnen med Carousel tar upp 6 av 12 kolumner, vilket är hälften av containerbredden */}
         <Col md={6}> 
          <Carousel data-bs-theme="light">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="artsmoking.jpg"
                alt="First slide"  
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="digitalbutterfly2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="digitalkendall.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="womanprofile.jpg"
                alt="Third slide"
               />
               <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="bild1.jpg"
                alt="First slide"  
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="bild5.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      
        <Col md={6}> 
         <Row className="justify-content-center">
              <Col md={8}>
               
                <div className="text-center">
                <h2>Om mig</h2>
                <p>Jag heter Ellinor och är en passionerad konstnär som älskar att utforska olika tekniker och stilar. Min konst är en reflektion av mina känslor, erfarenheter och den skönhet jag ser i världen omkring mig.</p>
                <p>På den här sidan kan du utforska mitt galleri av verk. Alla målningar är till salu och kan enkelt läggas till i din varukorg för köp. Tack för att du besöker och stödjer min konst!</p>
                </div>
                <Image src="bildpamig.jpg" className="profile-image" />
                <Image src="signature.png" className="signature" />
              </Col>
            </Row>
         </Col>
       </Row>
  </Container>
  </div>

  );
}

export default Home;

