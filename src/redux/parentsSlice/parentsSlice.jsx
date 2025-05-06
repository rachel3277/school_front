import { createSlice } from "@reduxjs/toolkit"
import { getParentThunk } from "./getParentThunk"
import { addParentThunk } from "./addParentThunk"
import { getAcceptedSons } from "./student/GetAcceptedSonsThunk"
import { getChildrenEventsthunk } from "./event/getChildrenEventsthunk"
import { GetEventsOfStudentThunk } from "./registrations/GetEventsOfStudentThunk"
import { addRegistrationThunk } from "./registrations/addRegistrationThunk.js"
const INITIAL_STATE = {
    parent:
    {
        id: 0
    },
    currentStudent: {},
    currentStudentEvents: [],
    childrenList: [],
    childEventsList: [],
    eventsList: [],
    registrationsList: []
}
export const parentsSlice = createSlice(
    {
        name: "parents",
        initialState: INITIAL_STATE,
        reducers: {
            setCurrentStudent: (state, action) => {
                state.currentStudent = action.payload;
            },
            setParent: (state, action) => {
                state.parent = action.payload;
            },
            setChildrenEventsList: (state, action) => {
                state.childEventsList = action.payload;
            },
            addChildrenEvents: (state, action) => {
            },
            addRegistration: (state, action) => {
                if (state.registrationsList.length == 0 || !state.registrationsList.some(r => r[0].id == action.payload[0].id && 
                    r[1].id == action.payload[1].id ))
                state.registrationsList.push(action.payload)
            },
            deleteRegistration: (state, action) => {
                state.registrationsList = state.registrationsList.filter(r => !(r[0].id == action.payload[0].id && 
                    r[1].id == action.payload[1].id))
            },
            deleteRegistrations: (state, action) => {
                state.registrationsList = []
            },
            // addChild: (state, action) => {
            //     state.childrenList.push()
            //     .eventsList.push(action.payload);
            // },
            // setStudents: (state, action) => {
            //     state.studentsList = action.payload;
            // },
            // addStudent: (state, action) => {
            //     state.studentsList.push(action.payload);
            // },
            // setRegistrations: (state, action) => {
            //     state.registrationsList = action.payload;
            // },
            // addRegistration: (state, action) => {
            //     state.registrationsList.push(action.payload);
            // },
        },
        extraReducers: (builder) => {
            builder.addCase(getParentThunk.pending, (state) => {

            });
            builder.addCase(getParentThunk.fulfilled, (state, action) => {
                state.parent = action.payload;
            })
            builder.addCase(getParentThunk.rejected, (state) => {
            });
            builder.addCase(addParentThunk.pending, (state) => {
            });
            builder.addCase(addParentThunk.fulfilled, (state, action) => {
                state.parent = action.payload;
            })
            builder.addCase(addParentThunk.rejected, (state) => {
            });
            builder.addCase(getAcceptedSons.pending, (state) => {
            });
            builder.addCase(getAcceptedSons.fulfilled, (state, action) => {
                state.childrenList = action.payload;
            })
            builder.addCase(getAcceptedSons.rejected, (state) => {
            });
            builder.addCase(getChildrenEventsthunk.pending, (state) => {
            });
            builder.addCase(getChildrenEventsthunk.fulfilled, (state, action) => {
                state.childEventsList = action.payload;
            })
            builder.addCase(getChildrenEventsthunk.rejected, (state) => {
            });
            builder.addCase(GetEventsOfStudentThunk.pending, (state) => {
            });
            builder.addCase(GetEventsOfStudentThunk.fulfilled, (state, action) => {
                state.currentStudentEvents = action.payload;
            })
            builder.addCase(GetEventsOfStudentThunk.rejected, (state) => {
            });
            builder.addCase(addRegistrationThunk.pending, (state) => {
            });
            builder.addCase(addRegistrationThunk.fulfilled, (state, action) => {
                state.currentStudentEvents = action.payload;
            })
            builder.addCase(addRegistrationThunk.rejected, (state) => {
            });
        }
    })

export const { setCurrentStudent, setParent, setChildrenEventsList, addChildrenEvents,
    addRegistration, deleteRegistration
} = parentsSlice.actions;