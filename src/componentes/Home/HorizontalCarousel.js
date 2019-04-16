import React from 'react'
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import HCarouseltItem from './HCarouselItem'
import {HCarousels,HCarouselButtonsPrev,HCarouselButtonsNext,HCarouselIcon} from '../Layout/HeaderStyles';
const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];
const HCarouselButtons=styled.i`
color:red;
`;
const leftArrow=<HCarouselButtonsPrev className="fas fa-chevron-left"></HCarouselButtonsPrev>
const rightArrow=<HCarouselButtonsNext className="fas fa-chevron-right"></HCarouselButtonsNext>
export default class HorizontalCarousel extends React.Component { 
  items = [1, 2, 3, 4, 5,6,7,8,9];
  state = {
    galleryItems: this.items.map((i) => (<HCarouseltItem key={i}>{i}</HCarouseltItem>)),
    responsive:{1024:{items:5}}
  }
 
 
 
  render() {
    return (
      <HCarousels className="mb-5">
 

        <AliceCarousel
          responsive={this.state.responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          ref={(el) => (this.Carousel = el)}
        />
 
        <HCarouselButtonsPrev className="fas fa-chevron-left btn" onClick={() => this.Carousel._slidePrev()}></HCarouselButtonsPrev>
        <HCarouselButtonsNext className="fas fa-chevron-right btn" onClick={() => this.Carousel._slideNext()}></HCarouselButtonsNext>
 
       </HCarousels>
    )
  }
}