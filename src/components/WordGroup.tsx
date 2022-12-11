import { List } from "antd";
import { ReactElement } from "react";
import { Word } from "../interfaces";
import { WordButton } from "./WordButton";

export const WordGroup = (props: { words: Word[] }): ReactElement => {
  const { words } = props;
  return (
    <div>
      <List
        grid={{
          column: 4,
        }}
        dataSource={words}
        renderItem={(item: Word) => (
          <List.Item>
            <WordButton word={item} />
          </List.Item>
        )}
      />
    </div>
  );
};
