import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'Seat 1',
    description: 'Name 1',
  },
  {
    id: 2,
    title: 'Seat 2',
    description: 'Name 2',
  },
  {
    id: 3,
    title: 'Seat 3',
    description: 'Name 3',
  },
  {
    id: 4,
    title: 'Seat 4',
    description: 'Name 4',
  },
  {
    id: 5,
    title: 'Seat 5',
    description: 'Name 5',
  },
  {
    id: 6,
    title: 'Seat 6',
    description: 'Name 6',
  },
  {
    id: 7,
    title: 'Seat 7',
    description: 'Name 7',
  },
  {
    id: 8,
    title: 'Seat 8',
    description: 'Name 8',
  },
  {
    id: 9,
    title: 'Wait List',
    description: 'Waiting (4)',
  },
];

function SeatSelect() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: 2,
      }}
    >
        
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'blue',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}

       
    </Box>
   
    


  );
}




export default SeatSelect;