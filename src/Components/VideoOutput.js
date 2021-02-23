import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const VideoOutput = ({ video, image }) => {
  const videoRef = React.useRef();
  const classes = useStyles();

  React.useEffect(() => {
    const videoObj = videoRef.current;
    videoObj.srcObject = video;
    videoObj.play();
    console.log(videoObj);
  }, []);
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <img src={image} className={classes.image} />
      <video ref={videoRef}></video>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    width: "300px",
    height: "300px",
    bottom: "10px",
    right: "25%",
    left: "50%",
    marginLeft: "-150px",
  },
}));

export default VideoOutput;
