import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRegistrationsListThunk = createAsyncThunk(
    'getRegistrationsListThunk',
    async (id) => {
        const response = await fetch(`https://localhost:7231/api/Registration/GetRegisteredStudentsForEventId?eId=${id}`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;
    }
)