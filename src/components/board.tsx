import React, { useState } from "react";
import { Character, getAllCharacters } from "../utils/character-util";
import { makeStyles } from "@mui/styles";
import BoardItem from "./board-item";
import GameOver from "./game-over";

const useStyles = makeStyles({
  root: {
    width: "35%",
    paddingBottom: "35%",
    position: "relative",
  },
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gap: "5px",
  },
});

const Board = () => {
  const classes = useStyles();
  const [selectedCard, setSelectedCard] = useState<Character[]>([]);
  const [boardItems, setBoardItems] = useState<Character[]>(getAllCharacters);

  const gameOver = boardItems.every((item) => item.solved);

  return (
    <div className={classes.root}>
      {!gameOver ? (
        <div className={classes.container}>
          {boardItems.map((item, index) => (
            <BoardItem
              item={item}
              key={index}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              setBoardItems={setBoardItems}
            />
          ))}
        </div>
      ) : (
        <GameOver />
      )}
    </div>
  );
};

export default Board;
