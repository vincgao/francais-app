import { Button } from "antd";
import { ReactElement } from "react";
import { Word } from "../interfaces";

export const WordButton = (props: { word: Word }): ReactElement => {
  const { word } = props;
  console.log(word.url);

  let audio = new Audio(word.url);

  return (
    <div>
      {/* <ReactAudioPlayer src={word.url} autoPlay controls /> */}
      <Button
        onClick={() => {
          console.log("play");
          audio.play();
        }}
      >
        {word.word}
      </Button>
    </div>
  );
};
