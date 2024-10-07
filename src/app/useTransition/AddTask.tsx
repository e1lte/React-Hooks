import React, { useState } from "react";

interface AddTaskProps {
    onAddTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };

    const handleAddClick = () => {
        if (taskText.trim()) {
            onAddTask(taskText.trim());
            setTaskText(""); // 清空输入框
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={handleInputChange}
                placeholder="输入任务"
                style={{ width: "300px", padding: "8px", marginBottom: "10px" }}
            />
            <button onClick={handleAddClick} style={{ padding: "8px 16px" }}>
                添加任务
            </button>
        </div>
    );
};

export default AddTask;
