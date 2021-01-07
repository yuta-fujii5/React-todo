import React from "react";

export const IncompleateTodos = (props) => {
  const { todos, onClickCompleate, onClickDelete } = props;
  return (
    <div className="incompleate-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleate(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
