import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks]= useState([{
    id: 1,
    text: "Hit the gym",
    date: "Jan 14 8am",
    reminder: true,
},
{
    id: 2,
    text: "Take post workout",
    date: "Jan 14 10am",
    reminder: true,
},
{
    id: 3,
    text: "Eat the breakfast",
    date: "Jan 14 10:30am",
    reminder: true,
},
{
    id: 4,
    text: "Start writing code",
    date: "Jan 14 11am",
    reminder: true,
},       
  ])
  //Add task
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000) + 1
    const newTask={id, ...task}

    setTasks([...tasks, newTask])
  }
  //delete task
  const deleteTask=(id)=>{
    setTasks(tasks.filter(task=> task.id!==id))
  }
  return (
    <div className="component">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : (<div className="task"><h3>No Task to Display</h3></div>)}
    </div>
  )
}

export default App;
