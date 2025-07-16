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
