"use client"
import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { data } from "../data"
import type { dataType } from "../data"
import {Pagination, Tooltip} from "@mui/material"

import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TablePagination,
  TextField,
  Typography
} from "@mui/material"
import { StatusButton } from "../components/StatusButton"
import { CheckBox, WidthFull } from "@mui/icons-material"

export default function Home() {
  const tableHeader = [
    "Emp ID",
    "Name - Lastname",
    "Username",
    "Group/Role",
    "Channel",
    "Status",
    "Status Reason"
  ]
  const [page, setPage] = React.useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5)

  const handleChangePage= (
    event: React.ChangeEvent<unknown>, value: number
  ) => {
    setPage(value-1)
  }
  

  const [search, setSearch] = React.useState("")

  function searchName(item:string){
    return item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  }

  const [searchRole, setSearchRole] = React.useState<string[]>([])
  const handleChangeSearchRole = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value
    setSearchRole(typeof value === 'string' ? [value] : value)

  }
  const [searchStatus, setSearchStatus] = React.useState<string[]>([])
  const handleChangeSearchStatus = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value
    setSearchStatus(typeof value === 'string' ? [value] : value)

  }
  const [searchChannel, setSearchChannel] = React.useState<string[]>([])
  const handleChangeSearchChannel = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value
    setSearchChannel(typeof value === 'string' ? [value] : value)

  }
  const [filteredRows, setFilteredRows] = React.useState(data.length)

  const applyFilter = () => {
    const filtered = data
                .filter(item => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : searchName(item.first_name) || searchName(item.last_name)
                })
                .filter(item => {
                  return searchRole.length === 0 || searchRole.includes(item.group_role)
                })
                .filter(item => {
                  return searchChannel.length === 0 || searchChannel.some(e => item.channel.includes(e))
                })
                .filter(item => {
                  return searchStatus.length === 0 || searchStatus.includes(item.status)
                })
    setFilteredRows(filtered.length)
    setPage(0)
  }
  React.useEffect(()=> {
    applyFilter()
  },[search,searchRole,searchChannel,searchStatus])
  
  

  return (
    <Stack direction="row">
      <Stack direction="column">
        <Typography variant="h3" mt={6} ml={5}>
          User Management
        </Typography>
        <Stack direction="column" style={{display:"flex",alignItems:"center", margin:"50px"}} mb={0}>
        <Stack
          direction="row"
          spacing={4}
          display="flex"
          sx={{ alignItems: "flex-end" }}
        >
          <Tooltip title="Create User">
            <Button
              variant="contained"
              sx={{ width: "150px", height: "100%", background: "#152C70" }}
            >
              Create User
            </Button>
          </Tooltip>
          <Tooltip title="Partial search by fullname">
            <TextField
              id="search-bar"
              label="search"
              variant="outlined"
              sx={{ width: "200px", background: "white" }}
              onChange={e => setSearch(e.target.value)}
            />
          </Tooltip>

          <Tooltip title="Search by Group/Role">
          <FormControl sx={{ width: "200px", background: "white" }}>
            <InputLabel id="demo-simple-select-label">Group/Role</InputLabel>
            <Select
              multiple
              value={searchRole}
              onChange={handleChangeSearchRole}
              renderValue={(searchRole) => searchRole.join(', ')}

            >
              <MenuItem value="System Admin">
                <Checkbox checked={searchRole.includes("System Admin")} />
                System Admin
              </MenuItem>
              <MenuItem value="Data Factory">
                <Checkbox checked={searchRole.includes("Data Factory")} />
                Data Factory
              </MenuItem>
              <MenuItem value="KLabs">
                <Checkbox checked={searchRole.includes("KLabs")} />
                KLabs
              </MenuItem>
              <MenuItem value="User Management">
                <Checkbox checked={searchRole.includes("User Management")} />
                User Management
              </MenuItem>
              <MenuItem value="Business User">
                <Checkbox checked={searchRole.includes("Business User")} />
                Business User
              </MenuItem>
            </Select>
          </FormControl>
          </Tooltip>

          <Tooltip title="Search by Channel">
          <FormControl sx={{ width: "200px", background: "white" }}>
            <InputLabel id="channel search">Channel</InputLabel>
            <Select
              multiple
              value={searchChannel}
              onChange={handleChangeSearchChannel}
              renderValue={(searchChannel) => searchChannel.join(', ')}

            >
              <MenuItem value="HR">
                <Checkbox checked={searchChannel.includes("HR")} />
                HR
              </MenuItem>
              <MenuItem value="PDPA">
                <Checkbox checked={searchChannel.includes("PDPA")} />
                PDPA
              </MenuItem>
              <MenuItem value="Wealth">
                <Checkbox checked={searchChannel.includes("Wealth")} />
                Wealth
              </MenuItem>
              <MenuItem value="Regulatory">
                <Checkbox checked={searchChannel.includes("Regulatory")} />
                Regulatory
              </MenuItem>
            </Select>
          </FormControl>
          </Tooltip>



          <Tooltip title="Search by Status">
          <FormControl sx={{ width: "200px", background: "white" }}>
            <InputLabel id="status search">Status</InputLabel>
              <Select
              multiple
              value={searchStatus}
              onChange={handleChangeSearchStatus}
              renderValue={(searchStatus) => searchStatus.join(', ')}

            >
              <MenuItem value="Active">
                <Checkbox checked={searchStatus.includes("Active")} />
                Active
              </MenuItem>
              <MenuItem value="Inactive">
                <Checkbox checked={searchStatus.includes("Inactive")} />
                Inactive
              </MenuItem>
              <MenuItem value="Deleted">
                <Checkbox checked={searchStatus.includes("Deleted")} />
                Deleted
              </MenuItem>
            </Select>
          </FormControl>
          </Tooltip>

          <Typography>Sort by: Created Date</Typography>
        </Stack>

        <TableContainer
          component={Paper}
          sx={{ margin: "30px", width: "100%", ml: "0px", mr: "0px" }}
        >
          
          <Table aria-label="simple table" style={{tableLayout:"fixed"}}>
            <colgroup>
              <col style={{width:'10%'}}/>
              <col style={{width:'17%'}}/>
              <col style={{width:'18%'}}/>
              <col style={{width:'15%'}}/>
              <col style={{width:'15%'}}/>
              <col style={{width:'10%'}}/>
              <col style={{width:'15%'}}/>
            </colgroup>
            
            <TableHead>
              
              <TableRow>
                {tableHeader.map(head => (
                  <TableCell key={head}>{head}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter(item => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : searchName(item.first_name) || searchName(item.last_name)
                })
                .filter(item => {
                  return searchRole.length === 0 || searchRole.includes(item.group_role)
                })
                .filter(item => {
                  return searchChannel.length === 0 || searchChannel.some(e => item.channel.includes(e))
                })
                .filter(item => {
                  return searchStatus.length === 0 || searchStatus.includes(item.status)
                })

                

                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: dataType) => (
                  <TableRow
                    key={row.emp_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } , height:75}}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: row.status == "Active" ? "black" : "#AEAEAE"
                      }}
                    >
                      {row.emp_id}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: row.status == "Active" ? "black" : "#AEAEAE",
                      }}
                    >
                      {row.first_name} {row.last_name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: row.status == "Active" ? "black" : "#AEAEAE",
                      }}
                    >
                      {row.username}{" "}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: row.status == "Active" ? "black" : "#AEAEAE",
                      }}
                    >
                      {row.group_role}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: row.status == "Active" ? "black" : "#AEAEAE",
                      }}
                    >
                      {row.channel.map((item) => item != row.channel[row.channel.length-1] ? item  + ", " : item)}
                    </TableCell>
                    <TableCell align="left" sx ={{width:30}}>
                      <StatusButton>{row.status}</StatusButton>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: row.status == "Active" ? "black" : "#AEAEAE",
                        
                      }}
                    >
                      <span>{row.status_reason}</span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Stack>
        <Pagination 
            page = {page+1}
            shape="rounded"
            color="primary"
            boundaryCount={2}
            count={Math.ceil(filteredRows/rowsPerPage)} 
            onChange={handleChangePage}
            sx={{display:"flex", justifyContent: "center"}}
          />
      </Stack>
    </Stack>
  )
}
