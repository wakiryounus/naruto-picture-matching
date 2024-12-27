import React, { useState } from "react";
import { Character, getAllCharacters } from "../utils/character-util";
import BoardItem from "./board-item";
import GameOver from "./game-over";
import { styled } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  width: "35%",
  paddingBottom: "35%",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "55%",
    paddingBottom: "55%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
    paddingBottom: "85%",
  },
}));

const Container = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(6, 1fr)",
  gap: "5px",
  [theme.breakpoints.down("sm")]: {
    gap: "3px",
  },
}));

const Board = () => {
  const [selectedCard, setSelectedCard] = useState<Character[]>([]);
  const [boardItems, setBoardItems] = useState<Character[]>(getAllCharacters);

  const gameOver = boardItems.every((item) => item.solved);

  return (
    <Root>
      {!gameOver ? (
        <Container>
          {boardItems.map((item, index) => (
            <BoardItem
              item={item}
              key={index}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              setBoardItems={setBoardItems}
            />
          ))}
        </Container>
      ) : (
        <GameOver />
      )}
    </Root>
  );
};

export default Board;
