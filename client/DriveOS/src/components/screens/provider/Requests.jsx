import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import Txtinput from '../../components/ui/Txtinput'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DataTable from '../../components/Table/DataTable'


const Requests = () => {
  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <div className="flex space-x-3 items-center">
        <div className=" w-full flex flex-row space-x-3">
          <div className="w-72">
            <Txtinput
              placeholder="Search request id"
              type="text"
              icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
            />
          </div>
          <div className="w-60">

          <FormControl className="w-full h-10 flex flex-row items-center rounded-md bg-[#F5FFFF] shadow">
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter"
              className="w-full h-full"
            >
              <MenuItem value={10}>Accepted</MenuItem>
              <MenuItem value={20}>Completed</MenuItem>
              <MenuItem value={30}>En Route</MenuItem>
              <MenuItem value={30}>Declined</MenuItem>
              <MenuItem value={30}>Cancelled</MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>
       
      </div>
      <div>
        <DataTable />
      </div>
    </Box>
  )
}

export default Requests