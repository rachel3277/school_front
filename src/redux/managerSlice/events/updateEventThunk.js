import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateEventThunk = createAsyncThunk(
    'updateEventThunk',
    async (event) => {
        const response = await fetch('https://localhost:7231/api/Event/Update',
            {
                method: 'PUT',
                body: JSON.stringify(event),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)