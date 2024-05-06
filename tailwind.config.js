const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "neutral-900": "#101010",
        "neutral-800": "#1a1a1a",
        "neutral-700": "#404040",
        "neutral-500": "#808080",
        "neutral-300": "#aaa",
        "neutral-100": "#eaeaea",
        "neutral-white": "#fff",
        "gradient-primary-from":"#903d00",
        "gradient-primary-to":"#ff7a1a",
        primary: "#f06900",
      },

      fontSize:{
        //Heading
        "heading-h1":["3rem", {
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
        "heading-h2":["2rem", {
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
        "heading-h3":["1.5rem", {
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
        "heading-h4":["1rem", {
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
        "heading-h5":["0.875rem", {
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
        //Body
        "body-16px-regular":["1rem",{
          lineHeight: '150%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "body-16px-bold":["1rem",{
          lineHeight: '150%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],

        "body-14px-regular":["0.875rem",{
          lineHeight: '150%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "body-14px-bold":["0.875rem",{
          lineHeight: '150%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],

        "body-12px-regular":["0.75rem",{
          lineHeight: '150%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "body-12px-bold":["0.75rem",{
          lineHeight: '150%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
        // Labels
        "label-24px-regular":["1.5rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "label-24px-bold":["1.5rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],

        "label-16px-regular":["1rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "label-16px-bold":["1rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],

        "label-14px-regular":["0.875rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "label-14px-bold":["0.875rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],

        "label-12px-regular":["0.75rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        "label-12px-bold":["0.75rem",{
          lineHeight: '125%',
          letterSpacing: '0px',
          fontWeight: 'bold',
        }],
      },

      transitionProperty: {
        'max-height': 'max-height',
        "height": 'height',
      },

      lineClamp: {
        "none-2": "initial",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}