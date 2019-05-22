import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HCarouseltItem from "./HCarouselItem/HCarouselItem";
import {
  HCarousels,
  HCarouselButtonsPrev,
  HCarouselButtonsNext
} from "../../../Layout/HeaderStyles";
//Hay un bug en HCarousel que consiste en que al llegar a un elemento anterior mayor 
//que el elemento actual, el slider se mueve para adelante y no deja ver el item activo
//pero el problema general consiste en que se va de focus el item al clickear, porque re renderiza todo el array
//galleryItems al hacer click en el y actualizar el state de activeItem.
export default class HorizontalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryItems: [],
      responsive: { 1024: { items: 5 } },
      activeItem: 1
    };
    this.Carousel = React.createRef();
  }
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  nextSlide = () => {
    this.Carousel.current._slideNext();
  };
  prevSlide = () => {
    this.Carousel.current._slidePrev();
  };
  handleActiveItem = id => {
    const prevItem = this.state.activeItem;
    this.setState(
      {
        activeItem: id
      },
      () => {
        const Items = this.items.map(i => (
          <HCarouseltItem
            key={i}
            onActive={this.handleActiveItem}
            activeItem={this.state.activeItem}
            id={i}
          />
        ));
        this.setState(
          {
            galleryItems: Items
          },
          () => {
            
            if (prevItem <= this.state.activeItem) this.nextSlide();
            else {
              if (prevItem > 6) this.nextSlide();

              this.prevSlide();
            }
          }
        );
      }
    );
  };
  componentDidMount() {
    const Items = this.items.map(i => (
      <HCarouseltItem
        key={i}
        onActive={this.handleActiveItem}
        activeItem={this.state.activeItem}
        id={i}
      />
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
          ref={this.Carousel}
        />
        <HCarouselButtonsPrev
          className="fas fa-chevron-left btn"
          onClick={this.prevSlide}
        />
        <HCarouselButtonsNext
          className="fas fa-chevron-right btn"
          onClick={this.nextSlide}
        />
      </HCarousels>
    );
  }
}
