import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText]=useState('')
  const [date, setDate]=useState('')
  const [reminder, setReminder]=useState(false)

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!text){
      alert('Please enter a task')
      return
    }
    onAdd({text, date, reminder})

    setText('')
    setDate('')
    setReminder(false)
  }
  return (
    <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add Task"/>
        </div>
        <div className="form-group">
            <input type="text" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Add Date"/>
        </div>
        <div className="form-group">
            <label>Set a reminder</label>
            <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" className="btn btn-large" value="Add Task" />
    </form>
  )
}

export default AddTask
