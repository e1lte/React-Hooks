import React from "react";

interface Task {
    id: number;
    text: string;
    done: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onChangeTask: (task: Task) => void;
    onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onChangeTask,
    onDeleteTask,
}) => {
    return (
        <ul>
            {tasks.map(task => (
                <li
                    key={task.id}
                    style={{ listStyleType: "none", padding: "10px 0" }}
                >
                    <div>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => {
                                onChangeTask({
                                    ...task,
                                    done: !task.done,
                                });
                            }}
                        />
                        <span style={{ marginLeft: "10px" }}>{task.text}</span>
                        <button
                            onClick={() => onDeleteTask(task.id)}
                            style={{ marginLeft: "auto", marginRight: "10px" }}
                        >
                            删除
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
