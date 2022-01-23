import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --color-black: #212529;
    --color-white: #f8f9fa;
    --color-green: #99c1b9;

    /* Spacing */
    --space-4: 0.25rem;
		--space-8: 0.5rem;
		--space-12: 0.75rem;
		--space-16: 1rem;
		--space-24: 1.5rem;
		--space-32: 2rem;
		--space-48: 3rem;
		--space-64: 4rem;
		--space-80: 5rem;
		--space-96: 6rem;
		--space-128: 8rem; 
		--space-160: 10rem;
    
    /* Fonts */
    --font-body: system-ui, sans-serif;
    --font-serif: ui-serif, serif;
    --font-sans: sans-serif;
    --font-size-base: 16px;
    
    /* Leading */
    
    /* Border Radius */
    --border-radius-sm: 0.2rem;
		--border-radius-base: 0.4rem;
		--border-radius-lg: 0.6rem;
      
    /* Box Shadows */
		--box-shadow-base: 
		0px 10px 15px -3px rgba(33,37,41,0.1);
  }
 
  /* CSS Reset */
  /* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	figure,
	blockquote,
	dl,
	dd {
		margin: 0;
	}
	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	ul[role='list'],
	ol[role='list'] {
		list-style: none;
	}
	/* Set core root defaults */
	html:focus-within {
		scroll-behavior: smooth;
	}
	/* Set core body defaults */
	body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}
	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}
	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
	}
	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;	
	}
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
			scroll-behavior: auto;
		}
		
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
  }
  
  html, body, #root {
			height: 100%;
	}
	iframe {
		max-width:100%;
	}
  
  /* Base styles */
  body {
    background-color: var(--color-white);
    font-family: var(--font-body);
    color: var(---color-black);
  }

  h1, h2 {
		/* font-family: var(--font-serif); */
	}
	h3, h4, h5, h6 {
		/* font-family: var(--font-sans); */
	}
	p, ul, ol {
		font-family: var(--font-body);
		font-size: var(--font-size-base);
	}
	a {
		text-decoration: none;
		color: var(--color-green);
	}

`;
export default GlobalStyle;
