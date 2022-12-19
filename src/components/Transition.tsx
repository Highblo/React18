import { FC, useState } from "react";
import { Avatar } from "./Avatar";

type Task = {
  id: number;
  title: string;
  assignee: string;
};

const member = {
  a: "A",
  b: "B",
  c: "C",
};

const generateDummyTasks = (): Task[] => {
  return Array(10000)
    .fill("")
    .map((_, index) => {
      const addIndex = index + 1;
      return {
        id: addIndex,
        title: `タスク${addIndex}`,
        assignee:
          addIndex % 3 === 0
            ? member.a
            : addIndex % 2 === 0
            ? member.b
            : member.c,
      };
    });
};

const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
  if (assignee === "") return tasks;
  return tasks.filter((task) => task.assignee === assignee);
};

export const Transition: FC = () => {
  const [selected, setSelected] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const onClickAssignee = (assignee: string) => {
    setSelected(assignee);
    setTaskList(filteringAssignee(assignee));
  };
  return (
    <div>
      <p style={{ margin: "16px 0" }}>transition</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar isSelected={selected === member.a} onClick={onClickAssignee}>
          {member.a}
        </Avatar>
        <Avatar isSelected={selected === member.b} onClick={onClickAssignee}>
          {member.b}
        </Avatar>
        <Avatar isSelected={selected === member.c} onClick={onClickAssignee}>
          {member.c}
        </Avatar>
      </div>
      <br />
      <button onClick={() => onClickAssignee("")}>リセット</button>
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: "300px",
            margin: "16px auto",
            backgroundColor: "lavender",
          }}
        >
          <p>タイトル：{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </div>
  );
};
