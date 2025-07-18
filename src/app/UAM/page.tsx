// import Image from "next/image";
// import {Box, Stack} from "@mui/material"
"use client"
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {data} from "../data"
import type {dataType} from "../data"

import Sidebar from "../components/Sidebar"
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TablePagination, TextField, Typography } from '@mui/material'
import { StatusButton } from '../components/StatusButton'

export default function Home() {
  function createData(
    id: number,
    name: string,
    username: string,
    group: string,
    channel: string,
    status: string,
    status_reason: string
  ) {
    return { id,name,username,group,channel,status,status_reason }
  }
  const tableHeader = [
    "Emp ID",
    "Name - Lastname",
    "Username",
    "Group/Role",    
    "Channel",
    "Status",
    "Status Reason"
  ]
  const [page,setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement>| null ,newPage:number) => {
    setPage(newPage)
  };
  const handleChangeRowsPerPage = (event:React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value,10));
    setPage(0);
  }
  const [search, setSearch] = React.useState('')

//   const rows = [
//     createData(973145,"Juan Luiz", "Juan.l@asj.tech", "System Admin", "HR,PDPA,Wealth", "Active", ""),
//     createData(984315,"Juan Mata", "Juan.m@asj.tech", "Data Factory", "HR,Regulatory", "Inactive", "Delete resigned staff"),
//     createData(952145,"Juan Lopetegui", "Juan.lo@asj.tech", "KLabs", "Wealth,Regulatory", "Active", "")
//   ]
  return (
    <Stack direction="row">
      {/* <Sidebar/> */}
      <Stack direction="column" margin={5}>
        <Typography variant='h3' mb={6}> User Management</Typography>
        <Stack direction="row" spacing={4} display="flex" sx={{alignItems:"flex-end"}}>
          <Button variant='contained' sx={{width: "150px", height: "100%", background:"#152C70"}}>Create User</Button>
          <TextField id="search-bar" label="search" variant="outlined" sx={{width: "150px", background: "white"}} onChange={(e)=> setSearch(e.target.value)}/>
          <FormControl sx={{width: "150px", background: "white"}}>
            <InputLabel id="demo-simple-select-label">Group/Role</InputLabel>
            <Select>
              <MenuItem>System Admin</MenuItem>
              <MenuItem>Data Factory</MenuItem>
              <MenuItem>Placeholder</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{width: "150px", background: "white"}}>
            <InputLabel id="demo-simple-select-label">Channel</InputLabel>
            <Select>
              <MenuItem>HR</MenuItem>
              <MenuItem>PDPA</MenuItem>
              <MenuItem>Placeholder</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{width: "150px", background: "white"}}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select>
              <MenuItem>Active</MenuItem>
              <MenuItem>Inactive</MenuItem>
              <MenuItem>Placeholder</MenuItem>
            </Select>
          </FormControl>
          <Typography>Sort by: Created Date</Typography>
        </Stack>
    
        <TableContainer component={Paper} sx ={{margin: "30px", width:"1070px", ml: "0px", mr: "0px"}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>                      
              <TableRow>
                {tableHeader.map(head => (
                  <TableCell key={head}>{head}</TableCell>
                ))}
              </TableRow>
                        
            </TableHead>
            <TableBody>
              {data.filter((item) => {
                    return search.toLocaleLowerCase() === ''? item : item.first_name.toLocaleLowerCase().includes(search) || item.last_name.toLocaleLowerCase().includes(search)
                }).slice(page*rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:dataType) => (
                <TableRow
                  key={row.emp_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{color: (row.status=="Active")?"black":"#AEAEAE"}}>{row.emp_id}</TableCell>
                  <TableCell align="left" sx={{color: (row.status=="Active")?"black":"#AEAEAE"}}>{row.first_name} {row.last_name}</TableCell>
                  <TableCell align="left" sx={{color: (row.status=="Active")?"black":"#AEAEAE"}}>{row.username} </TableCell>
                  <TableCell align="left" sx={{color: (row.status=="Active")?"black":"#AEAEAE"}}>{row.group_role}</TableCell>
                  <TableCell align="left" sx={{color: (row.status=="Active")?"black":"#AEAEAE"}}>{row.channel}</TableCell>
                  <TableCell align="left"><StatusButton>{row.status}</StatusButton></TableCell>
                  <TableCell align="left" sx={{color: (row.status=="Active")?"black":"#AEAEAE"}}>{row.status_reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count = {data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5,10,15]}
          />
        </TableContainer>
      </Stack>
    </Stack>
  )
}