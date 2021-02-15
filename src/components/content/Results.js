
import React  from 'react';
import { PieChart, Pie, Tooltip,  } from 'recharts';

function Results(props) {
  const resultStyle = {
    backgroundColor: '#273469',   
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };
  return (
    <div style={resultStyle}>
      <PieChart width={400} height={400}>
      <Pie
      dataKey="value"
      isAnimationActive={true}
      data={props.classifications}
      cx={200}
      cy={200}
      outerRadius={80}
      fill="#8884d8"
      label
      />
      <Tooltip />
      </PieChart>
    </div>
  )
};

export default Results;