import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

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
      <Link to={title.toLowerCase()}>{title}</Link>
    </Card>
  )
}

export default PageCard