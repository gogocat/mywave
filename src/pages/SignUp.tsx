import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import SignUpForm from 'components/Forms/SignUpForm';
import Tick from 'components/Tick';

import './SignUp.scss';

function SuccessMessage() {
    return (
        <div className="sign-up__success-message">
            <Tick size="lg" />
            <h3 className="text-center">Success!</h3>
            <p>Thank you registered.</p>
        </div>
    );
}

function SignUp() {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <Grid 
            container
            className="sign-up"
            component="main"
            sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1"
                        variant="h5">
                        Sign Up
                    </Typography>
                    { isCompleted 
                        ? <SuccessMessage />
                        : <SignUpForm onCompleted={setIsCompleted}/>
                    }
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignUp;
