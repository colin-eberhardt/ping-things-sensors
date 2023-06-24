import React from 'react';
import { Card } from '@mui/material';

interface ICard {
    title: string;
}

const PageCard = ({title}: ICard) => {
  return (
    <Card
      style={{
        height:"100px",
        width:"60%",
        padding: "2em",
        margin: "1em",
        backgroundColor:"lightgray"
      }}
    >
      {title}
    </Card>
  )
}

export default PageCard