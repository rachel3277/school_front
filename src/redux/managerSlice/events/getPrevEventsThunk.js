import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPrevEventsThunk = createAsyncThunk(
    'getPrevEventsThunk',
    async () => {
        const response = await fetch(`https://localhost:7231/api/Event/GetBeforeEvents`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;

    }
)