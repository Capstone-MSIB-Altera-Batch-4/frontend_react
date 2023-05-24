import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { faker } from '@faker-js/faker';
import "./Graph.style.css"

const data = [
  { month: 'Jan', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Feb', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Mar', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Apr', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'May', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Jun', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Jul', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Augt', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Sep', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Oct', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Nov', value: faker.datatype.number({ min: 0, max: 100 }) },
  { month: 'Dec', value: faker.datatype.number({ min: 0, max: 100 }) },
];

function Graph() {
  return (
    <div className='graph'>
    <h1 className='ms-5 mb-5 ps-3'>Sales Statistics</h1>
      <AreaChart width={700} height={300} data={data}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="55%" stopColor="rgba(244, 97, 97, 0.53)" />
            <stop offset="100%" stopColor="rgba(244, 97, 97, 0)" />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" style={{fontFamily: 'Rubik', fontSize: 12}} />
        <YAxis style={{fontFamily: 'Rubik', fontSize: 12}} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value" 
          
          fill="url(#colorGradient)"
          strokeWidth={0}
        />
      </AreaChart>
    </div>

  );
}

export default Graph;