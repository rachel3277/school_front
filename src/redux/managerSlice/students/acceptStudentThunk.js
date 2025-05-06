import { createAsyncThunk } from "@reduxjs/toolkit";

export const                                        acceptStudentThunk = createAsyncThunk(
    'acceptStudentThunk',
    async ({id,flag}) => {
        const response = await fetch(`https://localhost:7231/api/Student/AcceptStudent?id=${id}&isAccept=${flag}`,

            { method: 'GET' }
        );
        const data = await response.json();
        return data;
    }
)