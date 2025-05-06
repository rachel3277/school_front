import { useDispatch, useSelector } from "react-redux";
import { STORE } from "../../redux/store"
import { parentsSlice } from '../../redux/parentsSlice/parentsSlice';
import { addRegistrationThunk } from "../../redux/parentsSlice/registrations/addRegistrationThunk"

export const Payment = () => {
    const registrationsList = useSelector(state => state.parents.registrationsList);
    const dispatch = useDispatch();

    const addRegistration = async (registration) => {
        await dispatch(addRegistrationThunk(registration))
    }
    const sendRegistration = async () => {
        for (let index = 0; index < registrationsList.length; index++) {
            const r = registrationsList[index];
            await addRegistration({
                eventId: r[0].id,
                studentId: r[1].id,
                date: new Date()
            })
        }
    }

    return <div>
        <table>
            <thead>
                <tr>
                    <td>בטול ההרשמה</td>
                    <td>שם התלמיד</td>
                    <td>שם הארוע</td>
                    <td>תאריך</td>
                    <td>מקום</td>
                    <td>מחיר</td>
                </tr>
            </thead>
            <tbody>
                {registrationsList?.map(r => <tr key={[r[0].id, r[1].id]}>
                    <td onClick={() => STORE.dispatch(parentsSlice.actions.deleteRegistration(r))}>🌸</td>
                    <td>{r[1].name}</td>
                    <td>{r[0].name}</td>
                    <td>{r[0].date}</td>
                    <td>{r[0].place}</td>
                    <td>{r[0].price}</td>
                </tr>)}
            </tbody>
        </table>
        <label>סך הכל לתשלום {registrationsList.reduce((a, v) => a = a + v[0].price, 0)}</label>
        <button onClick={() => {
            sendRegistration()
            STORE.dispatch(parentsSlice.actions.deleteRegistrations())
        }}>למעבר לתשלום</button>
        🌺 ראש חודש איר
    </div>
}