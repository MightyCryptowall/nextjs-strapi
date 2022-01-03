// const breakpoints = ["360", "768", "1024", "1280", "1600"];

// breakpoints.sm = "360";
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];
// breakpoints.xxl = breakpoints[4];

// const breakpoints = {
//   sm: "360",
//   md: "768",
//   lg: "1024",
//   xl: "1280",
//   xxl: "1600",
// };


// const breakpoints =[ 
//   {sm: "360"},
//   {md: "768"},
//   {lg: "1024"},
//   {xl: "1280"},
//   {xxl: "1600"},
// ];

const breakpoints = [0, 576, 768, 992, 1200, 1440, 1920];



const theme = {
  colors: {
    primary: "#ff0000",
  },

  variant: {
    container: {
      maxWidth: 1200,
      width: "100%",
      mx: "auto",
      px: 30,
    },
  },

  breakpoints,
};


export default theme;
