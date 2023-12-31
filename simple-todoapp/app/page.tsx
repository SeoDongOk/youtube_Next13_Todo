import { getAllTodos } from "@/api";
import AddTeask from "./components/AddTeask";
import TodoList from "./components/TodoList";
import CoinDesk from "./components/CoinDesk";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div>
        <CoinDesk />
      </div>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTeask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
