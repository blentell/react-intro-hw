import React, { Component } from 'react'

export class Box extends Component {

  render() {
    return (
			<div
				className="box"
        img={this.props.img}
				name={this.props.name}
			></div>
		);
  }
}

export default Box
