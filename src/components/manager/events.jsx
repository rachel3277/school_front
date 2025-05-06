import { Event } from "./event";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addEventThunk } from "../../redux/managerSlice/events/addEventThunk";
import { getEventsListThunk } from "../../redux/managerSlice/events/getEventsListThunk";
import { STORE } from "../../redux/store";
import { AddEvent } from "./addEvent";
import { managerSlice } from "../../redux/managerSlice/managerSlice";

export const Events = () => {
    const [addEvent, setAddEvent] = useState(false)
    const [name, setName] = useState('')
    const [refresh, setRefresh] = useState(false)
    const searchEventsList = useSelector(state => state.manager.searchEventsList);
    const dispatch = useDispatch();
    const getData = async () => {
        await dispatch(getEventsListThunk())
    }
    useEffect(
        () => {
            getData()
        }, [/*addEvent*/]
    );
    function refreshFunction() {   
        setRefresh(!refresh)
    }
    async function closeAddEvent() {
        console.log(addEvent);
        await setAddEvent(false)
    }
    const saveEvent = (event) => {
        console.log("save");
        dispatch(addEventThunk(event))
        closeAddEvent();
        refreshFunction()
    }
    return <><div>
        <div>
            <button onClick={() => STORE.dispatch(managerSlice.actions.setAllEvents())}>כל הארועים</button>
            <button onClick={() => STORE.dispatch(managerSlice.actions.setTodayEvents())}>ארועי היום</button>
            <button onClick={() => STORE.dispatch(managerSlice.actions.setprevEvents())}>ארועים קודמים</button>
            <button onClick={() => STORE.dispatch(managerSlice.actions.setNextEvents())}>ארועים באים</button>
            <label>
                <select name="selectedEventType" defaultValue="יום שדה"
                    onChange={value => STORE.dispatch(managerSlice.actions.setEventsByName(value.target.value))}>
                    <option value="יום שדה">יום שדה</option>
                    <option value="טיול">טיול</option>
                    <option value="מבחן">מבחן</option>
                    <option value="מסיבה">מסיבה</option>
                    <option value="אסיפת הורים">אסיפת הורים</option>
                    <option value="חלוקת תעודות">חלוקת תעודות</option>
                    <option value="תערוכה">תערוכה</option>
                </select>
            </label>
            <label>
                <select name="selectedEventClasses" defaultValue="כל הכיתות"
                    onChange={value => {console.log(value.target.value);STORE.dispatch(managerSlice.actions.setEventsByClass(value.target.value))}}>
                    <option value={[1, 1]}>א</option>
                    <option value={[2, 2]}>ב</option>
                    <option value={[3, 3]}>ג</option>
                    <option value={[1, 3]}>א - ג</option>
                    <option value={[4, 4]}>ד</option>
                    <option value={[5, 5]}>ה</option>
                    <option value={[6, 6]}>ו</option>
                    <option value={[4, 6]}>ד - ו</option>
                    <option value={[7, 7]}>ז</option>
                    <option value={[8, 8]}>ח</option>
                    <option value={[7, 8]}>ז - ח</option>
                    <option value={[1, 8]}>כל הכיתות</option>
                </select>
            </label>
        </div><table>
            <thead>
                <tr>
                    <td>שם</td>
                    <td>תאריך</td>
                    <td>תיאור</td>
                    <td>מחיר</td>
                    <td>מקום</td>
                    <td>לכיתות</td>
                    <td>מחק</td>
                </tr>
            </thead>
            <tbody>
                {addEvent ? <AddEvent onClickUnSave={closeAddEvent}
                    onClickSave={saveEvent}></AddEvent> : ''}
                {searchEventsList?.map(event => { return <Event key={event.id} e={event} refresh={refreshFunction}></Event>; })}
            </tbody>
        </table><button onClick={() => setAddEvent(true)}> הוספת אירוע חדש</button>
    </div >
    </>
}