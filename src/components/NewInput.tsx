import React, { useRef } from "react";

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleSubmit:(e:React.SyntheticEvent) => void;
}

const NewInput:React.FC<Props> = ({todo,setTodo,handleSubmit}) => {

    const textBlur = useRef<HTMLInputElement>(null);

    return (<>
        <form className="myInput" onSubmit={(e) => { 
            
            handleSubmit(e);
            textBlur.current?.blur();
            }}>
            <input ref={textBlur} type="text" className="addtodo" id="addtodo" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="myBtn">GO!</button>
        </form>
    </>)   
}
export default NewInput;