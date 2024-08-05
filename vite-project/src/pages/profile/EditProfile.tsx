import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

interface ProfileProps {
  name: string;
  email: string;
  birthday: string;
  address: string;
  position: string;
  education: string;
}

interface EditProfileProps {
  initialName: string;
  initialEmail: string;
  initialBirthday: string;
  initialAddress: string;
  initialPosition: string;
  initialEducation: string;
  onSave: (profile: ProfileProps) => void;
}

const EditProfileCard = ({
  initialName,
  initialEmail,
  initialBirthday,
  initialAddress,
  initialPosition,
  initialEducation,
  onSave,
}: EditProfileProps) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [birthday, setBirthday] = useState(new Date(initialBirthday));
  const [address, setAddress] = useState(initialAddress);
  const [position, setPosition] = useState(initialPosition);
  const [education, setEducation] = useState(initialEducation);

  const handleSave = () => {
    onSave({
      name,
      email,
      birthday: format(birthday, 'yyyy-MM-dd'), // Format date to string
      address,
      position,
      education,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen mt-16 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-4">
            Edit Profile
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="mb-4">
                <label className="block text-gray-700">Birthday</label>
                <DatePicker
                  selected={birthday}
                  onChange={(date: Date | null) => setBirthday(date || new Date())}
                  dateFormat="yyyy-MM-dd"
                  className="w-full p-2 border border-gray-300 rounded  bg-white text-black"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Position"
                variant="outlined"
                fullWidth
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Education"
                variant="outlined"
                fullWidth
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="mb-4"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const EditProfile = () => {
  const handleSave = (profile: ProfileProps) => {
    console.log('Profile saved:', profile);
    // Handle profile save here
  };

  return (
    <EditProfileCard
      initialName="Alice"
      initialEmail="alice@example.com"
      initialBirthday="2000-01-01"
      initialAddress="Briston, WA"
      initialPosition="Solution Manager - Creative Tim Officer"
      initialEducation="University of Computer Science"
      onSave={handleSave}
    />
  );
};

export default EditProfile;