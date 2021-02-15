import React, { useState } from 'react';
import { PieChart, Pie, Tooltip,  } from 'recharts';
import { ContentWrap } from './ContentStyles';
import preloadedImg from '../resources/bald-eagle-preloaded.jpg'

function Content() {
  const [classifications, setClassifications] = useState([
    { name:  'Bald Eagle', value: 90 },
    { name:  'Golden Eagle', value: 7 },
    { name:  'Turkey Vulture', value: 3 },
  ]); 
  return (
    <ContentWrap>
      <div className="selectImage">
       <img src={preloadedImg}></img>
      </div>
      <div className="btn-group">
        <button>Select file</button>
        <button>Take photo</button>
        <button>Classify</button>
      </div>
{/*       <div className="quideResults">
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
      </div> */}
    </ContentWrap>
  );
}

export default Content;