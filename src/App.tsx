import Board from "./components/board";
import { makeStyles } from "@mui/styles";
import leaf from "./assets/leaf.jpg";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leaf: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
    opacity: "0.4",
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.leaf} src={leaf} alt="Leaf" />
      <Board />
    </div>
  );
};
