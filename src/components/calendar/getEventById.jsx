import { useSelector, useDispatch } from "react-redux";
import { getEventsListThunk } from "../../redux/managerSlice/events/getEventsListThunk"
import { useEffect } from "react";

export const GetEventById = (props) => {

    const { date } = props;
    const eventsList = useSelector(state => state.manager.eventsList);
    const dispatch = useDispatch();
    const getData = async () => {
        await dispatch(getEventsListThunk())
    }
    useEffect(
        () => {
            getData()
        }, []
    );
    return <div>

        {eventsList?.map(e => new Date(e.date).toLocaleDateString() === new Date(date).toLocaleDateString() &&
            <div key={e.id}>
                {e.name}
            </div>)}

    </div>
}