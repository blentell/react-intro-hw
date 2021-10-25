import React, { Component } from 'react'
import Box from "./Box"

export class Body extends Component {


  render() {
    console.log(this.props.name);
		return (
			<div>
				<img src="https://ichef.bbci.co.uk/images/ic/1200x675/p08hrycq.jpg"></img>
				<p>Our Favorite Doctors!</p>
				<Box
					name={this.props.name}
					img
					src="https://deadline.com/wp-content/uploads/2021/01/21723018-high_res-doctor-who-special-2020-revolution-of-the-daleks-e1610626232902.jpg"
				/>
				<Box
					name={this.props.name}
					img
					src="https://i.guim.co.uk/img/media/9d0bbd8ff96e89eb61752a0702bf66122cca3fb3/0_58_1728_1037/master/1728.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=187970c875c6b09640aecf6f4dbc6cb5"
				/>
				<Box
					name={this.props.name}
					img
					src="https://i.ytimg.com/vi/MLn1IuAyKaI/maxresdefault.jpg"
				/>
			</div>
		);
	}
}

export default Body
