import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNextEventsThunk = createAsyncThunk(
    'getNextEventsThunk',
    async () => {
        const response = await fetch(`https://localhost:7231/api/Event/GetAfterEvents`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;

    }
)