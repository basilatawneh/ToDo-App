import { useState } from "react";

const ToDoForm = (props) => {
  const intialValues = {
    title: '',
    description: '',
    date: ''
  }
  const [inputs, setInputs] = useState(intialValues);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputs((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.addHandler(inputs)
    // props.setItems((prev) => {
    //   return [...prev, inputs];
    // })
    setInputs(intialValues)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>title</label>
          <input type='text' value={inputs.title} name='title' onChange={onChangeHandler} />
        </div>
        <div>
          <label>description</label>
          <input type='text' value={inputs.description} name='description' onChange={onChangeHandler}/>
        </div>
        <div>
          <label>date</label>
          <input type='date' value={inputs.date} name='date' onChange={onChangeHandler}/>
        </div>
        <button>Add to the todoList</button>
      </form>
    </div>
  )
}

export default ToDoForm;