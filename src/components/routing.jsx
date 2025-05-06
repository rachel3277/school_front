import { Route, Routes } from "react-router-dom"
//כניסה
import { Login } from "./login"
//הרשמה למערכת
import { Registration } from "./registration"
//אזור הורים
import { Parent } from "./parents/parent"
import { NewStudent } from "./parents/newStudent"
import {Calendar} from "./calendar/Calendar"
import {Payment} from "./parents/payment"
//אזור מנהל
import { Manager } from "./manager/manager"
import { Students } from "./manager/students"
import { Events } from "./manager/events"
import { Children } from "./parents/children"
import { NotAcceptedStudents } from "./manager/notAcceptedStudents"
import { PaerntsM } from "./manager/paerntsM"
import { Child } from "./parents/child"
import { RegistrationsM } from "./manager/registrations"
import {CollapsibleTable} from"./manager/ss"

export const Routing = () => {
    return <Routes>
        <Route path="" element={<Login></Login>}></Route>
        <Route path="registration" element={<Registration />} ></Route>
        <Route path="parent" element={<Parent />}>
            <Route path="payment" element={<Payment/>}></Route>
            <Route path="newStudent" element={<NewStudent />}></Route>
            <Route path="calendar" element={<Calendar />}></Route>
            <Route path="children" element={<Children />}></Route>
            <Route path="child" element={<Child />}></Route>
        </Route>
        <Route path="manager" element={<Manager />} >
            <Route path="students" element={<Students />}>
                <Route path="notAcceptedStudents" element={<NotAcceptedStudents />} />
            </Route>
            <Route path="events" element={<Events />} />
            <Route path="paerntM" element={<PaerntsM />} />
            <Route path="paerntM/:id" element={<PaerntsM />} />
            <Route path="registrationsM" element={<RegistrationsM />} />
            {/* <Route path="Parent" element={<Parent />} /> */}
            {/* <Route path="student" element={<Student />} /> */}
            {/* <Route path="/events" element={<Events></Events>}></Route> */}
        </Route>
        <Route path="ss" element={<CollapsibleTable></CollapsibleTable>}></Route>


    </Routes>

}