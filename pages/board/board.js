import React,{useState} from 'react'
import style from "board/style/board-form.module.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addTask} from '../../redux/reducers/board.reducer'
export default function Board() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
  return (
     <div className="todoapp stack-large">
      <h1>게시글등록</h1>
      <form onSubmit={e => {
        e.preventDefault()
        alert('value ?' +value)
        if(value) dispatch(addTask({task: value}))
        axios.post('http://localhost:5000/api/board/write', value)
        .then(res => {
            alert(JSON.stringify(res.data))
        }) 
        .catch (err => alert(err))
    }}>
      <input
          type="text"
          id="title"
          className="input input__lg"
          name="title"
          autoComplete="off"
          onChange={e => {
            e.preventDefault()
            setValue(e.target.value)}}
        />
        <button type="submit" style={{marginLeft:"20px"}} className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      </div>
  );
}