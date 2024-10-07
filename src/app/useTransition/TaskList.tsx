import { useReducer, useState } from "react";
import tasksReducer from "./useReducer/taskReducer";
import TaskList from "./List";
import AddTask from "./AddTask";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    // function handleAddTask(text: string) {
    //     setTasks([
    //         ...tasks,
    //         {
    //             id: nextId++,
    //             text: text,
    //             done: false,
    //         },
    //     ]);
    // }

    // function handleChangeTask(task: Task) {
    //     setTasks(
    //         tasks.map(t => {
    //             if (t.id === task.id) {
    //                 return task;
    //             } else {
    //                 return t;
    //             }
    //         })
    //     );
    // }

    // function handleDeleteTask(taskId: number) {
    //     setTasks(tasks.filter(t => t.id !== taskId));
    // }

    function handleAddTask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: "deleted",
            id: taskId,
        });
    }

    return (
        <>
            <h1>布拉格的行程安排#2</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: "参观卡夫卡博物馆", done: true },
    { id: 1, text: "看木偶戏", done: false },
    { id: 2, text: "打卡列侬墙", done: false },
];
