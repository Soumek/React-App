import React from 'react'
import loginCardImg from '../../assets/loginCardImg.jpg';
import {BCarousel} from '../Layout/HeaderStyles';
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
{/* <Carousels id="Carousel" className="carousel slide mt-4" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#Carousel" className="li-control active" data-slide-to="0"></li>
    <li data-target="#Carousel" className="li-control" data-slide-to="1"></li>
    <li data-target="#Carousel" className="li-control" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={loginCardImg} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={loginCardImg} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={loginCardImg} alt="Third slide"/>
    </div>
  </div>

</Carousels> */}