import React from "react";
import "./Videos.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LiftArrow from "../img/liftarrow.png";
import RightArrow from "../img/rightarrow.png";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    let items = [];
    let level;
    console.log(this.state.active);
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item key={index} url={this.state.items[index].url} level={level} />
      );
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    let newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left"></i>
          <span>
            <img src={LiftArrow} width="65" padding="15" />
          </span>
        </div>
        <ReactCSSTransitionGroup transitionName={this.state.direction}>
          {this.generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right"></i>
          <span>
            <img src={RightArrow} width="70" />
          </span>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    return (
      <div>
        <div className={className} >
          <iframe
            src={this.props.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            height="300"
            borderRadius="50"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Videos;
