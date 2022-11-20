// import React from 'react';

// const Mentorship = () => {
//   return (
//     <div>
//       <h1>Find Mentorship</h1>
//     </div>
//   );
// };

// export default Mentorship;

import React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// const cards = [1, 2, 3, 4, 5, 6];
const theme = createTheme();

// Add more mentors for more cards
// Cards mapped below
// TODO: Add the logic to display the profile of indivual users, mentorID
const mentors = [
  {
    name: 'Jayne Doe',
    description: "Jayne Doe got out of the Army in 2016 and has been trying to break into the tech industry. Jayne is looking for career guidance.",
    imageURL: 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    pageURL: '/mentorID',
  },
  {
    name: 'Joe Schmuckatelli',
    description: "Joe served in the Navy as a Yeoman and got out in 2014. He's been working retail and would like advice on finances.",
    imageURL: 'https://images.unsplash.com/photo-1612230337141-903f3d330055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    pageURL: '/mentorID',
  },
  {
    name: 'Rahul Ligma',
    description: "Rahul was recently fired from his job as a software engineer. He's looking for advice on finding a new job.",
    imageURL: 'https://images.unsplash.com/photo-1557928972-bae2a73fef02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    pageURL: '/mentorID',
  },
  {
    name: 'Emma Codingson',
    description: "Emma was a US Marine and looking for advice on resources to improve her life.",
    imageURL: 'https://plus.unsplash.com/premium_photo-1666264200737-acad542a92ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    pageURL: '/mentorID',
  },
  {
    name: 'Daniel Johnson',
    description: "After serving in the Air Force, Daniel got a job as a software engineer at Twitter but was unfortunately laid off. He's looking for advice on finding a community to be a part of.",
    imageURL: 'https://images.unsplash.com/photo-1611265434135-3828a571338d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    pageURL: '/mentorID',
  },
  {
    name: 'Sarah Smith',
    description: "Sarah was a Space Cadet in the Space Force and is looking for housing assistance.",
    imageURL: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    pageURL: '/mentorID',
  },
];


export default function Mentorship() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Veteran Mentees
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Here's a list of other veteran mentees that are looking for assistance. Reach out and contact those that you think you can help.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Find other veterans</Button>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {mentors.map((mentor) => (
              <Grid item key={mentor} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={mentor.imageURL}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {mentor.name}
                    </Typography>
                    <Typography>
                      {mentor.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Contact</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
