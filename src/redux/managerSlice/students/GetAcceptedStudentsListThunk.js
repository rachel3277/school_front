import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAcceptedStudents = createAsyncThunk(
    'getAcceptedStudents',
    async () => {
        const response = await fetch(`https://localhost:7231/api/Student/GetAcceptedStudents`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;

    }
)