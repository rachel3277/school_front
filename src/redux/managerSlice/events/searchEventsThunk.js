import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchEventsThunk = createAsyncThunk(
    'searchEventsThunk',
    async (eventType) => {
        return eventType;

    }
)