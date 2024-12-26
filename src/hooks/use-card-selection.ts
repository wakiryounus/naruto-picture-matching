import React, { useState, useEffect, useCallback } from "react";
import { Character } from "../utils/character-util";

export type UseCardSelectionProps = {
  setSelectedCard: React.Dispatch<React.SetStateAction<Character[]>>;
  selectedCard: Character[];
  setBoardItems: React.Dispatch<React.SetStateAction<Character[]>>;
};

const useCardSelection = ({
  selectedCard,
  setSelectedCard,
  setBoardItems,
}: UseCardSelectionProps) => {
  const [flipped, setFlipped] = useState(false);

  const onCardSelect = useCallback(
    (item: Character) => {
      if (selectedCard.length < 2) {
        setSelectedCard((prevSelected) => [...prevSelected, item]);
        setFlipped(true);
      }
    },
    [selectedCard.length, setSelectedCard],
  );

  useEffect(() => {
    if (selectedCard.length === 2) {
      const firstCharacter = selectedCard[0];
      const secondCharacter = selectedCard[1];

      if (secondCharacter.name === firstCharacter.name) {
        setTimeout(() => {
          setBoardItems((prevBoard) =>
            prevBoard.map((b) =>
              b.name === firstCharacter.name ? { ...b, solved: true } : b,
            ),
          );
        }, 1000);
      }

      setTimeout(() => {
        setFlipped(false);
        setSelectedCard([]);
      }, 1500);
    }
  }, [selectedCard, setBoardItems, setSelectedCard]);

  return { flipped, onCardSelect };
};

export default useCardSelection;
