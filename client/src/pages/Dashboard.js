import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";

const Dashboard = () => {
  // const cards = [1, 2, 3, 4, 5, 6];
  const theme = createTheme();

  // Add more features for more cards
  // Cards mapped below
  const features = [
    {
      title: "Mentees",
      description: "Find a list of your mentees here and see their progress",
      imageURL:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pageURL: "/mentees",
    },
    {
      title: "Finance",
      description: "Financial support for your mentees",
      imageURL:
        "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pageURL: "/finance",
    },
    {
      title: "Resources",
      description: "Resources for your mentees",
      imageURL:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pageURL: "/resources",
    },
    {
      title: "Social",
      description: "Community resources for your mentees",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1663115409520-989b46bd6eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80",
      pageURL: "/social",
    },
    {
      title: "Career",
      description: "Career support for your mentees",
      imageURL:
        "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pageURL: "/career",
    },
    {
      title: "Housing",
      description: "Housing support for your mentees",
      imageURL:
        "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pageURL: "/housing",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
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
              Veteran Mentorship
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              As a mentor you are the backbone of Veteran Mentorship. You're
              service provides an opportunity to uplift other veterans in need.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Find other veterans</Button>
              <Link href="/dashboard/chat" underline="none">
                <Button variant="contained">Chat with mentees</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item key={feature} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, height: 385 }}>
                  <CardMedia
                    component="img"
                    image={feature.imageURL}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                    <Typography>{feature.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Dashboard;
