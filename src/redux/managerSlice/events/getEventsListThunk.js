import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEventsListThunk = createAsyncThunk(
    'getEventsListThunk',
    async () => {
        const response = await fetch(`https://localhost:7231/api/Event/GetAll`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;

    }
)