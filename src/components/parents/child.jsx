import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { GetEventsOfStudentThunk } from '../../redux/parentsSlice/registrations/GetEventsOfStudentThunk';
import { STORE } from "../../redux/store"
import { parentsSlice } from '../../redux/parentsSlice/parentsSlice';

export const Child = () => {
    const [showEvent, setShowEvent] = useState(false);
    const [showMustEvent, setShowMustEvent] = useState(false);
    const dispatch = useDispatch();
    const student = useSelector(state => state.parents.currentStudent);
    const currentStudentEvents = useSelector(state => state.parents.currentStudentEvents);

    useEffect(
        () => {
            getChildrenEvents()
        }, []
    );
    const getChildrenEvents = async () => {
        await dispatch(GetEventsOfStudentThunk(student))
    }
    return <div>
        <h1>{student.name}</h1>
        <div id='allEvents'>
            <div>
                <button onClick={() => setShowMustEvent(true)}>מבחנים</button>
                {showMustEvent === true && <div>
                    {currentStudentEvents?.filter(e => e.name.trim() === "מבחן").map(e => <div key={e.id}>
                        <label>{e.name}</label></div>)}
                </div>}
            </div>
            <div>
                <button onClick={() => setShowEvent(true)}>אירועים</button>
                {showEvent === true && <div>
                    {currentStudentEvents?.filter(e => e.name.trim() !== "מבחן").map(e => <div key={e.id}>
                        <label>{e.name}</label> <br />
                        {e.price > 0 ? <label>{e.price}</label> : <label>ללא תשלום</label>}
                        <br />
                        <label>{e.date}</label><br />
                        <label>{e.place}</label><br />
                        <label>{e.description}</label><br />
                        {e.registerate === true ? <label>{String(e.registerate)}</label> :
                            <label>
                                <button onClick={() => STORE.dispatch(parentsSlice.actions.deleteRegistration([e, student]))}>בטול הרשמה לארוע</button>
                                <button onClick={() => STORE.dispatch(parentsSlice.actions.addRegistration([e, student]))}>להרשמה לארוע</button>
                            </label>}
                    </div>)}
                </div>}
            </div>
        </div>
    </div>
}