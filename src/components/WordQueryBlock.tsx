import { List } from "antd";
import { ReactElement } from "react";
import { Word, WordQuery } from "../interfaces";
import { WordButton } from "./WordButton";

export const WordQueryBlock = (props: { query: WordQuery }): ReactElement => {
  const { query } = props;

  return (
    <div>
      <List
        style={{
          width: "100vw",
        }}
        grid={{
          column: 6,
        }}
        dataSource={query.result}
        renderItem={(item: Word) => (
          <List.Item>
            <WordButton word={item} />
          </List.Item>
        )}
      />
    </div>
  );
};
