import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationsListThunk } from "../../redux/managerSlice/registrations/getRegistrationsListThunk";
import { useNavigate } from "react-router-dom";

export const RegistrationsM = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const event = useSelector(state => state.manager.currentEvent);
    const registrationsList = useSelector(state => state.manager.registrationsList);
    const [classesNumArray, setClassesNumArray] = useState([]);
    const [classN, setClassN] = useState(-1);
    const registrationsCount = registrationsList.length;
    const minClass = event.minClass;
    const maxClass = event.maxClass;
    const classesArray = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח']

    useEffect(
        () => {
            getRegistrations()
            createClassesRange()
        }, []
    );
    const getRegistrations = async () => {
        await dispatch(getRegistrationsListThunk(event.id))
    }
    const createClassesRange = async () => {
        console.log(registrationsCount);
        if (registrationsCount > 0) {
            if (minClass === maxClass)
                setClassN(parseInt(minClass))
            else {
                var array = []
                for (let index = minClass; index <= maxClass; index++) {
                    array.push(index);
                }
                setClassesNumArray(array)
            }
        }
    }

    return <div>
        {minClass !== maxClass &&
            classesNumArray?.map(c => <button key={c} onClick={() => setClassN(parseInt(c))}>
                {classesArray[parseInt(c) - 1]}</button>)}
        {classN !== -1 && registrationsCount !== 0 ?
            <div>
                <h1>כיתה {classesArray[parseInt(classN) - 1]} הנהדרת</h1>
                {!registrationsList?.some(student => student.class === classN) ?
                    <label>אין הרשמות מכיתה זו</label> :
                    <table>
                        <thead>
                            <tr>
                                <th>שם</th>
                                <th>שם משפחה</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrationsList?.map(student => student.class === classN &&
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td onClick={() => navigate(`/manager/paerntM/id${student.parents.id}`)}>{student.parents.familyLastName}</td>
                                </tr>)}
                        </tbody>
                    </table>}
            </div> : ""}
        {registrationsCount > 0 ?
            <label>לארוע זה {registrationsCount} נרשמים</label> : <label>אין לארוע זה נרשמים</label>}
    </div>
}