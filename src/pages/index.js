import React from 'react';
// eslint-disable-next-line
import styled from 'styled-components/macro';
import { useSpring, useTransition, animated } from 'react-spring';
import SEO from '../components/seo';
import { GlobalStyle } from '../components/GlobalStyle';
import GitHubIcon from '../images/github.svg';
import TwitterIcon from '../images/twitter.svg';
import LastFMIcon from '../images/lastfm.svg';

const SOCIAL = [
	{
		icon: GitHubIcon,
		label: 'github.com/lukemartin',
		url: 'https://github.com/lukemartin',
	},
	{
		icon: TwitterIcon,
		label: 'twitter.com/luke_is',
		url: 'https://twitter.com/luke_is',
	},
	{
		icon: LastFMIcon,
		label: 'last.fm/user/lukus',
		url: 'https://www.last.fm/user/lukus',
	},
];

const IndexPage = () => {
	const handProps = useSpring({
		r: 0,
		from: { r: 90 },
		config: {
			mass: 1,
			tension: 330,
			velocity: 2,
			friction: 11,
		},
	});
	const list = useTransition(SOCIAL, item => item.label, {
		unique: true,
		enter: {
			opacity: 1,
			transform: 'translateX(0)',
		},
		from: {
			opacity: 0,
			transform: 'translateX(-10px)',
		},
		trail: 200 / 3,
	});

	return (
		<>
			<GlobalStyle />
			<SEO title="Hi 👋" keywords={[]} />
			<div
				css={{
					padding: 40,
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
				}}
			>
				<h1 css={{ fontSize: 36 }}>
					Hi {/*eslint-disable-next-line*/}
					<animated.span
						role="img"
						aria-label="waving emoji"
						style={{
							display: 'inline-block',
							transformOrigin: 'center',
							transform: handProps.r.interpolate(x => `rotate(${x}deg)`),
						}}
					>
						👋
					</animated.span>
				</h1>

				<p
					css={{
						fontSize: 24,
						flex: '1 1 auto',
					}}
				>
					My name is Luke. I'm a Lead UI Developer.
				</p>

				<ul
					css={{
						listStyleType: 'none',
						margin: '30px 0 0',
						padding: 0,
						flex: 0,
					}}
				>
					{list.map(({ item: { icon: Icon, label, url }, props, key }) => (
						<animated.li
							key={key}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								marginBottom: 10,
								...props,
							}}
						>
							<Icon />
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								css={{ marginLeft: 10, fontSize: 14 }}
							>
								{label}
							</a>
						</animated.li>
					))}
				</ul>
			</div>
		</>
	);
};

export default IndexPage;
