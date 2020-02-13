import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: "Noto Sans JP",
      styles: ["400"],
    },
    {
      name: "Raleway",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Noto Sans JP", "sans-serif"],
  bodyFontFamily: ["Noto Sans JP", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography;