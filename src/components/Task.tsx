import sytles from './Task.module.css'

import { CheckCircle, Circle, Trash } from "phosphor-react";

export function Task (){
    return(
        <div className={sytles.listTaks}>
                    <button className={sytles.notFinishButton}>
                        <Circle size={20} />
                        
                    </button>
                    <div className={sytles.textAndCrash}>
                        <p>texto da tarefa a ser feito e blablabla</p>
                        <button>
                            <Trash size={20} />
                        </button>
                    </div>
                </div>
    )
}