import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { acceptStudentThunk } from '../../redux/managerSlice/students/acceptStudentThunk';
export const StudentsRow = (props) => {
    const { row, parents, edit, refresh } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [editFlag, setEditFlag] = useState(false)
    const dialogDeleteRef = useRef(false);
    const dialogEditRef = useRef(false);
    const dialogAcceptedRef = useRef(false);

    //get dialog and close him
    function closeDialog(dialog) {
        dialog.current.close()
    }
    //close edit dialog and remove edit sign
    function closeEdit() {
        setEditFlag(false)
        closeDialog(dialogEditRef)
    }

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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                    <IconButton color="secondary"
                        onClick={() => dialogDeleteRef.current.showModal()}>
                        <CloseIcon />
                    </IconButton>
                </TableCell>
                {parents && <TableCell>
                    <IconButton color="secondary"
                        onClick={() => dialogAcceptedRef.current.showModal()}>
                        <DoneIcon />
                    </IconButton>
                </TableCell>}
                <TableCell>
                <dialog ref={dialogAcceptedRef} >
                <label> ? {row.name} האם אתה בטוח שברצונך לאשר את קבלת התלמידה </label>
                <br />
                <button onClick={() => {
                    dispatch(acceptStudentThunk({ id: row.id, flag: !row.accepted }));
                    closeDialog(dialogAcceptedRef)
                }}>כן</button>
                <br />
                <button onClick={() => closeDialog(dialogAcceptedRef)}>לא</button>
            </dialog>
            <dialog ref={dialogDeleteRef} >
                <label> ? מהמערכת {row.name} האם אתה בטוח שברצונך למחוק פרטי את התלמיד </label>
                <br />
                <button onClick={() => {
                    dispatch(acceptStudentThunk({ id: row.id, flag: false }));
                    closeDialog(dialogDeleteRef)
                    refresh()
                }}>כן</button>
                <br />
                <button className="button" onClick={() => closeDialog(dialogDeleteRef)}>לא</button>
            </dialog>
                </TableCell>
            </TableRow>
            {parents && <TableRow>
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
                                        <TableCell>מספר פלאפון האם</TableCell>
                                        <TableCell>מספר פלאפון האב</TableCell>
                                        <TableCell>מספר טלפון</TableCell>
                                        <TableCell>שם משפחה</TableCell>
                                        <TableCell>שם האם</TableCell>
                                        <TableCell>שם האב</TableCell>
                                        <TableCell>רשומים</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.parents.id}>
                                        <TableCell>
                                            {row.parents.address}
                                        </TableCell>
                                        <TableCell>{row.parents.mail}</TableCell>
                                        <TableCell>{row.parents.numberPhone2}</TableCell>
                                        <TableCell>{row.parents.numberPhone1}</TableCell>
                                        <TableCell>{row.parents.homeNumberPhone}</TableCell>
                                        <TableCell>
                                            {row.parents.familyLastName}
                                        </TableCell>
                                        <TableCell>{row.parents.motherFirstName}</TableCell>
                                        <TableCell>{row.parents.fatherFirstName}</TableCell>
                                        <TableCell>{String(row.parents.accepted)}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>}
        </React.Fragment>
    );
}