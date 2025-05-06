import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetEventsOfStudentThunk = createAsyncThunk(
    'GetEventsOfStudentThunk',   
    async (student) => {
        const response = await fetch('https://localhost:7231/api/Event/GetEventsOfStudent',
            {
                method: 'POST',
                body: JSON.stringify(student),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)