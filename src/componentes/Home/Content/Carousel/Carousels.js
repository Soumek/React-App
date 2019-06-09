import React from 'react'
import loginCardImg from '../../../../assets/loginCardImg.jpg';
import {BCarousel} from '../../HomeStyles';
import Carousel from 'react-bootstrap/Carousel'
export default class Carousels extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <BCarousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
         className="mt-4"
         controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={loginCardImg}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={loginCardImg}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={loginCardImg}
            alt="Third slide"
          />
        </Carousel.Item>
      </BCarousel>
    );
  }
}
