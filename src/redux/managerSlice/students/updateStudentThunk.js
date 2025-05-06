import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateStudentThunk = createAsyncThunk(
    'updateStudentThunk',
    async (student) => {
        const response = await fetch('https://localhost:7231/api/Student/Update',
            {
                method: 'PUT',
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