import { createSlice } from "@reduxjs/toolkit"
import { getEventsListThunk } from "./events/getEventsListThunk"
import { getAcceptedStudents } from "./students/GetAcceptedStudentsListThunk"
import { getNotAcceptedStudents } from "./students/GetNotAcceptedStudentsListThunk"
import { deleteEventThunk } from "./events/deleteEventThunk"
import { updateEventThunk } from "./events/updateEventThunk"
import { addEventThunk } from "./events/addEventThunk"
import { acceptStudentThunk } from "./students/acceptStudentThunk"
import { updateStudentThunk } from "./students/updateStudentThunk"
import { addStudentThunk } from "./students/addStudentThunk"
import { getParentsListThunk } from "./parents/getParentsListThunk"
import { updateParentsThunk } from "./parents/updateParentsThunk"
import { searchEventsThunk } from "./events/searchEventsThunk"
import {getRegistrationsListThunk} from "./registrations/getRegistrationsListThunk"
const INITIAL_STATE = {
    eventType: 0,
    eventsList: [],
    searchEventsList: [],
    parentsList: [],
    studentsList: [],
    notAcceptedStudents: [],
    registrationsList: [],
    currentEvent: {}
}
//פונקצית עזר להשואת תאריך לתאריך הנוכחי 
//מקבלת תאריך ומחזירה לתאריך קודם -1 לנוכחי 0 ולתאריך עתידי 1
// function equales(date) {
//     today = new Date()
//     date = new Date(date)
//     if(date.getFullYear() > today )
//     console.log(new Date(date).getFullYear());
//     console.log(new Date(date).getMonth());
//     console.log(new Date(date).getDate());

// }
export const managerSlice = createSlice(
    {
        name: "manager",
        initialState: INITIAL_STATE,
        reducers: {
            setEvents: (state, action) => {
                state.eventsList = action.payload;
            },
            addEvent: (state, action) => {
                state.eventsList.push(action.payload);
            },
            setSearchEvents: (state, action) => {
                state.searchEventsList = action.payload;
            },
            setAllEvents: (state) => {
                state.searchEventsList = state.eventsList;
            },
            setEventsByName: (state, action) => {
                state.searchEventsList = state.eventsList.filter(e => e.name.trim() === action.payload.trim());
            },
            setEventsByClass: (state, action) => {
                state.searchEventsList = state.eventsList.filter(e =>
                    e.minClass
                    >= action.payload[0]
                    && e.maxClass
                    <= action.payload[1]
                    //יש בעיה ! הוא לא מסתדר עם מיון לפי יותר מתנאי אחד
                );
            },
            setNextEvents: (state) => {
                state.searchEventsList = state.eventsList.filter(e => new Date(e.date) > new Date());
            },
            setTodayEvents: (state) => {
                state.searchEventsList = state.eventsList.filter(e => new Date(e.date).toDateString() === new Date().toDateString());
            },
            setprevEvents: (state) => {
                state.searchEventsList = state.eventsList.filter(e => new Date(e.date) < new Date());
            },
            addSearchEvent: (state, action) => {
                state.searchEventsList.push(action.payload);
            },
            setParents: (state, action) => {
                state.parentsList = action.payload;
            },
            setStudents: (state, action) => {
                state.studentsList = action.payload;
            },
            addStudent: (state, action) => {
                state.studentsList.push(action.payload);
            },
            setNotAcceptedStudents: (state, action) => {
                state.notAcceptedStudentsList = action.payload;
            },
            addNotAcceptedStudent: (state, action) => {
                state.notAcceptedStudentsList.push(action.payload);
            },
            setRegistrations: (state, action) => {
                state.registrationsList = action.payload;
            },
            addRegistration: (state, action) => {
                state.registrationsList.push(action.payload);
            },
            setCurrentEvent: (state, action) => {
                state.currentEvent = action.payload;
            },
        },
        extraReducers: (builder) => {
            //events
            builder.addCase(getEventsListThunk.pending, (state) => {

            });
            builder.addCase(getEventsListThunk.fulfilled, (state, action) => {
                state.eventsList = action.payload;
                // if (state.searchEventsList.length === 0) {
                //     state.searchEventsList = action.payload
                // }
                state.searchEventsList = action.payload
            })
            builder.addCase(getEventsListThunk.rejected, (state) => {
            });
            builder.addCase(searchEventsThunk.pending, (state) => {

            });
            builder.addCase(searchEventsThunk.fulfilled, (state, action) => {
                state.eventType = action.payload;
            });
            builder.addCase(searchEventsThunk.rejected, (state) => {
            });

            builder.addCase(getAcceptedStudents.pending, (state) => {
            });
            //כאן הוספתי
            builder.addCase(getAcceptedStudents.fulfilled, (state, action) => {
                state.studentsList = action.payload;
            })
            builder.addCase(getAcceptedStudents.rejected, (state) => {
            });
            builder.addCase(deleteEventThunk.pending, (state) => {
            });
            builder.addCase(deleteEventThunk.fulfilled, (state, action) => {
                state.eventsList = action.payload;
                //🌺
                state.searchEventsList = action.payload
            })
            builder.addCase(deleteEventThunk.rejected, (state) => {
            });
            builder.addCase(updateEventThunk.pending, (state) => {
            });
            builder.addCase(updateEventThunk.fulfilled, (state, action) => {
                state.eventsList = action.payload;
                //🌺
                state.searchEventsList = action.payload
            })
            builder.addCase(updateEventThunk.rejected, (state) => {
            });
            builder.addCase(addEventThunk.pending, (state) => {
            });
            builder.addCase(addEventThunk.fulfilled, (state, action) => {
                state.eventsList = action.payload;
                //🌺
                state.searchEventsList = action.payload
            })
            builder.addCase(addEventThunk.rejected, (state) => {
            });
            builder.addCase(getNotAcceptedStudents.pending, (state) => {
            });
            builder.addCase(getNotAcceptedStudents.fulfilled, (state, action) => {
                state.notAcceptedStudents = action.payload;
            })
            builder.addCase(getNotAcceptedStudents.rejected, (state) => {
            });
            builder.addCase(acceptStudentThunk.pending, (state) => {
            });
            builder.addCase(acceptStudentThunk.fulfilled, (state, action) => {
                state.studentsList = action.payload.filter(s => s.accepted);
                state.notAcceptedStudents = action.payload.filter(s => !s.accepted)            
            })
            builder.addCase(acceptStudentThunk.rejected, (state) => {
            });
            builder.addCase(updateStudentThunk.pending, (state) => {
            });
            builder.addCase(updateStudentThunk.fulfilled, (state, action) => {
                state.studentsList = action.payload.filter(s => s.accepted);
                state.notAcceptedStudents = action.payload.filter(s => !s.accepted)  
            })
            builder.addCase(updateStudentThunk.rejected, (state) => {
            });
            builder.addCase(addStudentThunk.pending, (state) => {
            });
            builder.addCase(addStudentThunk.fulfilled, (state, action) => {
                //    state.no = action.payload;
            })
            builder.addCase(addStudentThunk.rejected, (state) => {
            });
            builder.addCase(getParentsListThunk.pending, (state) => {
            });
            builder.addCase(getParentsListThunk.fulfilled, (state, action) => {
                state.parentsList = action.payload;
            })
            builder.addCase(getParentsListThunk.rejected, (state) => {
            });
            builder.addCase(updateParentsThunk.pending, (state) => {
            });
            builder.addCase(updateParentsThunk.fulfilled, (state, action) => {
                state.parentsList = action.payload;
            })
            builder.addCase(updateParentsThunk.rejected, (state) => {
            });
            builder.addCase(getRegistrationsListThunk.pending, (state) => {
            });
            builder.addCase(getRegistrationsListThunk.fulfilled, (state, action) => {
                state.registrationsList = action.payload;
            })
            builder.addCase(getRegistrationsListThunk.rejected, (state) => {
            });
        }
    })

export const { setEvents, addEvent, setParen, setStudents, addStudent
    , setRegistrations, addRegistration, setSearchEvents, addSearchEvent,
    setEventsByClass, setCurrentEvent
} = managerSlice.actions;