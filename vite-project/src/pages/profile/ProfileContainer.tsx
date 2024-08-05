import React from 'react';
import { Avatar, Box, Button, Card, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';

const ProfileContainer = () => {
  const navigate = useNavigate()
  const handleNavigateToProfileEdit = () => {
    navigate('/profile/edit')
  }

  return (
    <Container className="mt-16 p-4">
      <Card className="p-4">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              sx={{ width: 84, height: 84 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">Alice</Typography>
            <Typography variant="h6">alice@example.com</Typography> {/* Email address placed below name */}
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleNavigateToProfileEdit}
            >
              Edit
            </Button>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Birthday:</span> {'2000-01-01'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Address:</span> {'Briston, WA'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Position:</span> {'Solution Manager - Creative Tim Officer'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Education:</span> {'University of Computer Science'}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider className="my-4" />

        <Typography variant="body1">
          An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
        </Typography>
      </Card>

      <Box mt={4}>
        <form>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your text"
            className="bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-4"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Sign up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ProfileContainer;
