import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateParentsThunk = createAsyncThunk(
    'updateParentsThunk',
    async (parents) => {
        const response = await fetch('https://localhost:7231/api/Parent/UpdateParent',
            {
                method: 'PUT',
                body: JSON.stringify(parents),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;

    }
)