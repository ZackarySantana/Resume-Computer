// Libraries
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
    scroll-snap-align: start;

	background-color: var(--background);
	color: var(--on-background);

	@media (min-width: 600px) {
		-webkit-clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
		clip-path: polygon(20% 20%, 30% 0%, 70% 0%, 80% 20%, 80% 80%, 70% 100%, 30% 100%, 20% 80%);
	}

	@media (max-width: 600px) {
		-webkit-clip-path: polygon(0% 10%, 30% 0%, 70% 0%, 100% 10%, 100% 90%, 70% 100%, 30% 100%, 0% 90%);
		clip-path: polygon(0% 10%, 30% 0%, 70% 0%, 100% 10%, 100% 90%, 70% 100%, 30% 100%, 0% 90%);
	}
`;

const Polygon = styled.div`
	@media (min-width: 600px) {
		padding: 0 20vw 0 20vw;
		height: 80vh;
	}
	
	@media (max-width: 600px) {
		padding: 0;
		height: 90vh;
	}
`;

const TitleWrapper = styled.div`
	height: 20vh;

	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;

	@media (min-width: 600px) {
		padding: 0 10vw 0 10vw;
	}
`;

const Title = styled.h1`
	height: fit-content;
	font-size: 4rem;
`;

const Content = styled.div`
	overflow: hidden;

	@media (min-width: 600px) {
		height: 60vh;
	}
	
	@media (max-width: 600px) {
		height: 70vh;
	}
`;

export default class PageSection extends React.Component {
	render() {
		return (
			<Section>
				<Polygon>
					<TitleWrapper>
						<Title>
							{this.state.title}
						</Title>
					</TitleWrapper>
					<Content>
						{this.rendering(this.props)}
					</Content>
				</Polygon>
			</Section>
		);
	}
}