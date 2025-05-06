
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { acceptStudentThunk } from '../../redux/managerSlice/students/acceptStudentThunk';
import { updateStudentThunk } from '../../redux/managerSlice/students/updateStudentThunk';
import { Navigate } from 'react-router-dom';
export const Student = (props) => {
    const { s, refresh } = props;
    const dispatch = useDispatch();
    const [student, setStudent] = useState(s)
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
    return <tr>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <input value={student.name} onChange={x => setStudent({ ...student, name: x.target.value })}></input> : s.name}</td>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <input value={student.class} onChange={x => setStudent({ ...student, class: x.target.value })}></input> : s.class}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.id}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.familyLastName}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.fatherFirstName}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.motherFirstName}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.homeNumberPhone}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.numberPhone1}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.numberPhone2}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.mail}</td>
        <td onClick={() => { setEditFlag(true) }}>{student.parents.address}</td>
        <td onClick={() => { setEditFlag(true) }}>{String(student.parents.accepted)}</td>
        <td>{!s.accepted ? <button onClick={() => { dialogAcceptedRef.current.showModal() }}>לאשור קבלת תלמיד </button> : ''}</td>
        <td>
            <label id='x' onClick={() => { dialogDeleteRef.current.showModal() }}>✖</label>
            {editFlag && <label onClick={() => { dialogEditRef.current.showModal() }}>   🖊</label>}
            <dialog ref={dialogAcceptedRef} >
                <label> ? {s.name} האם אתה בטוח שברצונך לאשר את קבלת התלמידה </label>
                <br />
                <button className="button" onClick={() => {
                    dispatch(acceptStudentThunk({ id: s.id, flag: !s.accepted }))
                    closeDialog(dialogAcceptedRef)
                }}>כן</button>
                <br />
                <button className="button" onClick={() => closeDialog(dialogAcceptedRef)}>לא</button>
            </dialog>
            <dialog ref={dialogDeleteRef} >
                <label> ? מהמערכת {s.name} האם אתה בטוח שברצונך למחוק פרטי את התלמיד </label>
                <br />
                <button className="button" onClick={() => {
                    dispatch(acceptStudentThunk({ id: s.id, flag: false }))
                    closeDialog(dialogDeleteRef)
                    refresh()
                }}>כן</button>
                <br />
                <button className="button" onClick={() => closeDialog(dialogDeleteRef)}>לא</button>
            </dialog>
            <dialog ref={dialogEditRef} >
                <label> ?  האם אתה בטוח שברצונך לעדכן את התלמיד {s.name}</label>
                <br />
                <button className="button" onClick={() => {
                    dispatch(updateStudentThunk(student))
                    closeEdit()
                    refresh()
                }}>כן</button>
                <br />
                <button className="button" onClick={() => { closeEdit() }}>לא</button>
            </dialog>
        </td>
    </tr>


}