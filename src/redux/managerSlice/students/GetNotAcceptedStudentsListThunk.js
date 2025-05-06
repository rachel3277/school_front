import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotAcceptedStudents = createAsyncThunk(
    'getNotAcceptedStudents',
    async () => {
        const response = await fetch(`https://localhost:7231/api/Student/GetNotAcceptedStudents`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;

    }
)