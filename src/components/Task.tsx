import sytles from './Task.module.css'

import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from 'react';

interface TaksProps {
    content: string
    onDeleteTask: (id: string) => void
    isFinished: boolean
    id: string
    onChangeFinishState :(id: string) => void

}


export function Task({ content, onDeleteTask, isFinished, id , onChangeFinishState}: TaksProps) {
    const [finished, setFinished] = useState(isFinished);

    function handleDeleteTask() {
        onDeleteTask(id) 
    }

    function alterCheckedButton(){  
        onChangeFinishState(id)
        setFinished(!finished)  
        
    }


    return (
        <div className={sytles.listTaks}>
            {finished
                ?
                <button className={sytles.finishButton} onClick={alterCheckedButton}>
                    <CheckCircle size={20} className={sytles.checkCircle} />
                </button>
                :
                <button className={sytles.notFinishButton} onClick={alterCheckedButton}>
                    <Circle size={20} />
                </button>
            }


            <div className={sytles.textAndCrash}>
                <p className={finished? sytles.finishButton: ""}>{content}</p>
                <button onClick={handleDeleteTask}>
                    <Trash size={20} />
                </button>
            </div>
        </div>
    )
}