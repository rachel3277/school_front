import { createAsyncThunk } from "@reduxjs/toolkit";

export const addParentThunk = createAsyncThunk(
    'addParentThunk',
    async (parent) => {
        const response = await fetch('https://localhost:7231/api/Parent/Add',
            {
                method: 'POST',
                body: JSON.stringify(parent),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        const data = await response.json();
        parent.id = data;
        return parent;
    }
)