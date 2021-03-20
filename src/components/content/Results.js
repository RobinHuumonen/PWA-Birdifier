
import React  from 'react';
import { ContentWrap } from './ResultsStyles';

function Results({ classifications }) {
  return (
    <ContentWrap>
      <div>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Detection Confidence / %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{classifications[0].name}</td>
            <td>{Math.round((classifications[0].value + Number.EPSILON) * 100) / 100}</td>
          </tr>
          <tr>
            <td>{classifications[1].name}</td>
            <td>{Math.round((classifications[1].value + Number.EPSILON) * 100) / 100}</td>
          </tr>
          <tr>
            <td>{classifications[2].name}</td>
            <td>{Math.round((classifications[2].value + Number.EPSILON) * 100) / 100}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </ContentWrap>
  )
};

export default Results;