import sytles from './Tasks.module.css'

import clipboardSvg from "../assets/clipboard.svg";
import { Task } from './Task';
import { useState } from 'react';


interface Task{
    id: string,
    text:  string,
    isFinished: boolean
}

export function Tasks() {

    const [tasks, setTasks] = useState([
      'programar 3 horas por dia',
    ]);
 
    const [newTask, setNewTask] = useState('')

    function handleCreatNewTask(){

        event?.preventDefault()

        const taskcompleted={
            id: new Date().getTime().toString(),
            text: newTask,
            isFinished: false,
        }

        setTasks([...tasks, newTask])

        setNewTask('');
      
    }

    function handleNewTaskchange(){
        setNewTask(event.target.value);

    }

    function deleteTask(taskToDelete:string){
           const tasksWithoutDeleteOnde = tasks.filter(task => {
             return task !== taskToDelete
        })

        setTasks(tasksWithoutDeleteOnde)
    }

    return (
        <>
            <div>
                <form className={sytles.NewTask} onSubmit={handleCreatNewTask}>
                    <input type="text"
                        placeholder='Adicione uma nova tarefa' 
                        onChange={handleNewTaskchange}
                        value={newTask}
                        />


                    <button type="submit">
                        Criar
                        <img src="./src/assets/plus.svg" alt="" />
                    </button>
                </form>

            </div>


            <div className={sytles.Tasks}>
                <div className={sytles.tasksInfo}>
                    <div className={sytles.tasksCreated}>
                        <h2>Tarefas criadas </h2>
                        <div className={sytles.quantityCircle}>{tasks.length}</div>
                    </div>
                    <div className={sytles.completedTasks}>
                        <h2>Concluidas </h2>
                        <div className={sytles.quantityCircle}>0 de {tasks.length}</div>
                    </div>
                </div>


                {tasks.length > 0
                    ?
                    <div>
                        {tasks.map(task => {
                            return (
                                <Task 
                                content={task}
                                onDeleteTask={deleteTask}
                                />
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

        </>
    )
}