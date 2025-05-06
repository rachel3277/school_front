import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getParentThunk } from "../redux/parentsSlice/getParentThunk";
// import './login.css';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ password: "", name: "" });
    const parent = useSelector(state => state.parents.parent);
    const [flag, setFlag] = useState(false);

    function enter() {
        setFlag(true);
        if (user.password === "" || user.name === "") {
            alert("השלם את הפרטים החסרים במלואם");
        } else {
            if (user.password === "1234" && user.name === "מנהל") {
                navigate('/manager');
            } else {
                dispatch(getParentThunk(user.password));
            }
        }
    }

    useEffect(() => {
        if (flag) {
            if (parent === null) {
                navigate('/registration');
            } else {
                navigate('/parent');
            }
        }
    }, [parent, flag, navigate]);

    return (
        <div>
            <div id="entrance">
                <label>הכנס שם מלא</label>
                <br />
                <input 
                    type="text" 
                    onChange={x => setUser({ ...user, name: x.target.value })} 
                />
                <br />
                <label>הכנס סיסמא</label>
                <br />
                <input 
                    type="password" 
                    onChange={x => setUser({ ...user, password: x.target.value })} 
                />
                <br />
                <br />
                <button id="login" onClick={enter}>לכניסה</button>
            </div>
        </div>
    );
};