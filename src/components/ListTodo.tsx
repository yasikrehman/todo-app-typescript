import { TodoModal } from "./TodoModal"
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import { useEffect, useRef, useState } from "react";

interface Props {
    todoList:TodoModal[],
    setTodoList:React.Dispatch<React.SetStateAction<TodoModal[]>>
}

export const ListTodo = ({todoList,setTodoList}:Props) => {

    const [edit,setEdit] = useState<number>(0);

    const [text,setText] = useState<string>("");
    const textFocus = useRef<HTMLInputElement>(null);
 
    console.log("test");

    useEffect(() => {
        textFocus.current?.focus();
    },[edit]);

        
    const removeTodo = (id:number) => {       
        let removed = todoList.filter((item) => item.id!=id );
        setTodoList(removed);
    }

    
    const updateText = (id:number,name:string) => {
        
        setEdit(id);
        setText(name);
    }

    const updateDone = (id:number) => {
        
        let done = todoList.map((item) => item.id==id ? {...item,isCompleted:!item.isCompleted} : item );
        setTodoList(done);
    }

    const Confirm = async(id:number) => {
        
        await setTodoList(todoList.map((item) => item.id==id ? {...item,name:text} : item ));
        await setEdit(0);        
    }

    return (
            <div className="todoList">
            {
               todoList.map((item) => {
                   return (
                    <>
                        <div key={item.id} className="singleTodo">    
                            <div className="todostyle">
                                <div className={item.isCompleted==true ? "text-strike" : "textdisplay" } >
                                    {
                                        edit==item.id ? <input ref={textFocus} type="text" value={text} onChange={(e) => setText(e.target.value) }  /> : <span> {item.name} </span>
                                    }
                                    
                                </div>
                                <div className="buttondisp">
                                    <span onClick={()=> updateText(item.id,item.name)}>
                                         {edit != item.id ? <AiFillEdit /> : <span onClick={() => Confirm(item.id)}> confirm </span> }  </span>
                                    <span onClick={()=>updateDone(item.id)}><MdDone /> </span>
                                    <span onClick={() => removeTodo(item.id)}><AiFillDelete /></span>
                                </div>
                            </div>
                        </div>
                    </>
                )
               })
            }
            </div>

    )

}