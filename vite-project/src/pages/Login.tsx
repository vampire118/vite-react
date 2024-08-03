import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

export default function LoginPage() {

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.info(`You can't login`)
    }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        className="mt-4"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        className="mt-4"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={`mt-6`}
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
        </Container>
    )
}