import sytles from './Task.module.css'

import { CheckCircle, Circle, Trash } from "phosphor-react";

interface TaksProps{
    content: string
    onDeleteTask: (comment:string) => void

}


export function Task({content, onDeleteTask}: TaksProps){

    function handleDeleteTask(){
        onDeleteTask(content) /*mudar depois para poder passar o id*/ 
    }
    

    return(
        <div className={sytles.listTaks}>
                    <button className={sytles.notFinishButton}>
                        <Circle size={20} />  
                    </button>
                    <div className={sytles.textAndCrash}>
                        <p>{content}</p>    
                        <button onClick={handleDeleteTask}>
                            <Trash size={20} />
                        </button>
                    </div>
                </div>
    )
}