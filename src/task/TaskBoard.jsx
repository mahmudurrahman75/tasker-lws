import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModel from "./AddTaskModel";

export default function TaskBoard(){

    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': "Learn React Native",
        'description': "I want to learn react",
        'tags': ["web", "react", "js"],
        'priority': "High",
        'isFavorite': true,
    }

    const [tasks, setTasks] = useState([defaultTask]);

    const [showAddModel, setShowAddModel] = useState(false);

    function handleAddTask(task){
        console.log("adding a task", task);
    }

    return(
        <section className="mb-20" id="tasks">

            {showAddModel && <AddTaskModel onSave = {handleAddTask} />}
		
		<div className="container">
			
		<div className="p-2 flex justify-end">
			<SearchTask/>
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				
                <TaskAction onAddClick={() => setShowAddModel(true)}/>

				<TaskList tasks = {tasks} />

			</div>
		</div>
	</section>

    );
}