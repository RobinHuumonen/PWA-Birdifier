import React, { useState } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { ContentWrap } from './ContentStyles';

function Content() {
  const [classifications, setClassifications] = useState([
    { name:  'Bald Eagle', value: 90 },
    { name:  'Golden Eagle', value: 7 },
    { name:  'Turkey Vulture', value: 3 },
  ]); 
  return (
    <ContentWrap>
      <div className="quideResults">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={classifications}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className="selectImage">
      </div>
      <div className="btn-group">
        <button>Select file</button>
        <button>Take photo</button>
        <button>Classify</button>
      </div>
    </ContentWrap>
  );
}

export default Content;

/*   const [classifications, setClassifications] = useState([
    { title:  'Bald Eagle', value: 90, color: '#EBD4CB' },
    { title:  'Golden Eagle', value: 7, color: '#DA9F93' },
    { title:  'Turkey Vulture', value: 3, color: '#B6465F' },
  ]); */

{/* <table>
<thead>
  <tr>
    <th>Color</th>
    <th>Species</th>
    <th>Detection confidence / %</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style={{backgroundColor: "#EBD4CB"}}></td>
    <td>{classifications[0].title}</td>
    <td>{classifications[0].value}</td>
  </tr>
  <tr>
    <td style={{backgroundColor: "#DA9F93"}}></td>
    <td>{classifications[1].title}</td>
    <td>{classifications[1].value}</td>
  </tr>
  <tr>
    <td style={{backgroundColor: "#B6465F"}}></td>
    <td>{classifications[2].title}</td>
    <td>{classifications[2].value}</td>
  </tr>
</tbody>
</table> */}
