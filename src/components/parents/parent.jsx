import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getAcceptedSons } from "../../redux/parentsSlice/student/GetAcceptedSonsThunk";
import { parentsSlice } from "../../redux/parentsSlice/parentsSlice";
import { useEffect, useState } from "react";
import { STORE } from "../../redux/store";
import "./parent.css";


export const Parent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const parent = useSelector(state => state.parents.parent);
    const sonsList = useSelector(state => state.parents.childrenList);
    const [code, setCode] = useState(false);

    const getChildren = async () => {
        await dispatch(getAcceptedSons(parent.id));
    };

    useEffect(() => {
        getChildren();
    }, []);

    return (
        <div id="parent" className="parent-container">
            <h1 className="parent-welcome">😁 שלום וברכה להורים</h1>
            <nav className="parent-nav" onClick={() => setCode(false)}>
                <button className="nav-button" onClick={() => {  navigate('payment'); }}>מעבר לתשלום</button>
                <button className="nav-button" onClick={() => { navigate('newStudent'); }}>רישום תלמידה חדשה לבית הספר</button>
                <button className="nav-button" onClick={() => {navigate('schoolLife'); }}>מהווי בית הספר</button>
                <button className="nav-button" onClick={() => { navigate('calendar'); }}>אירועי החודש</button>
                <button className="nav-button" onClick={() => {
                    if (sonsList.length === 1) {
                        STORE.dispatch(parentsSlice.actions.setCurrentStudent(sonsList[0]));
                        navigate(`/parent/child`);
                    } else {
                        navigate('children');
                    }
                }}>הילדים המתוקים שלנו</button>
            </nav>
            <div className="code-section">
                <button className="code-button" onClick={() => {  setCode(true); }}>לצפיה בקוד האישי שלך</button>
                {code && <div className="code-display">{parent.id}: הקוד האישי הוא</div>}
            </div>
            <Outlet />
        </div>
    );
};