import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteEventThunk } from "../../redux/managerSlice/events/deleteEventThunk";
import { updateEventThunk } from '../../redux/managerSlice/events/updateEventThunk';
import { getRegistrationsListThunk } from '../../redux/managerSlice/registrations/getRegistrationsListThunk';
import { useNavigate } from 'react-router-dom';
import { STORE } from '../../redux/store';
import { managerSlice } from '../../redux/managerSlice/managerSlice';
export const Event = (props) => {
    const { e, refresh } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [event, setEvent] = useState(e)
    const [classNum, setClassNum] = useState(0)
    const [editFlag, setEditFlag] = useState(false)
    const dialogDeleteRef = useRef(false);
    const dialogEditRef = useRef(false);
    const classesArray = props;
    const minClassesNumberArray = [1, 2, 3, 1, 4, 5, 6, 4, 7, 8, 7, 1];
    const maxClassesNumberArray = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8];
    var arr1 = [11, 22, 33, 13, 44, 55, 66, 46, 77, 88, 78, 18]
    const arr2 = ["א", "ב", "ג", "א-ג", "ד", "ה", "ו", "ד-ו", "ז", "ח", "ז-ח", "א-ח"]
    useEffect(
        () => {
            let arr1Index = arr1.indexOf(e.minClass * 10 + e.maxClass)
            if (arr1Index != -1)
                setClassNum(arr1Index)
        }, []
    );
    //get dialog and close him
    function closeDialog(dialog) {
        dialog.current.close()
    }
    //close edit dialog and remove edit sign
    function closeEdit() {
        setEditFlag(!editFlag)
        closeDialog(dialogEditRef)
    }
    // function classFromRange(num) {
    //     console.log(arr1.findIndex(num));
    //     // let arr1Index = arr1.findIndex(num)
    //     // if (arr1Index != -1)
    //     //     return arr2[arr1Index]
    //     // return -1    
    // }
    return <tr>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <label value={event.name} onChange={x => {
            setEvent({ ...event, name: x.target.value })
        }}>
            <select name="selectedEventType" defaultValue={event.name}>
                <option value="יום שדה">יום שדה</option>
                <option value="טיול">טיול</option>
                <option value="מבחן">מבחן</option>
                <option value="מסיבה">מסיבה</option>
                <option value="מסיבת סידור">מסיבת סידור</option>
                <option value="מסיבת בת מצוה">מסיבת בת מצווה</option>
                <option value="מסיבת גמר">מסיבת גמר</option>
                <option value="אסיפת הורים">אסיפת הורים</option>
                <option value="חלוקת תעודות">חלוקת תעודות</option>
                <option value="תערוכה">תערוכה</option>
                <option value="אחר">אחר</option>
            </select>
        </label> : e.name}</td>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <input type='date' value={event.date} onChange={x => setEvent({ ...event, date: x.target.value })}></input> : e.date}</td>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <input value={event.description} onChange={x => setEvent({ ...event, description: x.target.value })}></input> : e.description}</td>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <input type='number' value={event.price} onChange={x => setEvent({ ...event, price: x.target.value })}></input> : e.price}</td>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <input value={event.place} onChange={x => setEvent({ ...event, place: x.target.value })}></input> : e.place}</td>
        <td onClick={() => { setEditFlag(true) }}>{editFlag === true ? <label value={event.maxClass} onChange={x => {
            setEvent({ ...event, minClass: minClassesNumberArray[x.target.value], maxClass: maxClassesNumberArray[x.target.value] })
            setClassNum(x.target.value)
        }}>
            <select name="selectedEventClasses" defaultValue={classNum}>
                <option value={0}>א</option>
                <option value={1}>ב</option>
                <option value={2}>ג</option>
                <option value={3}>א - ג</option>
                <option value={4}>ד</option>
                <option value={5}>ה</option>
                <option value={6}>ו</option>
                <option value={7}>ד - ו</option>
                <option value={8}>ז</option>
                <option value={9}>ח</option>
                <option value={10}>ז - ח</option>
                <option value={11}>כל הכיתות</option>
            </select>
        </label> : arr2[classNum]}</td>
        <td>
            <label onClick={() => { dialogDeleteRef.current.showModal() }}>✖</label>
            {editFlag && <label onClick={() => { dialogEditRef.current.showModal() }}>   🖊</label>}
            <dialog ref={dialogDeleteRef} >
                <label> ?  האם אתה בטוח שברצונך למחוק את הארוע {e.name}</label>
                <br />
                <button onClick={() => {
                    dispatch(deleteEventThunk(e.id))
                    closeDialog(dialogDeleteRef)
                    refresh()
                }}>כן</button>
                <br />
                <button onClick={() => closeDialog(dialogDeleteRef)}>לא</button>
            </dialog>

            <dialog ref={dialogEditRef} >
                <label> ?  האם אתה בטוח שברצונך לעדכן את הארוע {e.name}</label>
                <br />
                <button onClick={() => {
                    dispatch(updateEventThunk(event))
                    closeEdit()
                    refresh()
                }}>כן</button>
                <br />
                <button onClick={() => { closeEdit() }}>לא</button>
            </dialog>
        </td>
        <td onClick={() => {
                   STORE.dispatch(managerSlice.actions.setCurrentEvent(event));
                   navigate(`/manager/registrationsM`)
                }}>
            הרשמות
        </td>
    </tr>
}