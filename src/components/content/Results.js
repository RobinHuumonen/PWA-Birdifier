
import React  from 'react';
import { PieChart, Pie, Tooltip, Label } from 'recharts';

function Results({ classifications }) {
  const resultStyle = {
    backgroundColor: '#273469',   
    textAlign: 'center',
    display: 'flex',
    flexDirection:' column',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const h2Style = {
    alignSelf: 'center',
    color: '#FAFAFF',
  };
  
  return (
    <div style={resultStyle}>
      <PieChart width={400} height={400} onClick={() => {}}>
      <Pie
      dataKey="value"
      isAnimationActive={true}
      data={classifications}
      cx={200}
      cy={200}
      outerRadius={65}
      fill="#8884d8"
      label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index
        }) => {
          const RADIAN = Math.PI / 180;
          // eslint-disable-next-line
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          // eslint-disable-next-line
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          // eslint-disable-next-line
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#8884d8"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {classifications[index].name} ({value})
            </text>
          );
        }}
      />
      <Label value="Detection confidence / %" offset={0} position="insideBottom" />
      <Tooltip />
      </PieChart>
      <h2 style={h2Style}>Detection confidence / %</h2>
    </div>
  )
};

export default Results;