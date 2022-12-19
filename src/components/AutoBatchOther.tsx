import { FC, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const AutoBatchOther: FC = () => {
  console.log("AutoBatchOther");
  const [todos, setTodo] = useState<Todo[] | null>(null);
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
  const [state3, setState3] = useState<string>("");

  const onClickApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setIsFinishApi(true);
        setState3("updated");
      });
  };
  return (
    <div>
      <p>Automatic Batching確認用(その他)</p>
      <button onClick={onClickApi}>API</button>
      <p>isFinishApi: {isFinishApi ? "true" : "false"}</p>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
