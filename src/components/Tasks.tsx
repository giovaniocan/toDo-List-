import sytles from './Tasks.module.css'

import clipboardSvg from "../assets/clipboard.svg";
import { Task } from './Task';


interface Task {
    id: string;
    text: string;
    isFinished: boolean;
  }
const tasks = [
    {
        id: 1,
        text: 'não sei se vai dar certo',
        isFinished: false,
    },
    {
        id: 2,
        Text: 'n',
        isFinished: false,
    }
    

];

export function Tasks() {
    return (

        <div className={sytles.Tasks}>
            <div className={sytles.tasksInfo}>
                <div className={sytles.tasksCreated}>
                    <h2>Tarefas criadas </h2>
                    <div className={sytles.quantityCircle}>5</div>
                </div>
                <div className={sytles.completedTasks}>
                    <h2>Concluidas </h2>
                    <div className={sytles.quantityCircle}>2 de 5</div>
                </div>
            </div>


            {tasks.length > 0
                ?
                <div>
                {tasks.map(task => {
                    return  (
                        <Task/>
                    )
                })}

                </div>
                :
                <div className={sytles.empty}>

                    <img src={clipboardSvg} alt="icone de vazio" />
                    <h3>Você ainda não tem tarefas cadastradas</h3>
                    <h4>Crie tarefas e organize seus itens a fazer</h4>

                </div>}

        </div>


    )
}