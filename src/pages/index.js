import React from 'react';
import SEO from '../components/seo';
import { GlobalStyle } from '../components/GlobalStyle';

const IndexPage = () => (
	<>
		<GlobalStyle />
		<SEO title="Hi 👋" keywords={[]} />
		<div class="content">
			<h1>Hello.</h1>

			<p>
				My name is Luke. I'm a Lead Engineer at{' '}
				<a href="http://fathomlondon.com">Fathom</a>.
			</p>
		</div>
	</>
);

export default IndexPage;
