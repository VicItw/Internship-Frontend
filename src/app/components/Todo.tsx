'use client'
import { useState } from "react"
import { MyButton } from "./Button";
import { Card } from "./Card"
import type { CardProps } from "./Card";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { Box, Menu, MenuItem, Stack } from "@mui/material";
import CelebrationIcon from '@mui/icons-material/Celebration';



export default function Todo(){
    const [todos, setTodos] = useState<CardProps[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [open,setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('all')
    const [isClicked1, setIsClicked1] = useState<boolean>(true);
    const [isClicked2, setIsClicked2] = useState<boolean>(false);
    const [isClicked3, setIsClicked3] = useState<boolean>(false);

    const add = () => {
        if(inputValue.trim()){
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: inputValue,
                    completed: false,
                }
            ]);
            setInputValue('');
        }
    }

    const toggle = (id:number) => {
        setTodos(todos.map(todoItem => (
            todoItem.id === id ? {...todoItem, completed: !todoItem.completed}: todoItem
        )))
    }
    const del = (id:number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const filteredTodos = todos.filter((todoItem) => {
        if (filter === "completed") return todoItem.completed;
        if (filter === "ongoing") return !todoItem.completed;
        return true;
    })
    const pressed1 = () => {
        setFilter('all')
        setIsClicked1(true);
        setIsClicked2(false);
        setIsClicked3(false);
    }
    const pressed2 = () => {
        setFilter('completed')
        setIsClicked1(false);
        setIsClicked2(true);
        setIsClicked3(false);
    }
    const pressed3 = () => {
        setFilter('ongoing');
        setIsClicked1(false);
        setIsClicked2(false);
        setIsClicked3(true);
    }
    return (
        <Box sx={{ flexGrow: 1}}>
            
            <Stack display="flex" direction="row" spacing={2} justifyContent= "center" padding={2} alignItems="center">
            <input type="text" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                value = {inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter'){
                        add();
                    }
                }}
                placeholder="Add a new todo!" 
                required 
            />
            <MyButton
                onClick={add}
            >
                Add
            </MyButton>
            </Stack>
            <Stack direction="row" spacing={2} padding={2} justifyContent="center">
            <Button onClick={pressed1} disabled={isClicked1}>Filter (All)</Button>           
            <Button onClick={pressed2} disabled={isClicked2}>Filter (Completed)</Button>
            <Button onClick={pressed3} disabled={isClicked3}>Filter (Ongoing)</Button>
            </Stack>

            <ul>
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todoItem) => (
                        <li key = {crypto.randomUUID()} className={todoItem.completed? "line-through":""}>
                            <Stack direction="row" justifyContent="center" sx={{alignItems:"center"}}>
                            <Checkbox checked={todoItem.completed} onChange={() => toggle(todoItem.id)} size="large">

                            </Checkbox>
                            <Card
                                id={todoItem.id} title={todoItem.title} completed={todoItem.completed}
                            />
                            <IconButton onClick={() => del(todoItem.id)} aria-label="delete" size="large">
                                <DeleteIcon />
                            </IconButton>
                            </Stack>
                        </li>
                    ))
                ): (<li key={Math.random.toString()}>
                    <Stack sx={{alignItems:"center"}} direction="row" justifyContent="center" spacing={2} padding={5}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            {!isClicked2 ? "No todo left !" : "Nothing's completed"}
                        </h5>
                        <CelebrationIcon sx={{ display: isClicked2 ? "none" : "flex"}} color="action"></CelebrationIcon>

                    </Stack>
                    </li>)}
            </ul>
        </Box>
      )
}