'use client'
import React from "react"
import {Avatar, Box, Collapse, IconButton, Stack, Tooltip, Typography} from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined'
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined'
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined'
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined'
import ChecklistIcon from '@mui/icons-material/Checklist';
import Link from "next/link"

const Sidebar = () => {
  const [open, setOpen] = React.useState(false)
  const toggle = () => {
    setOpen(prev => !prev)

  }
  return (
    <div>   
      <Collapse in={open} style ={{transitionDuration: "400 ms"}} orientation="horizontal" collapsedSize="60px">
        <Box bgcolor="white" width="270px" padding="10px" height="700px">
                        
          <IconButton  aria-label="expand menu" sx = {{display: open? 'none' : 'flex', mb:"30px", mt:"10px"} } onClick={() => toggle()}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
          <Stack direction="row" spacing={4} sx = {{display: open? 'flex' : 'none', mb:"30px", mt:"10px"}} >
            <Typography variant="h6" color="#109CF1">Athena Back Office</Typography>
            <IconButton  aria-label="collapse menu" onClick={() => toggle() }>
              <KeyboardDoubleArrowLeftIcon />
            </IconButton>
          </Stack>
          <Stack direction="row">
            <Avatar src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="profile"/>
            <Stack direction="column">
              <Typography variant="body2" mt={0} ml={1} sx ={{display: open? 'flex' : 'none'}}>Jonathan</Typography>
              <Typography variant="body2" mt={0} ml={1} sx ={{display: open? 'flex' : 'none'}}>Jonathan.k@gmail.com</Typography>
            </Stack>
                                
          </Stack>
          <Stack direction="column" spacing={2} margin={0.6} mt={2}>
            <Link href="/UAM">
                <Stack direction="row">
                <Tooltip title={open? null : "UAM"} placement="right" arrow>
                    <AssignmentIndOutlinedIcon sx={{ fontSize: 30 }}/>
                </Tooltip>
                <Typography variant="body2" mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>UAM</Typography>
                </Stack>
            </Link>
                            
            <Stack direction="row">
              <Tooltip title={open? null : "Use Case Management"} placement="right" arrow>
                <PsychologyOutlinedIcon sx={{ fontSize: 30 }}/>
              </Tooltip>
              <Typography mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>Use Case Management</Typography>
            </Stack>

            <Stack direction="row">
              <Tooltip title={open? null : "Data Preparation"} placement="right" arrow>
                <FolderCopyOutlinedIcon sx={{ fontSize: 30 }}/>
              </Tooltip>
              <Typography mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>Data Preparation</Typography>
            </Stack>
            <Stack direction="row">
              <Tooltip title={open? null : "Evaluate"} placement="right" arrow>
                <ContentPasteOutlinedIcon sx={{ fontSize: 30 }}/>
              </Tooltip>
              <Typography mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>Evaluate</Typography>
            </Stack>
            <Stack direction="row">
              <Tooltip title={open? null : "Report Log"} placement="right" arrow>
                <StickyNote2OutlinedIcon sx={{ fontSize: 30 }}/>
              </Tooltip>
              <Typography mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>Report Log</Typography>
            </Stack>
            <Stack direction="row">
              <Tooltip title={open? null : "Teachable Tool"} placement="right" arrow>
                <Groups3OutlinedIcon sx={{ fontSize: 30 }}/>
              </Tooltip>
              <Typography mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>Teachable Tool</Typography>
            </Stack>
            
            <Link href="/todo">
                <Stack direction="row">
                <Tooltip title={open? null : "Todolist"} placement="right" arrow>
                    <ChecklistIcon sx={{ fontSize: 30 }}/>
                </Tooltip>
                <Typography mt={0.5} ml={1} sx ={{display: open? 'flex' : 'none'}}>Todolist</Typography>
                </Stack>
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </div>
  )
}

export default Sidebar