import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { getNotAcceptedStudents } from "../../redux/managerSlice/students/GetNotAcceptedStudentsListThunk";
import { useDispatch, useSelector } from "react-redux";

// function createData(name, calories, fat, carbs, protein, price,) {
//     return {
//         name,calories,fat,carbs,protein,price,history: [
//             {date: '2020-01-05',customerId: '11091700',amount: 3,},
//             {date: '2020-01-02',customerId: 'Anonymous',amount: 1,},],
//     };
// }

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.class}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                               הורים
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>כתובת</TableCell>
                                        <TableCell>דואר אלקטרוני</TableCell>
                                        <TableCell align="right">מספר פלאפון האם</TableCell>
                                        <TableCell align="right">מספר פלאפון האב</TableCell>
                                        <TableCell>מספר טלפון</TableCell>
                                        <TableCell>שם משפחה</TableCell>
                                        <TableCell align="right">שם האם</TableCell>
                                        <TableCell align="right">שם האב</TableCell>
                                        <TableCell align="right">רשומים</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {row.history.map((historyRow) => ( */}
                                        <TableRow key={row.parents.id}>
                                            <TableCell component="th" scope="row">
                                                {row.parents.address}
                                            </TableCell>
                                            <TableCell>{row.parents.mail}</TableCell>
                                            <TableCell>{row.parents.numberPhone2}</TableCell>
                                            <TableCell align="right">{row.parents.numberPhone1}</TableCell>
                                            <TableCell align="right">{row.parents.homeNumberPhone}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.parents.familyLastName}
                                            </TableCell>
                                            <TableCell>{row.parents.motherFirstName}</TableCell>
                                            <TableCell align="right">{row.parents.fatherFirstName}</TableCell>
                                            <TableCell align="right">{String(row.parents.accepted)}</TableCell>
                                        </TableRow>
                                    {/* ))} */}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
export const CollapsibleTable = () => {

    const dispatch = useDispatch();
const notAcceptedStudents = useSelector(state => state.manager.notAcceptedStudents);
const gelabelata = async () => {
    await dispatch(getNotAcceptedStudents())
}
React.useEffect(
    () => {
        gelabelata()
    }, []
);


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="right">מספר זהות</TableCell>
                        <TableCell align="right">תאריך לידה</TableCell>
                        <TableCell align="right">כיתה</TableCell>
                        <TableCell>שם</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notAcceptedStudents?.map((student) => (
                        <Row key={student.id} row={student} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}