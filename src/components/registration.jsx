// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addParentThunk } from "../redux/parentsSlice/addParentThunk";
// import { useNavigate } from "react-router-dom";
// import * as React from 'react';
// import { 
//   TextField, 
//   Button, 
//   Box, 
//   Typography, 
//   Container, 
//   Paper, 
//   Grid, 
//   CircularProgress,
//   Avatar,
//   Snackbar,
//   Alert,
//   useMediaQuery
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { motion } from "motion/react"
// import SchoolIcon from '@mui/icons-material/School';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import { teal, cyan } from '@mui/material/colors';

// // Custom styled components
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: 16,
//   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//   background: `linear-gradient(135deg, ${teal[50]} 0%, ${cyan[50]} 100%)`,
//   border: `1px solid ${teal[200]}`,
//   position: 'relative',
//   overflow: 'hidden',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: '6px',
//     background: `linear-gradient(90deg, ${teal[400]} 0%, ${cyan[400]} 100%)`,
//   }
// }));

// const LogoContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginBottom: theme.spacing(4),
// }));

// const StyledAvatar = styled(Avatar)(({ theme }) => ({
//   backgroundColor: teal[500],
//   width: theme.spacing(7),
//   height: theme.spacing(7),
//   marginBottom: theme.spacing(1),
//   boxShadow: '0 4px 12px rgba(0, 150, 136, 0.3)',
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2.5),
//   '& .MuiOutlinedInput-root': {
//     '&:hover fieldset': {
//       borderColor: teal[300],
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: teal[500],
//     },
//   },
//   '& .MuiInputLabel-root.Mui-focused': {
//     color: teal[700],
//   },
//   direction: 'rtl',
// }));

// const SubmitButton = styled(Button)(({ theme }) => ({
//   background: `linear-gradient(90deg, ${teal[600]} 0%, ${cyan[600]} 100%)`,
//   padding: '12px 24px',
//   borderRadius: '8px',
//   marginTop: theme.spacing(2),
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     background: `linear-gradient(90deg, ${teal[700]} 0%, ${cyan[700]} 100%)`,
//     boxShadow: '0 6px 12px rgba(0, 150, 136, 0.3)',
//     transform: 'translateY(-2px)',
//   },
// }));

// export const Registration = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const stateParent = useSelector(state => state.parents.parent);
//   const [flag, setFlag] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("error");
//   const isMobile = useMediaQuery('(max-width:600px)');
  
//   const [parent, setParent] = useState({
//     id: 0,
//     accepted: false,
//     familyLastName: "",
//     motherFirstName: "",
//     homeNumberPhone: "",
//     numberPhone1: "",
//     numberPhone2: "",
//     fatherFirstName: "",
//     mail: "",
//     address: ""
//   });

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePhone = (phone) => {
//     return /^\d{9,10}$/.test(phone);
//   };

//   const enter = () => {
//     // Validate form
//     if (parent.address === "" || parent.familyLastName === "" || 
//         parent.fatherFirstName === "" || parent.motherFirstName === "" || 
//         parent.mail === "" || parent.homeNumberPhone === "" || 
//         parent.numberPhone1 === "" || parent.numberPhone2 === "") {
      
//       setSnackbarMessage("אנא השלם את כל השדות הנדרשים");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }

//     if (!validateEmail(parent.mail)) {
//       setSnackbarMessage("אנא הזן כתובת אימייל תקינה");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }

//     if (!validatePhone(parent.homeNumberPhone) || 
//         !validatePhone(parent.numberPhone1) || 
//         !validatePhone(parent.numberPhone2)) {
//       setSnackbarMessage("אנא הזן מספרי טלפון תקינים (9-10 ספרות)");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       return;
//     }

//     setLoading(true);
//     setFlag(true);
    
//     // Show success message
//     setSnackbarMessage("הטופס נשלח בהצלחה!");
//     setSnackbarSeverity("success");
//     setOpenSnackbar(true);
    
//     // Dispatch action
//     setTimeout(() => {
//       dispatch(addParentThunk(parent));
//     }, 1500);
//   };

//   useEffect(() => {
//     if (flag === true && stateParent) {
//       navigate('/parent');
//     }
//   }, [stateParent, flag, navigate]);

//   return (
//     <Container maxWidth="md" sx={{ py: 8 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <StyledPaper elevation={3}>
//           <LogoContainer>
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ 
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//                 delay: 0.2
//               }}
//             >
//               <StyledAvatar>
//                 <SchoolIcon fontSize="large" />
//               </StyledAvatar>
//             </motion.div>
//             <Typography 
//               variant="h4" 
//               component="h1" 
//               gutterBottom 
//               sx={{ 
//                 fontWeight: 700, 
//                 color: teal[800],
//                 textAlign: 'center'
//               }}
//             >
//               הרשמה לבית הספר
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 mb: 4, 
//                 color: teal[700],
//                 textAlign: 'center',
//                 maxWidth: '80%'
//               }}
//             >
//               אנא מלאו את הפרטים הבאים כדי להירשם למערכת בית הספר
//             </Typography>
//           </LogoContainer>

//           <Grid container spacing={isMobile ? 1 : 3}>
//             <Grid item xs={12} sm={6}>
//               <StyledTextField
//                 fullWidth
//                 label="שם משפחה"
//                 variant="outlined"
//                 value={parent.familyLastName}
//                 onChange={x => setParent({ ...parent, familyLastName: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <StyledTextField
//                 fullWidth
//                 label="שם אב התלמידה"
//                 variant="outlined"
//                 value={parent.fatherFirstName}
//                 onChange={x => setParent({ ...parent, fatherFirstName: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <StyledTextField
//                 fullWidth
//                 label="שם אם התלמידה"
//                 variant="outlined"
//                 value={parent.motherFirstName}
//                 onChange={x => setParent({ ...parent, motherFirstName: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <StyledTextField
//                 fullWidth
//                 label="מייל"
//                 variant="outlined"
//                 type="email"
//                 value={parent.mail}
//                 onChange={x => setParent({ ...parent, mail: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <StyledTextField
//                 fullWidth
//                 label="כתובת"
//                 variant="outlined"
//                 value={parent.address}
//                 onChange={x => setParent({ ...parent, address: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <StyledTextField
//                 fullWidth
//                 label="טלפון בית"
//                 variant="outlined"
//                 value={parent.homeNumberPhone}
//                 onChange={x => setParent({ ...parent, homeNumberPhone: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <StyledTextField
//                 fullWidth
//                 label="פלאפון אב"
//                 variant="outlined"
//                 value={parent.numberPhone1}
//                 onChange={x => setParent({ ...parent, numberPhone1: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <StyledTextField
//                 fullWidth
//                 label="פלאפון אם"
//                 variant="outlined"
//                 value={parent.numberPhone2}
//                 onChange={x => setParent({ ...parent, numberPhone2: x.target.value })}
//                 InputProps={{ sx: { direction: 'rtl' } }}
//                 InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
//               />
//             </Grid>
//           </Grid>

//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <SubmitButton
//                 variant="contained"
//                 size="large"
//                 onClick={enter}
//                 disabled={loading}
//                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <HowToRegIcon />}
//               >
//                 {loading ? "שולח נתונים..." : "שלח טופס הרשמה"}
//               </SubmitButton>
//             </motion.div>
//           </Box>

//           <Box sx={{ mt: 3, textAlign: 'center' }}>
//             <Typography variant="body2" color="text.secondary">
//               כבר יש לך חשבון?{' '}
//               <Button 
//                 color="primary" 
//                 onClick={() => navigate('/login')}
//                 sx={{ 
//                   fontWeight: 'bold',
//                   color: teal[700],
//                   '&:hover': {
//                     backgroundColor: 'transparent',
//                     textDecoration: 'underline'
//                   }
//                 }}
//               >
//                 התחבר כאן
//               </Button>
//             </Typography>
//           </Box>
//         </StyledPaper>
//       </motion.div>

//       <Snackbar 
//         open={openSnackbar} 
//         autoHideDuration={6000} 
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleCloseSnackbar} 
//           severity={snackbarSeverity} 
//           sx={{ width: '100%' }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// 5555555555555555555555555555555555555555555555555555


// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addParentThunk } from "../redux/parentsSlice/addParentThunk";
// import { useNavigate } from "react-router-dom";
// import { styled } from '@mui/system';
// import { Button, TextField, Typography, Container, Box, Grid } from '@mui/material';

// // Styled components
// const StyledContainer = styled(Container)(({ theme }) => ({
//     marginTop: theme.spacing(8),
//     padding: theme.spacing(4),
//     backgroundColor: '#e3f2fd',
//     borderRadius: '15px',
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
//     transition: 'transform 0.3s',
//     '&:hover': {
//         transform: 'scale(1.02)',
//     },
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//     margin: theme.spacing(1, 0),
//     '& .MuiOutlinedInput-root': {
//         borderRadius: '20px',
//         '& fieldset': {
//             borderColor: '#1976d2',
//         },
//         '&:hover fieldset': {
//             borderColor: '#ffcc00',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: '#ffcc00',
//         },
//         '& input': {
//             textAlign: 'right',
//             paddingRight: theme.spacing(2),
//         },
//     },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//     marginTop: theme.spacing(2),
//     backgroundColor: '#1976d2',
//     color: '#ffffff',
//     borderRadius: '25px',
//     padding: theme.spacing(1.5, 4),
//     fontSize: '18px',
//     transition: 'background-color 0.3s, transform 0.3s',
//     '&:hover': {
//         backgroundColor: '#ffcc00',
//         transform: 'scale(1.05)',
//     },
// }));

// const ErrorMessage = styled(Typography)(({ theme }) => ({
//     color: 'red',
//     marginTop: theme.spacing(1),
//     textAlign: 'center',
// }));

// export const Registration = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const stateParent = useSelector(state => state.parents.parent);
//     const [flag, setFlag] = useState(false);
//     const [error, setError] = useState('');
//     const [parent, setParent] = useState({
//         id: 0,
//         accepted: false,
//         familyLastName: "",
//         motherFirstName: "",
//         homeNumberPhone: "",
//         numberPhone1: "",
//         numberPhone2: "",
//         fatherFirstName: "",
//         mail: "",
//         address: ""
//     });

//     const validateEmail = (email) => {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };

//     const validatePhone = (phone) => {
//         const regex = /^\d{9,10}$/; // Assuming a 10-digit phone number
//         return regex.test(phone);
//     };

//     const validateFields = () => {
//         if (!parent.familyLastName || !parent.motherFirstName || !parent.fatherFirstName || !parent.mail || !parent.address) {
//             setError("השלם את הפרטים החסרים במלואם");
//             return false;
//         }
//         if (!validateEmail(parent.mail)) {
//             setError("מייל לא תקין");
//             return false;
//         }
//         if (!validatePhone(parent.homeNumberPhone) || !validatePhone(parent.numberPhone1) || !validatePhone(parent.numberPhone2)) {
//             setError("מספר טלפון לא תקין");
//             return false;
//         }
//         setError('');
//         return true;
//     };

//     const enter = () => {
//         setFlag(true);
//         if (validateFields()) {
//             dispatch(addParentThunk(parent));
//         }
//     };

//     useEffect(() => {
//         if (flag === true) {
//             navigate('/parent');
//         }
//     }, [stateParent]);

//     return (
//         <StyledContainer component="main" maxWidth="xs">
//             <Box textAlign="center" dir="rtl">
//                 <Typography variant="h4" color="#1976d2" gutterBottom>הרשמה להורים</Typography>
//                 {error && <ErrorMessage>{error}</ErrorMessage>}
//                 <Grid container spacing={2} direction="column">
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="שם משפחה"
//                             onChange={x => setParent({ ...parent, familyLastName: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="שם אם התלמיד"
//                             onChange={x => setParent({ ...parent, motherFirstName: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="שם אב התלמיד"
//                             onChange={x => setParent({ ...parent, fatherFirstName: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="מייל"
//                             onChange={x => setParent({ ...parent, mail: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="כתובת מגורים"
//                             onChange={x => setParent({ ...parent, address: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="טלפון"
//                             onChange={x => setParent({ ...parent, homeNumberPhone: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="מספר פלאפון1"
//                             onChange={x => setParent({ ...parent, numberPhone1: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledTextField
//                             variant="outlined"
//                             fullWidth
//                             label="מספר פלאפון2"
//                             onChange={x => setParent({ ...parent, numberPhone2: x.target.value })}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <StyledButton
//                             fullWidth
//                             variant="contained"
//                             onClick={enter}
//                         >
//                             הרשמה
//                         </StyledButton>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </StyledContainer>
//     );
// };




import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addParentThunk } from "../redux/parentsSlice/addParentThunk";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import { TextField, Button, Box, Typography, Container, Paper, Grid, CircularProgress, Avatar, Snackbar, Alert, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from "motion/react";
import SchoolIcon from '@mui/icons-material/School';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { yellow, blue } from '@mui/material/colors';

// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    background: `linear-gradient(135deg, ${yellow[50]} 0%, ${blue[50]} 100%)`,
    border: `1px solid ${yellow[200]}`,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: `linear-gradient(90deg, ${yellow[400]} 0%, ${blue[400]} 100%)`,
    }
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: yellow[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(1),
    boxShadow: '0 4px 12px rgba(255, 193, 7, 0.3)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2.5),
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: yellow[300],
        },
        '&.Mui-focused fieldset': {
            borderColor: yellow[500],
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: yellow[700],
    },
    direction: 'rtl',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(90deg, ${yellow[600]} 0%, ${blue[600]} 100%)`,
    padding: '12px 24px',
    borderRadius: '8px',
    marginTop: theme.spacing(2),
    transition: 'all 0.3s ease',
    '&:hover': {
        background: `linear-gradient(90deg, ${yellow[700]} 0%, ${blue[700]} 100%)`,
        boxShadow: '0 6px 12px rgba(255, 193, 7, 0.3)',
        transform: 'translateY(-2px)',
    },
}));

export const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateParent = useSelector(state => state.parents.parent);
    const [flag, setFlag] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("error");
    const isMobile = useMediaQuery('(max-width:600px)');

    const [parent, setParent] = useState({
        id: 0,
        accepted: false,
        familyLastName: "",
        motherFirstName: "",
        homeNumberPhone: "",
        numberPhone1: "",
        numberPhone2: "",
        fatherFirstName: "",
        mail: "",
        address: ""
    });

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        return /^\d{9,10}$/.test(phone);
    };

    const enter = () => {
        // Validate form
        if (parent.address === "" || parent.familyLastName === "" ||
            parent.fatherFirstName === "" || parent.motherFirstName === "" ||
            parent.mail === "" || parent.homeNumberPhone === "" ||
            parent.numberPhone1 === "" || parent.numberPhone2 === "") {
            setSnackbarMessage("אנא השלם את כל השדות הנדרשים");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }
        if (!validateEmail(parent.mail)) {
            setSnackbarMessage("אנא הזן כתובת אימייל תקינה");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }
        if (!validatePhone(parent.homeNumberPhone) ||
            !validatePhone(parent.numberPhone1) ||
            !validatePhone(parent.numberPhone2)) {
            setSnackbarMessage("אנא הזן מספרי טלפון תקינים (9-10 ספרות)");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            return;
        }
        setLoading(true);
        setFlag(true);

        // Show success message
        setSnackbarMessage("הטופס נשלח בהצלחה!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        // Dispatch action
        setTimeout(() => {
            dispatch(addParentThunk(parent));
        }, 1500);
    };

    useEffect(() => {
        if (flag === true && stateParent) {
            navigate('/parent');
        }
    }, [stateParent, flag, navigate]);

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <StyledPaper elevation={3}>
                    <LogoContainer>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                        >
                            <StyledAvatar>
                                <SchoolIcon fontSize="large" />
                            </StyledAvatar>
                        </motion.div>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                color: yellow[800],
                                textAlign: 'center'
                            }}
                        >
                            הרשמה לבית הספר
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                                color: yellow[700],
                                textAlign: 'center',
                                maxWidth: '80%'
                            }}
                        >
                            אנא מלאו את הפרטים הבאים כדי להירשם למערכת בית הספר
                        </Typography>
                    </LogoContainer>
                    <Grid container spacing={isMobile ? 1 : 3}>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                fullWidth
                                label="שם משפחה"
                                variant="outlined"
                                value={parent.familyLastName}
                                onChange={x => setParent({ ...parent, familyLastName: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                fullWidth
                                label="שם אב התלמידה"
                                variant="outlined"
                                value={parent.fatherFirstName}
                                onChange={x => setParent({ ...parent, fatherFirstName: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                fullWidth
                                label="שם אם התלמידה"
                                variant="outlined"
                                value={parent.motherFirstName}
                                onChange={x => setParent({ ...parent, motherFirstName: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StyledTextField
                                fullWidth
                                label="מייל"
                                variant="outlined"
                                type="email"
                                value={parent.mail}
                                onChange={x => setParent({ ...parent, mail: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                fullWidth
                                label="כתובת"
                                variant="outlined"
                                value={parent.address}
                                onChange={x => setParent({ ...parent, address: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                fullWidth
                                label="טלפון בית"
                                variant="outlined"
                                value={parent.homeNumberPhone}
                                onChange={x => setParent({ ...parent, homeNumberPhone: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                fullWidth
                                label="פלאפון אב"
                                variant="outlined"
                                value={parent.numberPhone1}
                                onChange={x => setParent({ ...parent, numberPhone1: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StyledTextField
                                fullWidth
                                label="פלאפון אם"
                                variant="outlined"
                                value={parent.numberPhone2}
                                onChange={x => setParent({ ...parent, numberPhone2: x.target.value })}
                                InputProps={{ sx: { direction: 'rtl' } }}
                                InputLabelProps={{ sx: { right: 14, left: 'auto', transformOrigin: 'right' } }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <SubmitButton
                                variant="contained"
                                size="large"
                                onClick={enter}
                                disabled={loading}
                                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <HowToRegIcon />}
                            >
                                {loading ? "שולח נתונים..." : "שלח טופס הרשמה"}
                            </SubmitButton>
                        </motion.div>
                    </Box>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            כבר יש לך חשבון?{' '}
                            <Button
                                color="primary"
                                onClick={() => navigate('/login')}
                                sx={{
                                    fontWeight: 'bold',
                                    color: yellow[700],
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                התחבר כאן
                            </Button>
                        </Typography>
                    </Box>
                </StyledPaper>
            </motion.div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};