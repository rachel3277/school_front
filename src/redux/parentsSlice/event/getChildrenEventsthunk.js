import { createAsyncThunk } from "@reduxjs/toolkit";

export const getChildrenEventsthunk = createAsyncThunk(
    'getChildrenEventsthunk',
    async (id) => {
        const response = await fetch(`https://localhost:7231/api/Class/GetAll?id=${id}`,
            { method: 'GET' }
        );
        const data = await response.json();
        console.log(data);
        return data;
    }
)