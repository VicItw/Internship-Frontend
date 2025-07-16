<<<<<<< HEAD
// import Image from "next/image";
import {Box, Stack} from "@mui/material"
import Sidebar from "./components/Sidebar"

export default function Home() {
  return (
    <Box bgcolor="#eeeeee" height="700px">
      <Stack direction="row">
        <Sidebar/>
      </Stack>
    </Box>
  )
}
=======
import React from "react"
import AddToDo from "./components/Todo"
import TopBar from "./components/TopBar"
import { Box, Stack } from "@mui/material"

const TodoList = () => {
  return (
    <Box>
      <TopBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <AddToDo/>
      </Stack>
    </Box>

  )
}

export default TodoList
>>>>>>> cadb2876461526b3dcc334ee8ef4a8465ab7ce9a
