import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import necklace1 from "../images/necklace1.jpeg";
import necklace2 from "../images/necklace2.jpeg";
import necklace3 from "../images/necklace3.jpeg";
import { Typography } from "@material-ui/core";

const ProductImage = () => {
  const classes = useStyles();

  const [selectedImage, setSelectedImage] = React.useState(necklace1);
  return (
    <div style={{ paddingTop: "75px" }}>
      {/* main image div */}
      <div style={{ paddingBottom: "20px" }}>
        <img src={selectedImage} className={classes.largeImage} />
      </div>
      <Typography>
        <span style={{ borderBottom: "1px solid #000" }}>CLICK TO ZOOM</span>
      </Typography>
      {/* preview images div */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "20px",
        }}
      >
        <img
          src={necklace1}
          className={classes.smallImages}
          onClick={() => setSelectedImage(necklace1)}
        />
        <img
          src={necklace2}
          className={classes.smallImages}
          onClick={() => setSelectedImage(necklace2)}
        />
        <img
          src={necklace3}
          className={classes.smallImages}
          onClick={() => setSelectedImage(necklace3)}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  smallImages: {
    height: "150px",
    width: "150px",
    border: "1px solid #CCCCCC",
    "&:active": {
      border: "1px solid #000",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  largeImage: {
    height: "350px",
    width: "350px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default ProductImage;
