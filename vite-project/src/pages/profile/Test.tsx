import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface ProfileProps {
  name: string;
  email: string;
  birthday: string;
  address: string;
  position: string;
  education: string;
}

const ProfileCard = ({ name, email, birthday, address, position, education }: ProfileProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-4">
            {name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Email:</span> {email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Birthday:</span> {birthday}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Address:</span> {address}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Position:</span> {position}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <span className="font-semibold">Education:</span> {education}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <ProfileCard
      name="Alice"
      email="alice@example.com"
      birthday="2000-01-01"
      address="Briston, WA"
      position="Solution Manager - Creative Tim Officer"
      education="University of Computer Science"
    />
  );
};

export default App;
