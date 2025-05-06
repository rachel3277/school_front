import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAcceptedSons = createAsyncThunk(
    'getAcceptedSons',
    async (id) => {
        const response = await fetch(`https://localhost:7231/api/Parent/GetAcceptedSons?parentId=${id}
`,
            { method: 'GET' }
        );
        const data = await response.json();
        return data;
    }
)