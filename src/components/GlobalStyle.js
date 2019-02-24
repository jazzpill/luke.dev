import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

const COLOR = `hsla(190, 40%, 23%, 1)`;
const COLOR_HOVER = `hsla(190, 40%, 10%, 1)`;

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
		color: ${COLOR};
	}

	html, body, #___gatsby, #___gatsby > div {
		height: 100%;
	}

	a, a:link, a:active, a:visited {
		color: ${COLOR};
		text-decoration: none;
		position: relative;

		p &:after {
			content: "";
			position: absolute;
			bottom: -2px;
			left: 0;
			border-bottom: 2px solid ${COLOR};
			width: 100%;
		}
	}


p { line-height: 1.7 }

	a:hover {
		color: ${COLOR_HOVER};
	}

	svg {
		fill: ${COLOR};
	}
`;
