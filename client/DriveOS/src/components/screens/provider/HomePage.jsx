// src/pages/Dashboard.jsx
import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
import DataCard from '../../Cards/DataCard';
import DataChart from '../../Charts/DataChart';
import RatingCard from '../../Cards/RatingCard';


const HomePage = () => {
  const label = { inputProps: { 'aria-label': 'Available' } }
  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <div className="flex w-full flex-row justify-between">
        <div></div>
        <div className="bg-[#f5ffff] w-72 py-1 px-2 ">
          <FormControlLabel control={<Switch defaultChecked />} label="Available to receive requests" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <DataCard
          value={243}
          tooltip={"Total number of completed requests for the month"}
          label={"Completed Requests"}
        />
        <DataCard
          value={2432}
          tooltip={"Total money earned for the month"}
          label={"Total Revenue"}
          prefix={"₵"}
          down
        />
        <DataCard value={243} tooltip={"Employees"} label={"Total employees"} />
        <DataCard value={243} tooltip={"Employees"} label={"Total employees"} />
      </div>

      <div className="w-full flex flex-row space-x-5 justify-between py-5">
        <div className="flex-1">
          <DataChart
            title={"Completed Requests"}
            subtitle={"February"}
            type={"line"}
          />
        </div>
        <div className="flex-1">
          <DataChart
            title={"Completed Requests"}
            subtitle={"February"}
            type={"bar"}
          />
        </div>
      </div>
      <div className="flex-1 bg-white space-x-5 p-3">
        {/* <DataTable /> */}
        <div className="flex-1">
        <RatingCard />

        </div>
        <div className="flex-1">

        </div>
      </div>
</Box>
  );
}

export default HomePage;
