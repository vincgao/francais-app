import { Button } from "antd";
import { ReactElement } from "react";
import { Word } from "../interfaces";

export const WordButton = (props: { word: Word }): ReactElement => {
  const { word } = props;
  return (
    <div>
      <Button
        onClick={() => {
          console.log(word.word);
          new Audio(word.url).play();
        }}
      >
        {word.word}
      </Button>
    </div>
  );
};
