import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { parentsSlice } from "../../redux/parentsSlice/parentsSlice";
import { STORE } from "../../redux/store"

export const Children = () => {
    const navigate = useNavigate();
    const sonsList = useSelector(state => state.parents.childrenList);
    return <div id="childrenList">
        {sonsList.map(s =>
            <button key={s.id} onClick={() => { STORE.dispatch(parentsSlice.actions.setCurrentStudent(s)); navigate(`/parent/child`) }}>{s.name}</button>
        )}
    </div>
}