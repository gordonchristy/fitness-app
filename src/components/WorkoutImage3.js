import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import weights from './weights.jpg'


//This the WorkoutImage 3 component that enables the user to click on an image and play a fitness video from YouTube.

function WeightsExample() {
  const weightsLink = 'https://youtu.be/jjUyJufUKL8?si=JjR9E_-BL7_OzSSe';
  
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <a href={weightsLink} target="_blank" rel="noopener noreferrer">
            <Image src={weights} width ="583" height ="390" alt="video of woman doing leg lifts with weigts" />
          </a>        
        </Col>
      </Row>
    </Container>
  );
}

export default WeightsExample;