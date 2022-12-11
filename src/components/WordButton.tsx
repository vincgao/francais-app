import { Button } from "antd";
import { ReactElement } from "react";
import { Word } from "../interfaces";

export const WordButton = (props: { word: Word }): ReactElement => {
  const { word } = props;
  return (
    <div>
      <Button
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 15,
          paddingBottom: 15,
          fontWeight: "bold",
          margin: 10,
        }}
        onClick={() => {
          new Audio(word.url).play();
        }}
      >
        {word.word}
      </Button>
    </div>
  );
};
