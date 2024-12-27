import React from "react";
import { Character } from "../utils/character-util";
import ReactCardFlip from "react-card-flip";
import useCardSelection from "../hooks/use-card-selection";
import { styled } from "@mui/material";

export type BoardItemProps = {
  item: Character;
  setSelectedCard: React.Dispatch<React.SetStateAction<Character[]>>;
  selectedCard: Character[];
  setBoardItems: React.Dispatch<React.SetStateAction<Character[]>>;
};

interface BoardItemContainerProps {
  solved: boolean;
}

const BoardItemContainer = styled("div")<BoardItemContainerProps>(
  ({ solved }) => ({
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
    "& .react-card-flip-container": {
      transition: "all 1.5s ease-in-out",
      transform: !solved ? "scale(1)" : "scale(0)",
      opacity: !solved ? 1 : 0,
    },
  }),
);

const EmptyCard = styled("div")({
  background: "#fff",
  borderRadius: "5px",
  width: "100%",
  height: "100%",
});

const BoardItem: React.FC<BoardItemProps> = ({
  item,
  setSelectedCard,
  setBoardItems,
  selectedCard,
}) => {
  const { flipped, onCardSelect } = useCardSelection({
    setSelectedCard,
    setBoardItems,
    selectedCard,
  });

  return (
    <BoardItemContainer solved={item.solved}>
      <ReactCardFlip
        containerClassName="react-card-flip-container"
        isFlipped={flipped}
      >
        <EmptyCard onClick={() => onCardSelect(item)}></EmptyCard>
        <img src={item.image} alt={item.name} />
      </ReactCardFlip>
    </BoardItemContainer>
  );
};

export default BoardItem;
