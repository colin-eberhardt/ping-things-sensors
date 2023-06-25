import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

interface ICard {
    title: string;
}

const PageCard = ({title}: ICard) => {
  return (
    <Link to={title.toLowerCase()}>
      <Card
        style={{
          height:"100px",
          width:"60%",
          padding: "2em",
          margin: "1em",
          backgroundColor:"lightgray"
        }}
      >
        <h2>{title}</h2>
      </Card>
    </Link>
  )
}

export default PageCard