import React from "react";

export const CompleateTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="compleate-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
