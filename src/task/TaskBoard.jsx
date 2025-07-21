import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModel from "./AddTaskModel";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description: "I want to learn react",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModel, setShowAddModel] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // function handleAddTask(task){
  //     console.log("adding a task", task);
  // }

  function handleAddTask(newTask, isAdd) {
    if(isAdd){
        setTasks([...tasks, newTask]);
    }else{
        setTasks(
            tasks.map((task) => {
                if(task.id === newTask.id){
                    return newTask;
                }
                return task;
            })
        )
    }
    
    setShowAddModel(false); // close modal after adding
  }


  function handleEditTask(task){
    setTaskToUpdate(task);
    setShowAddModel(true);
  }



  return (
    <section className="mb-20" id="tasks">
      {showAddModel && <AddTaskModel onSave={handleAddTask} taskToUpdate={taskToUpdate} />}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModel(true)} />

          <TaskList tasks={tasks} onEdit = {handleEditTask}/>
        </div>
      </div>
    </section>
  );
}
