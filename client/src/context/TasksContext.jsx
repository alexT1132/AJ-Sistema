import { createContext, useContext, useState } from "react";
import { 
        createTaskRequest, 
        getTasksRequest, 
        deleteTaskRequest, 
        getTaskRequest, 
        updateTaskRequest,
        getTasksCompleteRequest
    } from "../api/tasks.js";

    const TaskContext = createContext();

    export const useTask = () => {
        const context = useContext(TaskContext);

        if (!context) {
            throw new Error("useTasks must be used within a TaskProvider");
        }

        return context;
    }

    export function TaskProvider({ children }) {

        const [tasks, setTasks] = useState([]);

        const getTasks = async () => {
            try {
                const res = await getTasksRequest();
                setTasks(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const getTasksComplete = async () => {
            try {
                const res = await getTasksCompleteRequest();
                setTasks(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const createTask = async (task) => {
            try {
                const res = await createTaskRequest(task);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteTask = async (id) => {
            try {
                const res = await deleteTaskRequest(id);
                if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
            } catch (error) {
                console.log(error);
            }
        }

        const getTask = async (id) => {
            try {
                const res = await getTaskRequest(id);
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
        
        
        const updateTask = async (id, task) => {
            try {
                await updateTaskRequest(id, task);
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <TaskContext.Provider value={{
                tasks,
                createTask,
                getTasks,
                deleteTask,
                getTask,
                updateTask,
                getTasksComplete,
            }}>
                {children}
            </TaskContext.Provider>
        );
    }