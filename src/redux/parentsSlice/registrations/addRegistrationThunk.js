import { createAsyncThunk } from "@reduxjs/toolkit";
export const addRegistrationThunk = createAsyncThunk(
    'addRegistrationThunk',
    async (event) => {
        await fetch('https://localhost:7231/api/Registration/Add',
            {
                method: 'POST',
                body: JSON.stringify(event),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        //const data = await response.json();
        //event.id = data;
        //return event;
    }
)