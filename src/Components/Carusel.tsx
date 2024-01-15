import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

const Carusel: React.FC = () => {
  const carouselImages = ["assets/1.jpeg", "assets/2.jpeg", "assets/3.jpeg"];

  return (
    <div className="App">
      <h1>React TypeScript Carousel</h1>
      <Wrapper>
        <h1>React TypeScript Carousel</h1>
      </Wrapper>
      <ImageCarousel images={carouselImages} />
    </div>
  );
};

ReactDOM.render(<Carusel />, document.getElementById("root"));

export default Carusel;

const Wrapper = styled.div`
  width: 500px;
`;
