import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import gameOver from "../assets/gameover.png";
import clsx from "clsx";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "0",
    transition: "all 1s ease-in-out",
    opacity: 0,
  },
  imageAnimate: {
    transition: "all 1s ease-in-out",
    width: "50%",
    opacity: 1,
  },
});

const GameOver = () => {
  const classes = useStyles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.container}>
      <img
        className={clsx({
          [classes.image]: true,
          [classes.imageAnimate]: animate,
        })}
        src={gameOver}
        alt="Game Over"
      />
    </div>
  );
};

export default GameOver;
