import sytles from './Tasks.module.css'
import { ChangeEvent, InvalidEvent, useState } from 'react'
import clipboardSvg from "../assets/clipboard.svg";
import { Task } from './Task';



interface Task {
    id: string,
    text: string,
    isFinished: boolean
}

export function Tasks() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const [newTask, setNewTask] = useState('')

    const [numberOfTasksFinished, setNumberOfTaksFinished] = useState(0)

    function handleCreatNewTask() {

        event?.preventDefault()

        const taskcomplete = {
            id: new Date().getTime().toString(),
            text: newTask,
            isFinished: false,
        }

        setTasks([...tasks, taskcomplete])

        setNewTask('');

    }

    function handleNewTaskchange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value);

    }

    function deleteTask(idToDelete: string) {
        const tasksWithoutDeleteOnde = tasks.filter(task => {
            return task.id !== idToDelete
        })

        setTasks(tasksWithoutDeleteOnde)
        changeNumberOfFinishedTasks(tasksWithoutDeleteOnde)
    }

    function ChangeFinishState(id: string) {
        const taskId = tasks.findIndex((task) => {
            return task.id === id
        })

        const allTasks = [...tasks]

        allTasks[taskId].isFinished = !allTasks[taskId].isFinished


        setTasks(allTasks)

        changeNumberOfFinishedTasks(tasks)


    }

    function changeNumberOfFinishedTasks(mostRecentTasks: Task[]) {
        const taskFinished = mostRecentTasks.filter(task =>
            task.isFinished === true
        )

        setNumberOfTaksFinished(taskFinished.length)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse negocio é obrigatorio irmão')
    }


    return (
        <>
            <div>
                <form className={sytles.NewTask} onSubmit={handleCreatNewTask}>
                    <input type="text"
                        placeholder='Adicione uma nova tarefa'
                        onChange={handleNewTaskchange}
                        value={newTask}
                        required
                        onInvalid={handleNewTaskInvalid}
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
                        <div className={sytles.quantityCircle}>{numberOfTasksFinished} de {tasks.length}</div>
                    </div>
                </div>


                {tasks.length > 0
                    ?
                    <div>
                        {tasks.map(task => {
                            return (
                                <Task
                                    content={task.text}
                                    isFinished={task.isFinished}
                                    key={task.id}
                                    id={task.id}
                                    onDeleteTask={deleteTask}
                                    onChangeFinishState={ChangeFinishState}
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