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
  const [renderResults, setRenderResults] = useState(false);

  const classify = () => {
    setTimeout(() => {
      setRenderResults(true);
    }, 4000);
  };

  const resultStyle = {
    backgroundColor: '#273469',   
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  return (
    <ContentWrap>
      {renderResults === true ? 
        <div style={resultStyle}>
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
      : null}
      <div className="selectImage">
       <img src={preloadedImg}></img>
      </div>
      <div className="btn-group">
        <button>Select file</button>
        <button>Take photo</button>
        <button onClick={() => classify()}>Classify</button>
      </div>
    </ContentWrap>
  );
}

export default Content;