import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParentsListThunk = createAsyncThunk(
    'getParentsListThunk',
    async () => {
        const response = await fetch(`https://localhost:7231/api/Parent/GetAll`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;
    }
)