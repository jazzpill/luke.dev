import React from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';
import SEO from '../components/seo';
import { GlobalStyle } from '../components/GlobalStyle';

const IndexPage = () => {
	const props = useSpring({
		r: 0,
		from: { r: 90 },
		config: {
			mass: 1,
			tension: 330,
			velocity: 2,
			friction: 11,
		},
	});

	return (
		<>
			<GlobalStyle />
			<SEO title="Hi 👋" keywords={[]} />
			<div css={{ padding: 20 }}>
				<h1 css={{ fontSize: 32 }}>
					Hi{' '}
					<animated.span
						role="img"
						aria-label="waving emoji"
						style={{
							display: 'inline-block',
							transformOrigin: 'center',
							transform: props.r.interpolate(x => `rotate(${x}deg)`),
						}}
					>
						👋
					</animated.span>
				</h1>

				<p
					css={{
						fontSize: 24,
					}}
				>
					My name is Luke. I'm a Lead Engineer at{' '}
					<a href="https://fath.om">Fathom</a>.
				</p>
			</div>
		</>
	);
};

export default IndexPage;
