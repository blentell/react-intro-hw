import "./App.css";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer"

import React, { Component } from "react";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: "box",
		};
	}

	setBoxName = () => {
		this.setState({
			name: this.state.name,
			count: this.state.count + 1,
		});
	};
	render() {
		return (
      <div className="App">
        <Header />
				<Sidebar />
        <Body name={(this.setBoxName, this.state.count)} />
        <Footer />
			</div>
		);
	}
}

export default App;
