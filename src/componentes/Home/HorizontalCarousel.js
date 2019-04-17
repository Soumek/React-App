import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HCarouseltItem from "./HCarouselItem";
import {
  HCarousels,
  HCarouselButtonsPrev,
  HCarouselButtonsNext
} from "../Layout/HeaderStyles";

export default class HorizontalCarousel extends React.Component {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  state = {
    galleryItems: [],
    responsive: { 1024: { items: 5 } }
  };
  componentDidMount() {
    const Items = this.items.map(i => (
      <HCarouseltItem key={i}>{i}</HCarouseltItem>
    ));
    this.setState({
      galleryItems: Items
    });
    
  }
  
  render() {
    
    return (
      <HCarousels className="mb-5">
        <AliceCarousel
          responsive={this.state.responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          ref={el => (this.Carousel = el)}
        />
        <HCarouselButtonsPrev
          className="fas fa-chevron-left btn"
          onClick={() => this.Carousel._slidePrev()}
        />
        <HCarouselButtonsNext
          className="fas fa-chevron-right btn"
          onClick={() => this.Carousel._slideNext()}
        />
      </HCarousels>
    );
  }
}
