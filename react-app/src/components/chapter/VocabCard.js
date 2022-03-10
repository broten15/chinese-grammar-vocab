import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const TextWrapper = styled('div')({
  // padding: 8,
  // borderRadius: 4,
  width: "80%",
  // margin: "auto",
  
});

export default function BasicCard(props) {
    const { py, chars, trans} = props;

  return (
    <div>
      {chars.map((char, index) => (
        <Card 
          key={char}
          sx={{ margin: 2}}  
        >
          <CardContent 
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <TextWrapper>
              <Typography variant="h6" component="div">
                {char}
              </Typography>
            </TextWrapper>

            <TextWrapper>
              <Typography variant="h6" component="div">
                {py[index]}
              </Typography>
            </TextWrapper>

            <TextWrapper>
              <Typography variant="h6" component="div">
                {trans[index]}
              </Typography>
            </TextWrapper>
            
          </CardContent>
        </Card>
      ))}

    </div>
  );
}