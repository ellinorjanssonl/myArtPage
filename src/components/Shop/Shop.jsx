import { Container, Row, Col, Card } from 'react-bootstrap';
import './Shop.css';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';


const cardData = [
  {
    imgSrc: "paintinglady.jpg",
    title: "Oljemålning kvinna",
    text: "En oljemålning på en kvinna i storlek 1.5 x 1.5 meter. Målad på canvas",
    price: "2500" 
  },
  {
    imgSrc: "bild1.jpg",
    title: "Akrylmåling Abstrakt",
    text: "Akryl, 1 x 1 meter. Toner av blått, silver, guld och vitt.",
    price: "1500" 
  },
  {
    imgSrc: "bild4.jpg",
    title: "Målning med strukatur",
    text: "En olikemålning i 1.5 x 1 meter. Strukturen i målningen ger en 3D effekt.",
    price: "1700" 
  },
  {
    imgSrc: "bild3.jpg",
    title: "Akvarell och Akryl",
    text: "Målning av kvinna med toner av guld och silver i färgkombinationen.",
    price: "1900" 
  },
  {
    imgSrc: "bild8.jpg",
    title: "Oljemålning Abstrakt",
    text: "En oljemålning i naturfärg med inlag av guld.",
    price: "1500" 
  },
  {
    imgSrc: "bild10.jpg",
    title: "Akvarell och strukatur",
    text: "En målning i 2 x 2 meter med blå toner.",
    price: "2100" 
  },

  {
    imgSrc: "artsmoking.jpg",
    title: "Akvarell och krita",
    text: "En målning på kvinna.",
    price: "4100" 
  },

  {
    imgSrc: "oljebild.jpg",
    title: "Oljemålning i 3D",
    text: "En målning i olja.",
    price: "2800" 
  },

  {
    imgSrc: "blyertsman.jpg",
    title: "blyertsporträtt",
    text: "En teckning i blyerts .",
    price: "2100" 
  }


];

const Shop = () => {
  const { addToCart } = useContext(CartContext); // Använd detta för att få tillgång till addToCart-metoden

  const handleAddToCart = (item) => {
    addToCart(item); // Anropa addToCart med produkten som ska läggas till
  };
  
  return (
    <div>
      {/* ... */}
      <Container className="containerlook">
        <Row xs={1} md={3} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <Card className="cardStyle">
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body className='cardBody'>
                  <Card.Title className="cardTitle">{card.title}</Card.Title>
                  <Card.Text className="cardText">{card.text}</Card.Text>
                  {/* Visa priset */}
                <div className="button-container"> 
                  <div className="cardPrices">
                   <Card.Text className="cardPrice">{card.price} SEK</Card.Text>
                    {/* Lägg till knapp för varukorgen */}
                  </div>
                  <button className="btn btn-primary" onClick={() => handleAddToCart(card)}>
                    Lägg till i varukorg
                  </button>
                </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;