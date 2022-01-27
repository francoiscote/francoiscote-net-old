import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      :root {
        /* Colors */
        --color-black: #212121;
        --color-primary: #30475e;
        --color-secondary: #f05454;
        --color-white: #f5f5f5;

        /* Grays from TailwindCSS: https://tailwindcss.com/docs/customizing-colors */
        --color-gray-50: #f9fafb;
        --color-gray-100: #f3f4f6;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #6b7280;
        --color-gray-600: #4b5563;
        --color-gray-700: #374151;
        --color-gray-800: #1f2937;
        --color-gray-900: #111827;

        /* Spacing */
        /* TODO: use less options */
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
        --font-body: "DM Sans", sans-serif;
        --font-serif: ui-serif, serif;
        --font-sans: "DM Sans", sans-serif;

        /* Leading */
        --leading-tighter: 110%;
        --leading-tight: 120%;
        --leading-snug: 130%;
        --leading-base: 140%;
        --leading-loose: 170%;
        --leading-looser: 200%;

        /* Border Radius */
        --border-radius-sm: 0.2rem;
        --border-radius-base: 0.4rem;
        --border-radius-lg: 0.6rem;

        /* Box Shadows */
        --box-shadow-base: 0px 10px 15px -3px rgba(33, 37, 41, 0.1);

        /* Fluid Spacing */
        /* TODO: Fluid Spacing */

        /* Fluid Type Scale */
        /* @link https://utopia.fyi/type/calculator?c=320,20,1.25,1400,22,1.333,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

        --fluid-min-width: 320;
        --fluid-max-width: 1400;

        --fluid-screen: 100vw;
        --fluid-bp: calc(
          (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
            (var(--fluid-max-width) - var(--fluid-min-width))
        );
      }

      @media screen and (min-width: 1400px) {
        :root {
          --fluid-screen: calc(var(--fluid-max-width) * 1px);
        }
      }

      :root {
        --f--2-min: 12.8;
        --f--2-max: 12.38;
        --font-size-xs: calc(
          ((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
            var(--fluid-bp)
        );

        --f--1-min: 16;
        --f--1-max: 16.5;
        --font-size-sm: calc(
          ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
            var(--fluid-bp)
        );

        --f-0-min: 20;
        --f-0-max: 22;
        --font-size-base: calc(
          ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
            var(--fluid-bp)
        );

        --f-1-min: 25;
        --f-1-max: 29.33;
        --font-size-md: calc(
          ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
            var(--fluid-bp)
        );

        --f-2-min: 31.25;
        --f-2-max: 39.09;
        --font-size-lg: calc(
          ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
            var(--fluid-bp)
        );

        --f-3-min: 39.06;
        --f-3-max: 52.11;
        --font-size-xl: calc(
          ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
            var(--fluid-bp)
        );

        --f-4-min: 48.83;
        --f-4-max: 69.46;
        --font-size-2xl: calc(
          ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
            var(--fluid-bp)
        );

        --f-5-min: 61.04;
        --f-5-max: 92.59;
        --font-size-3xl: calc(
          ((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) *
            var(--fluid-bp)
        );

        --f-6-min: 76.29;
        --f-6-max: 123.43;
        --font-size-4xl: calc(
          ((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) *
            var(--fluid-bp)
        );
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
      ul[role="list"],
      ol[role="list"] {
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

      html,
      body,
      #root {
        height: 100%;
      }
      iframe {
        max-width: 100%;
      }

      /* Base styles */
      body {
        background-color: var(--color-white);
        font-family: var(--font-body);
        color: var(--color-black);
      }

      h1,
      h2 {
        color: var(--color-primary);
      }

      h3,
      h4,
      h5,
      h6 {
        font-family: var(--font-sans);
      }

      p,
      ul,
      ol {
        font-family: var(--font-body);
        font-size: var(--font-size-base);
      }
      a {
        color: var(--color-secondary);
        &:hover {
          text-decoration: none;
        }
      }
    `}
  />
);
