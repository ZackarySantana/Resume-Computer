// Libraries
import React from 'react';

// Components
import Section from '../components/page-section';

export default class Resume extends Section {

	constructor(props) {
		super(props);

		this.state = {
			title: "Resume"
		};
	}

	rendering(props) {
		return (
			<h1>hi</h1>
		);
	}
}