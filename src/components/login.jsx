
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getParentThunk } from "../redux/parentsSlice/getParentThunk";
import { styled } from '@mui/system';
import { Button, TextField, Typography, Container, Box, Grid } from '@mui/material';

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    backgroundColor: '#e3f2fd', // Light blue background
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        '& fieldset': {
            borderColor: '#1976d2',
        },
        '&:hover fieldset': {
            borderColor: '#ffcc00',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffcc00',
        },
        '& input': {
            textAlign: 'right',
            paddingRight: theme.spacing(2),
        },
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: '#1976d2',
    color: '#ffffff',
    borderRadius: '25px',
    padding: theme.spacing(1.5, 4),
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        backgroundColor: '#ffcc00',
        transform: 'scale(1.05)',
    },
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
    color: 'red',
    marginTop: theme.spacing(1),
    textAlign: 'center',
}));

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ password: 0, name: '' });
    const parent = useSelector(state => state.parents.parent);
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState('');

    const enter = () => {
        setError('');
        if (isNaN(user.password) || user.name === "") {
            setError("השלם את הפרטים החסרים במלואם! 🤔");
            return;
        }
        if (user.password === "1234" && user.name === "מנהל") {
            navigate('/manager');
        } else {
            dispatch(getParentThunk(user.password));        
            setFlag(true);
        }
    };

    useEffect(() => {
        if (flag) {
            console.log(parent);
            if (parent === null) {
                navigate('/registration');
            } else {
                navigate('/parent');
            }
        }
    }, [parent]);

    return (
        <StyledContainer component="main" maxWidth="xs">
            <Box textAlign="center" dir="rtl">
                <Typography variant="h4" color="#1976d2" gutterBottom>ברוך הבא לבית הספר! 📚</Typography>
                <Typography variant="body1" color="#1976d2" gutterBottom>אנא הכנס את הפרטים שלך:</Typography>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <StyledTextField
                            variant="outlined"
                            fullWidth
                            label="שם מלא"
                            InputLabelProps={{ style: { textAlign: 'right' } }}
                            InputProps={{ style: { textAlign: 'right', paddingRight: '16px' } }}
                            onChange={x => setUser({ ...user, name: x.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            variant="outlined"
                            fullWidth
                            label="סיסמה"
                            type="password"
                            InputLabelProps={{ style: { textAlign: 'right' } }}
                            InputProps={{ style: { textAlign: 'right', paddingRight: '16px' } }}
                            onChange={x => setUser({ ...user, password: x.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <StyledButton
                            fullWidth
                            variant="contained"
                            onClick={enter}
                        >
                            כניסה
                        </StyledButton>
                    </Grid>
                </Grid>
            </Box>
        </StyledContainer>
    );
};