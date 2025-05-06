import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
export const AddEvent = (props) => {
    const { onClickUnSave, onClickSave } = props;
    const [event, setEvent] = useState({ name: "יום שדה"})
    const minClassesNumberArray = [1, 2, 3, 1, 4, 5, 6, 4, 7, 8, 7, 1];
    const maxClassesNumberArray = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8];
    useEffect(()=>{
        setEvent({ ...event, minClass: minClassesNumberArray[0],maxClass: maxClassesNumberArray[0] })
    },[])
    return <tr id='all'>
        <td ><label value={event.name} onChange={x => setEvent({ ...event, name: x.target.value })}>
            <select name="selectedEventType">
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
        </label></td>
        <td ><input type='date' value={event.date || ''} onChange={x => setEvent({ ...event, date: x.target.value })}></input> </td>
        <td ><input value={event.description || ''} onChange={x => setEvent({ ...event, description: x.target.value })}></input></td>
        <td ><input type='number' value={event.price || ''} onChange={x => setEvent({ ...event, price: x.target.value })}></input></td>
        <td ><input value={event.place || ''} onChange={x => setEvent({ ...event, place: x.target.value })}></input></td>
        <td ><label value={event.classes} onChange={x => {
            setEvent({ ...event, minClass: minClassesNumberArray[x.target.value],maxClass: maxClassesNumberArray[x.target.value] })//console.log("ryui");
       console.log(event.minClass);
        console.log(event.maxClass);}
        }>
            <select>
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
        </label></td>
        <td>
            <label onClick={() => {console.log(event);onClickSave(event)}}>✔</label>
        </td>
        <td>
            <label onClick={() => onClickUnSave()}>✖</label>
        </td>
    </tr>
}