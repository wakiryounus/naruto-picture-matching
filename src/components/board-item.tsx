import React from "react";
import { Character } from "../utils/character-util";
import { makeStyles } from "@mui/styles";
import ReactCardFlip from "react-card-flip";
import clsx from "clsx";
import useCardSelection from "../hooks/use-card-selection";

export type BoardItemProps = {
  item: Character;
  setSelectedCard: React.Dispatch<React.SetStateAction<Character[]>>;
  selectedCard: Character[];
  setBoardItems: React.Dispatch<React.SetStateAction<Character[]>>;
};

const useStyles = makeStyles({
  boardItem: {
    height: "100%",
    cursor: "pointer",
    "& img": {
      width: "95%",
      height: "95%",
      objectFit: "cover",
      borderRadius: "5px",
    },
    "& .react-card-flip": {
      height: "100%",
    },
    "& .react-card-back": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  emptyCard: {
    background: "#fff",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
  },
  animateOnSolve: {
    transition: "all 1.5s ease-in-out",
    transform: "scale(0)",
    opacity: 0,
  },
});

const BoardItem: React.FC<BoardItemProps> = ({
  item,
  setSelectedCard,
  setBoardItems,
  selectedCard,
}) => {
  const classes = useStyles();
  const { flipped, onCardSelect } = useCardSelection({
    setSelectedCard,
    setBoardItems,
    selectedCard,
  });

  return (
    <div className={classes.boardItem}>
      <ReactCardFlip
        containerClassName={clsx({ [classes.animateOnSolve]: item.solved })}
        isFlipped={flipped}
      >
        <div
          className={classes.emptyCard}
          onClick={() => onCardSelect(item)}
        ></div>
        <img src={item.image} alt={item.name} />
      </ReactCardFlip>
    </div>
  );
};

export default BoardItem;
