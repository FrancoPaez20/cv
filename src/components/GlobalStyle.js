import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--negro: #000;
		--black: #282828;
		--blanco: #fff;
		--rosado: #d90a6c;
		--morado: #7510f7;
		font-size: 16px;
	}

	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
		scroll-behavior: smooth;
		font-family: 'Poppins', sans-serif;
	}

	::-webkit-scrollbar {
		width: 6px;
		background-color: var(--blanco);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 0px;
		background: #282828;
	}

	.wrap {
		max-width: 1020px;
		width: 100%;
		margin: auto;
		padding: 0 10px;
	}
`;
