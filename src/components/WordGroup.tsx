import { List } from "antd";
import { ReactElement } from "react";
import { WordQuery } from "../interfaces";
import { WordQueryBlock } from "./WordQueryBlock";

export const WordGroup = (props: { words: WordQuery[] }): ReactElement => {
  const { words } = props;
  return (
    <div>
      <List
        dataSource={words}
        renderItem={(item: WordQuery) => (
          <List.Item>
            <div>
              <WordQueryBlock query={item} />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
