import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addStudentThunk } from "../../redux/parentsSlice/student/addStudentThunk"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

import * as React from 'react';
import TextField from '@mui/material/TextField';

export const NewStudent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const parent = useSelector(state => state.parents.parent);
    const [ok, setOk] = useState(false);
    const [student, setStudent] = useState({
        "id": 0,
        "accepted": false,
        "name": "",
        "class": 1,
        "parentsId": parent.id
    }
    )
    const ref = useRef(false);
    const classesArrayNums = [1, 2, 3, 4, 5, 6, 7, 8]
    const classesArray = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח']

    function enter() {
        if (student.name === "") {
            ref.current.focus()
        }
        else {
            dispatch(addStudentThunk(student))
            setOk(true);
        }
    }
    return <div>
        {ok ?
            <div color="red">
                התלמיד נרשם בהצלחה ,נסה להכנס שוב לראות אם התקבלת
                <button onClick={() => { navigate('/parent') }}> ליציאה</button>
            </div>
            :
            <div>
                <TextField onChange={x => setStudent({ ...student, name: x.target.value })}
                    id="standard-suffix-shrink"
                    label="שם"
                    variant="standard"
                    slotProps={{
                        htmlInput: {
                            sx: { textAlign: 'right' },
                        },
                        input: {
                        },
                    }} />
                <br />
                <label>הכנס כיתה</label>
                <br />
                <select name="selectedEventClasses" onChange={x => setStudent({ ...student, class: x.target.value })}>
                    {classesArrayNums.map(c => <option key={c} value={c}>{classesArray[c - 1]}</option>)}
                </select>
                <br />
                <br />
                <button id="log" onClick={() => enter()}>לאישור</button>
            </div>}
    </div>
}