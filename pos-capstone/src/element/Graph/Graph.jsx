import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { faker } from '@faker-js/faker';
import "./Graph.style.css"
import { datagraph } from './filterdataGraph';



function Graph({ datas }) {

  const data = [
    { month: 'Jan', value:datagraph(datas, 1) },
    { month: 'Feb', value:datagraph(datas, 2) },
    { month: 'Mar', value:datagraph(datas, 3) },
    { month: 'Apr', value:datagraph(datas, 4) },
    { month: 'May', value:datagraph(datas, 5) },
    { month: 'Jun', value:datagraph(datas, 6) },
    { month: 'Jul', value:datagraph(datas, 7) },
    { month: 'Aug', value:datagraph(datas, 8) },
    { month: 'Sep', value:datagraph(datas, 9) },
    { month: 'Oct', value:datagraph(datas, 10) },
    { month: 'Nov', value:datagraph(datas, 11) },
    { month: 'Dec', value:datagraph(datas, 12) },
  ];

  return (
    <div className='graph'>
      <h1 className='ms-4 mb-5'>Sales Statistics</h1>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 0, right: 10, left: -24, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="55%" stopColor="rgba(244, 97, 97, 0.53)" />
              <stop offset="100%" stopColor="rgba(244, 97, 97, 0)" />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" style={{ fontFamily: 'Rubik', fontSize: 12 }} />
          <YAxis style={{ fontFamily: 'Rubik', fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"

            fill="url(#colorGradient)"
            strokeWidth={0}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

  );
}

export default Graph;