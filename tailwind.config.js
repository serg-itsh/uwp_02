/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/html/utils/withMT");

// module.exports = withMT({
module.exports = {
  content: ['./**/*.html', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px',
     
    },

    // fontSize: {
    //   'sm': '0.8rem',
      // 'base': '1rem',
    //   'xl': '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },

    screens: {
      'sm': '360px',
      //=> @media (min-width: 360px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '820px',
      // => @media (min-width: 820px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      scale: {
        '79': '.79',
        '121': '1.21',
        '126': '1.26',
        '175': '1.75',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66666%',
      },
      // aspectRatio: {
      //   '4/3': '4 / 3',
      // },
      backgroundImage: (theme) => ({
        'ellipse-mobile': "url('/img/gradient/Ellipse-hero-mobile.png')",
        'ellipse-tablet': "url('/img/gradient/Ellipse-hero-tablet.png')",
        'ellipse-desctop': "url('/img/gradient/Ellipse-hero-desktop.png')",
        'gradient-mobile': "url('/img/content/gradient-mobile.png')",
        'ellipse-form-mobile': "url('/img/gradient/Ellipse-form-mobile.png')",
        'ellipse-form-tablet': "url('/img/gradient/Ellipse-form-tablet.png')",
        'ellipse-form-desktop': "url('/img/gradient/Ellipse-form-desktop.png')",
        
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",

      }),
      colors: {
        white: '#ffffff',
        black: '#000000',
        main: '#ff304d',
        light: '#f8f8f8',
        dark: '#171717',
        grey: '#323232',
        lightGrey: '#e0e0e0',
        lightDarkGrey: '#909090',
        lightRed: '#ff445e',
        darkGrey: '#474747',
        activeRed: '#dc2d45',
        gradientMain: '#FF304D',



        // ===colors-02=====
        bgColor: '#171717',
        bgColorGrey: '#f8f8f8',
        bgColorMenuTablet: '#ff304d',
        bgColorMain: '#ff304d',
        bgColorBtnForm: '#535353',
        // bgDarkMode: '#3E3E3E',
        

        // ====== text ======
        mainTextWhite: '#ffffff',
        mainTextLight: '#f8f8f8',
        mainTextLightGrey: '#919191',
        mainTextBlack: '#000000',
        mainTextDark: '#171717',
        mainTextRed: '#ff304d',
        mainTextBlue: '#6355ff',
        mainTextBlueHeader: '#4B73FF',
        mainTextBlueHover: '#86A1FF',

        // // ====== btn ======
        bgButtonMain: '#ff304d',
        bgButtonDarkGrey: '#474747',
        bgButtonGrey: '#f8f8f8',

        // ====== slider btn ======
        sliderButtonGrey: '#919191',
        sliderButtonActive: '#FF304D',

        // ====== border ======
        borderBottom: '#919191',
        borderBtn: '#ff304d',
        underlineRed: '#ff304d',
        
      },

      
    },
  },
  corePlugins : { 
    aspectRatio : false , 
  } , 
  plugins : [ 
    require ( '@tailwindcss/aspect-ratio' ) , 
    require ( 'tw-elements/dist/plugin' ) , 
    
  ] , 
};

