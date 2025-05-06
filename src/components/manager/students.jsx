
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getAcceptedStudents } from "../../redux/managerSlice/students/GetAcceptedStudentsListThunk"
import { Student } from "./student";
import { Outlet, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';


export const Students = () => {

    const studentsList = useSelector(state => state.manager.studentsList);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [classN, setClassN] = useState(-1);
    const classesArrayNum = [1, 2, 3, 4, 5, 6, 7, 8]
    const classesArray = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח']
    useEffect(
        () => {
            dispatch(getAcceptedStudents())
        }, []
    );
    function refreshFunction() {
        setRefresh(!refresh)
    }
    return <div>

        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels>
                {classesArrayNum.map(c =>
                    <IconButton color="secondary"
                        onClick={() => setClassN(c)}>
                        {classesArray[parseInt(c) - 1]}     </IconButton>
                )}
            </BottomNavigation>
        </Box>

        <div onClick={() => navigate('/manager/students')}>
            <div id="buttonClass">
                <button onClick={() => setClassN(1)}>א</button>
                <button onClick={() => setClassN(2)}>ב</button>
                <button onClick={() => setClassN(3)}>ג</button>
                <button onClick={() => setClassN(4)}>ד</button>
                <button onClick={() => setClassN(5)}>ה</button>
                <button onClick={() => setClassN(6)}>ו</button>
                <button onClick={() => setClassN(7)}>ז</button>
                <button onClick={() => setClassN(8)}>ח</button>
            </div>
            {classN !== -1 ?
                <table>
                    <thead>
                        <tr>
                            <th>שם</th>
                            <th>משפחה</th>
                            <th>כיתה</th>
                            <th>?האם למחוק את פרטי התלמיד מהמערכת</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsList?.map(student => student.class === classN &&
                            <Student key={student.id} s={student}
                                refresh={refreshFunction} />)}
                    </tbody>
                </table> : ""}
        </div>
        <div>
            <button onClick={() => { setClassN(-1); navigate('notAcceptedStudents') }}>רשימת תלמידים חדשים שנרשמו</button>
        </div>
        <Outlet />
    </div>

}