import React from "react";
import '../App.css'
import CssBaseline from "@mui/material/CssBaseline";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Resources = () => {
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          <Typography component="h1" variant="h5">
          Hotlines and Resources
          </Typography>
            <Grid container>
              <Grid item xs>
                <br/>

                <Typography component="body" variant="h6">
                    National VA Homeless Hotline – 24 Hour
                </Typography>
                <Typography component="body" variant="p">
                    Toll Free at 1-877-424-3838
                </Typography>
                <Link href="http://www.va.gov/homeless" variant="p" underline="none">
                www.va.gov/homeless
                </Link>
                <br/>
                <br/>
                <Typography component="body" variant="h6">
                  Veteran Crisis Line – 24 Hour
                </Typography>
                <Typography component="body" variant="p">
                  Toll Free at 988, Press 1
                </Typography>
                <Link href="http://www.http://www.mentalhealth.va.gov.gov/homeless" variant="p" underline="none">
                  www.mentalhealth.va.gov
                </Link>
                <br/>
                <br/>
                <Typography component="body" variant="h6">
                  The Recovery Village
                </Typography>
                <Typography component="body" variant="p">
                  A mental health and wellness mobile app for teletherapy sessions.
                </Typography>
                <Link href="http://www.therecoveryvillage.com/treatment-program/online-counseling/telehealth-app/" variant="p" underline="none">
                  www.therecoveryvillage.com
                </Link>
                <br/>
                <br/>
                <Typography component="body" variant="h6">
                  White House VA Hotline – non-emergency, VA inquiries
                </Typography>
                <Typography component="body" variant="p">
                  1-855-948-2311
                </Typography>
                <Link href="http://www.va.gov/ve/whvahotline.asp" variant="p" underline="none">
                  Non Emergency White House VA Hotline
                </Link>
                <br/>
                <br/>
                <Typography component="body" variant="h6">
                  Locate Military Records
                </Typography>
                <Link href="http://www.archives.gov/veterans/" variant="p" underline="none">
                  www.archives.gov/veterans
                </Link>
                <br/>
                <br/>
                <Typography component="body" variant="h6">
                  Federal Benefits for Veterans & Dependents Guide
                </Typography>
                <Link href="http://www.va.gov/opa/publications/benefits_book.asp" variant="p" underline="none">
                  VA Benifits Book
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};

export default Resources;
