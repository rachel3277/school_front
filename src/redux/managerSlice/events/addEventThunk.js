import { createAsyncThunk } from "@reduxjs/toolkit";

export const addEventThunk = createAsyncThunk(
    'addEventThunk',   
    async (event) => {
        const response = await fetch('https://localhost:7231/api/Event/Add',
            {
                method: 'POST',
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