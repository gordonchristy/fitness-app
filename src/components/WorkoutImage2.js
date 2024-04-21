import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


//This the WorkoutImage 2 component that enables the user to click on an image and play a fitness video from YouTube.

function YogaExample() {
  const yogaLink = 'https://youtu.be/B4kNiCWTl7M?si=BhqGipkxexu3N5zC';

  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <a href={yogaLink} target="_blank" rel="noopener noreferrer">
            <Image src="direct_image_url_goes_here" rounded />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default YogaExample;