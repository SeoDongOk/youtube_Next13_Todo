import { ITask } from "@/types/task";
import React from "react";
import Task from "./Task";
interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  console.log("tasks: ", tasks);
  return (
    <div className="overflow-x-auto">
      <div>
        <h3>경제 지표 뷰</h3>
        <table className="table w-full">
          <thead>
            <th>지표명</th>
            <th>예측가</th>
            <th>이전 지표 값</th>
            <th>현재값</th>
          </thead>
        </table>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
