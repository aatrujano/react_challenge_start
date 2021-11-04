import React from 'react';
import { Tile } from '../../components/tile/Tile';

export const TileList = (props) => {
  const data = props.data;

  return (
    <ul>
      {data.map((obj, index) => (
        <li  key={index} >         
          <Tile dataObj={obj} />
        </li>
      ))}
    </ul>
  );
};
