import "./App.css";
import PublicNavbar from "./Components/Navbar";
import { Grid } from "@material-ui/core";
import ImageLayout from "./Components/ProductImage";
import DetailsLayout from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ImageLayout />
        </Grid>
        <Grid item xs={6}>
          <DetailsLayout />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
