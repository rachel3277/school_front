import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { updateParentsThunk } from '../../redux/managerSlice/parents/updateParentsThunk';
export const PaerntM = (props) => {
    const { p, refresh, edit } = props;
    const dispatch = useDispatch();
    const [parents, setparents] = useState(p)
    const [editFlag, setEditFlag] = useState(false)
    const dialogEditRef = useRef(false);
    const dialogAcceptedRef = useRef(false);
    //get dialog and close him
    function closeDialog(dialog) {
        dialog.current.close()
    }
    //close edit dialog and remove edit sign
    function closeEdit() {
        setEditFlag(false)
        closeDialog(dialogEditRef)
    }
    return <tr>
        <td>{p.id}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input value={parents.fatherFirstName} onChange={x => setparents({ ...parents, fatherFirstName: x.target.value })}></input> : p.fatherFirstName}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input value={parents.motherFirstName} onChange={x => setparents({ ...parents, motherFirstName: x.target.value })}></input> : p.motherFirstName}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input value={parents.familyLastName} onChange={x => setparents({ ...parents, familyLastName: x.target.value })}></input> : p.familyLastName}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input type="tel" value={parents.homeNumberPhone} onChange={x => setparents({ ...parents, homeNumberPhone: x.target.value })}></input> : p.homeNumberPhone}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input type="tel" value={parents.numberPhone1} onChange={x => setparents({ ...parents, numberPhone1: x.target.value })}></input> : p.numberPhone1}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input type="tel" value={parents.numberPhone2} onChange={x => setparents({ ...parents, numberPhone2: x.target.value })}></input> : p.numberPhone2}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input type='email' value={parents.mail} onChange={x => setparents({ ...parents, mail: x.target.value })}></input> : p.mail}</td>
        <td onClick={() => {if(edit === true) setEditFlag(true) }}>{editFlag === true ? <input value={parents.address} onChange={x => setparents({ ...parents, address: x.target.value })}></input> : p.address}</td>
        <td /*onClick={() => { dialogAcceptedRef.current.showModal() }}*/>{String(p.accepted)}</td>
        <td>
            {editFlag && <label onClick={() => { dialogEditRef.current.showModal() }}>   🖊</label>}
            <dialog ref={dialogEditRef} >
                <label> ?  האם אתה בטוח שברצונך לעדכן את השם {p.name}</label>
                <br/>
                <button className="button" onClick={() => {
                    dispatch(updateParentsThunk(parents))
                    closeEdit()
                    refresh()
                }}>כן</button>
                <br />
                <button className="button" onClick={() => { closeEdit() }}>לא</button>
            </dialog>
        </td>
    </tr>


}