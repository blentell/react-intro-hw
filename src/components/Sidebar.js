import React, { Component } from 'react'

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeSidebarColor: false,
    };
  }

  changeSidebarColor = () => {
    this.setState((prevState) => {
      return {
				changeSidebarColor: !prevState.changeSidebarColor,
			};
    })
  }
  render() {
    return (
			<div>
        <ul
          style={{
            backgroundColor: this.state.changeSidebarColor ? "red" : "blue"
					}}
				>
          <li color={"Red"} onClick={this.changeSidebarColor}>
						Red
					</li>
          <li color={"Blue"} onClick={this.changeSidebarColor}>
						Blue
					</li>
          <li color={"Green"} onClick={this.changeSidebarColor}>
						Green
					</li>
				</ul>
			</div>
		);
  }
}

export default Sidebar
