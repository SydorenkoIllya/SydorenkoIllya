import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/TypedHooks';
import { setLogIn } from '../routes/routeSlice';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


export default function LoginPage() {
    const [error, setError] = useState<boolean>(false)
    const [memorizeLogin, setMemorizeLogin] = useState<boolean>(false)
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const { t } = useTranslation()

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMemorizeLogin(event.target.checked)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username') as string
        if (username.trim() === 'admin' && data.get('password') === '12345' && memorizeLogin) {
            dispatch(setLogIn(true))
            navigate('/')
        } else if (username.trim() === 'admin' && data.get('password') === '12345') {
            dispatch(setLogIn(false))
            navigate('/')
        } else {
            setError(true)
        }
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('login')}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        error={error}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={t('username')}
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        error={error}
                        helperText={error ? t('incorrect') : null}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t('password')}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange={(e) => handleCheckbox(e)} value="remember" color="primary" />}
                        label={t('memorize')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('login')}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
