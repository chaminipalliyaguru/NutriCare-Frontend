import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '100px': '100px',
      }
    },
    colors: {
      200: "#fff59d",
    },
  },
  plugins: [],
});