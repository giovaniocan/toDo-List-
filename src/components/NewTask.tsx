import sytles from './NewTask.module.css'

export function NewTask() {
    return (
        <div>
            <form className={sytles.NewTask}>
                <input type="text"
                    placeholder='Adicione uma nova tarefa' />

              
                <button type="submit">
                    Criar
                    <img src="./src/assets/plus.svg" alt="" />
                </button>
            </form>
        </div>
    )
}