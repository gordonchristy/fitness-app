import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pilates from './pilates.jpg';

// This is the WorkoutImage 1 component that enables the user to click on an image and play a fitness video from YouTube.
function PilatesExample() {
  const pilatesLink = 'https://youtu.be/oiToJsf_SQ4?si=pReeLxSb3Gml3l7k';
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <a href={pilatesLink} target="_blank" rel="noopener noreferrer">
            <Image src={pilates} width = "583" height = "390" alt="Pilates video" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default PilatesExample;