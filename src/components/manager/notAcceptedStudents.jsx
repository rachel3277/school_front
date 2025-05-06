// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotAcceptedStudents } from "../../redux/managerSlice/students/GetNotAcceptedStudentsListThunk";
// import { Student } from "./student";
// export const NotAcceptedStudents = () => {
//     const dispatch = useDispatch();
//     const [refresh, setRefresh] = useState(false)
//     const notAcceptedStudents = useSelector(state => state.manager.notAcceptedStudents);
//     const gelabelata = async () => {
//         await dispatch(getNotAcceptedStudents())
//     }
//     useEffect(
//         () => {
//             gelabelata()
//         }, []
//     );
//     function refreshFunction() {
//         setRefresh(!refresh)
//     }
//     return <div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>שם</th>
//                     <th>כיתה</th>
//                                         <td>קוד הורים</td>
//                     <td>שם האב</td>
//                     <td>שם האם</td>
//                     <td>שם משפחה</td>
//                     <td>מספר טלפון</td>
//                     <td>מספר פלאפון האב</td>
//                     <td>מספר פלאפון האם</td>
//                     <td>דואר אלקטרוני</td>
//                     <td>כתובת</td>
//                     <td>התקבל</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {notAcceptedStudents?.map(student =>
//                     <Student key={student.id} s={student} refresh={refreshFunction} />)}
//             </tbody>
//         </table>
//     </div>
// }


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotAcceptedStudents } from "../../redux/managerSlice/students/GetNotAcceptedStudentsListThunk";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StudentsRow } from "./studentsTable";

export const NotAcceptedStudents = () => {

    const dispatch = useDispatch();
    const notAcceptedStudents = useSelector(state => state.manager.notAcceptedStudents);
    const [refresh, setRefresh] = useState(false)
    const getData = async () => {
        await dispatch(getNotAcceptedStudents())
    }
    useEffect(
        () => {
            getData()
        }, []
    );
    function refreshFunction() {
        setRefresh(!refresh)
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>מספר זהות</TableCell>
                        <TableCell>תאריך לידה</TableCell>
                        <TableCell>כיתה</TableCell>
                        <TableCell>שם</TableCell>
                        <TableCell>סרוב</TableCell>
                        <TableCell>קבלה</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notAcceptedStudents?.map((student) => (
                        <StudentsRow key={student.id} row={student} parents={true} refresh={refreshFunction} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}