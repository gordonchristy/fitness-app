import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import WorkoutImage1 from './WorkoutImage1';
import WorkoutImage2 from './WorkoutImage2';
import WorkoutImage3 from './WorkoutImage3';

//This is the VideoCarousel component that houses the YouTube fitness videos pylled from the Workout Image 1, 2, and 3 components. The carousel should be placed on the Dashboard underneath the container that houses the user cards.

function WorkoutVideos () {
    return (
    <Carousel fade>
      <Carousel.Item>
        <WorkoutImage1 text="First slide" />
        <Carousel.Caption>
          <h3>Pilates </h3>
          <p>Click on the link to watch a Pilates Video.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <WorkoutImage2 text="Second slide" />
        <Carousel.Caption>
          <h3>Yoga </h3>
          <p>Click on the link to watch a Pilates Video.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <WorkoutImage3 text="Third slide" />
        <Carousel.Caption>
          <h3>Weight Training</h3>
          <p>
            Click on the link to watch a Weight Training Video.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default WorkoutVideos;
