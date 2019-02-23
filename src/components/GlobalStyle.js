import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export const GlobalStyle = createGlobalStyle`
	${normalize};

	/* apply a natural box layout model to all elements, but allowing components to change */
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
			sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
		font-size: 0.625rem;
	}
`;
