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