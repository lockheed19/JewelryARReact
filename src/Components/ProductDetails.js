import React from "react";
import ReactDOM from "react-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Card, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Video from "./VideoOutput";
import necklace1 from "../images/necklace1.jpeg";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const ProductDetails = () => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [videoStream, setVideoStream] = React.useState(null);

  const minusClicked = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    } else {
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  //start video
  const startVideo = async () => {
    setOpen(true);
    const video = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    setVideoStream(video);
  };

  //stop video
  const stopVideo = () => {
    setOpen(false);
    videoStream.getTracks().forEach((track) => track.stop());
    setVideoStream(null);
  };

  return (
    <div>
      <div>
        <Dialog open={open} onClose={handleClose} className={classes.ARDialog}>
          <DialogTitle className={classes.dialogHeader}>
            AR Try On
            <span>
              <FaTimes onClick={stopVideo} className={classes.cutDialog} />
            </span>
          </DialogTitle>
          <DialogContent>
            <div className={classes.videoContainer}>
              <Video video={videoStream} image={necklace1} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div style={{ paddingTop: "70px", textAlign: "left" }}>
        <div>
          <p>(Incl. of all taxes)</p>
          <br />
          <p>*Weight and Price may vary subject to the stock available</p>
          <br />
          <button className={classes.textButton}>TRY ON AVAILABLE</button>
          <br />
          <p>
            <strong>
              Mesh Pattern Neckwear and Earrings Set in 22 Karat Yellow Gold
            </strong>
          </p>
          <p style={{ color: "#FFD700" }}>
            <u style={{ color: "#FFD700" }}>Product Details</u>
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "100px" }}>
              <p>Gross Weight</p>
              <Card className={classes.weightCard}>
                <span className={classes.boxTexts}>37.345g</span>
              </Card>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>Net Qty</p>
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaMinus
                    onClick={() => minusClicked()}
                    className={classes.minusIcon}
                  />

                  <Card className={classes.quantityCard}>
                    <span className={classes.boxTexts}>{quantity}N</span>
                  </Card>
                  <FaPlus
                    onClick={() => setQuantity(quantity + 1)}
                    className={classes.plusIcon}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <Grid container spacing={0}>
              <Grid item xs>
                <button className={classes.blackButton} onClick={startVideo}>
                  TRY ON
                </button>
              </Grid>
              <Grid item xs>
                <button className={classes.blackButton}>ADD TO CART</button>
              </Grid>
              <Grid item xs>
                <button className={classes.whiteButton}>
                  BOOK AN APPOINTMENT
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  textButton: {
    color: "#fff",
    backgroundColor: "#FFD700",
    height: "30px",
    width: "200px",
    border: "none",
  },
  weightCard: {
    width: "300px",
    height: "50px",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "0px",
    "& span": {
      verticalAlign: "middle",
    },
  },
  quantityCard: {
    width: "50px",
    height: "50px",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "0px",
  },
  blackButton: {
    height: "50px",
    width: "200px",
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
  whiteButton: {
    height: "50px",
    width: "200px",
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      cursor: "pointer",
    },
  },
  ARDialog: {},
  videoContainer: {
    marginTop: "10px",
    height: "500px",
    width: "500px",
  },
  minusIcon: {
    padding: "20px 8px 0px 0px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  plusIcon: {
    padding: "20px 0px 0px 8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  boxTexts: {
    textAlign: "center",
    paddingTop: "20px",
  },
  ARDialog: {
    textAlign: "center",
  },
  dialogHeader: {
    backgroundColor: "#000",
    color: "#fff",
  },
  cutDialog: {
    float: "right",
    color: "red",
    paddingTop: "5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default ProductDetails;
