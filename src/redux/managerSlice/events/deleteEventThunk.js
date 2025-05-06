import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteEventThunk = createAsyncThunk(
    'deleteEventThunk',
    async (id) => {
        const response = await fetch(`https://localhost:7231/api/Event/DeleteEvent?id=${id}`,
            { method: 'DELETE' }
        );
        const data = await response.json();
        return data;
    }
)