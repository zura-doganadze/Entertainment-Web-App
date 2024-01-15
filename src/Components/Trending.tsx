import React, { useRef, useState } from "react";
import styled from "styled-components";
import MoviesImg from "/assets/icon-nav-movies.svg";
import seriesImg from "/assets/icon-nav-tv-series.svg";
import SaveFalseIcon from "../assets/Trending-img/SaveFalse-icon.png";
import SaveTrueIcon from "../assets/Trending-img/SaveTrue-icon.png";

function Trending({ movies }: { movies: TMovie[] }) {
  const trendingMovies = movies.filter((movie: TMovie) => movie.isTrending);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startX !== null) {
      const moveX = event.touches[0].clientX - startX;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft -= moveX;
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null); 
  };


  return (
    <Main>
      <h1>Trending</h1>
      <CarouselWrapper
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <MoviesWrapper ref={carouselRef}>
          {trendingMovies.map((movie: TMovie, index: number) => (
            <MoviesContainer key={index}>
              <MovieImg src={movie.thumbnail.trending?.large} alt="img" />
              <TMovieContent>
                <TMovieDetails>
                  <span>{movie.year}</span>
                  <Point></Point>
                  <img
                    src={movie?.category === "Movie" ? MoviesImg : seriesImg}
                    alt=""
                  />
                  <span>{movie.category}</span>
                  <Point></Point>
                  <span>{movie.rating}</span>
                </TMovieDetails>
                <h5>{movie.title}</h5>
              </TMovieContent>
              <SaveImgContainer>
                <img
                  src={movie.isBookmarked ? SaveTrueIcon : SaveFalseIcon}
                  alt=""
                />
              </SaveImgContainer>
            </MoviesContainer>
          ))}
        </MoviesWrapper>
      </CarouselWrapper>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0 20px 0;
  align-items: start;
  h1 {
    color: var(--Pure-White, #fff);
    font-size: 32px;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
  }
`;

const CarouselWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  touch-action: pan-y;
`;

const MoviesWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  column-gap: 40px;
`;

const MoviesContainer = styled.div`
  max-width: 470px;
  width: 100%;
  position: relative;
`;

const MovieImg = styled.img`
  border-radius: 8px;
  position: relative;
  max-height: 230px;
  cursor: pointer;
`;

const TMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  bottom: 8%;
  left: 8%;
  div {
    column-gap: 12px;
    color: var(--Pure-White, #fff);
    font-size: 15px;
  }
  h5 {
    color: var(--Pure-White, #fff);
    font-size: 24px;
  }
  img {
    color: #fff;
    filter: brightness(3);
  }
`;

const TMovieDetails = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.75;
`;

const Point = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
`;

const SaveImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 5%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #5a698f;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    img {
      filter: brightness(0);
    }
  }
`;

export default Trending;
