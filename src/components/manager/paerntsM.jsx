import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getParentsListThunk } from "../../redux/managerSlice/parents/getParentsListThunk"
import { PaerntM } from "./paerntM";
import { useParams } from "react-router-dom";

export const PaerntsM = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const parentsList = useSelector(state => state.manager.parentsList);
    const [refresh, setRefresh] = useState(false)
    const refInput = useRef(null);

    const getData = async () => {
        await dispatch(getParentsListThunk())
    }
    useEffect(
        () => {
            getData()
        }, []
    );

    function refreshFunction() {
        setRefresh(!refresh)
    }

    return <div>
        <table id="tableParent">
            <thead>
                <tr>
                    <td>קוד הורים</td>
                    <td>שם האב</td>
                    <td>שם האם</td>
                    <td>שם משפחה</td>
                    <td>מספר טלפון</td>
                    <td>מספר פלאפון האב</td>
                    <td>מספר פלאפון האם</td>
                    <td>דואר אלקטרוני</td>
                    <td>כתובת</td>
                    <td>התקבל</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {parentsList?.map(parent =>  
                        <PaerntM key={parent.id} p={parent} refresh={refreshFunction} edit={true}></PaerntM>
                    )
                }
            </tbody>
        </table>
    </div>
}