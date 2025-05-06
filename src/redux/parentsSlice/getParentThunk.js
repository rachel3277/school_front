import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParentThunk = createAsyncThunk(
    'getParentThunk',
    async (password) => {
        const response = await fetch(`https://localhost:7231/api/Parent/GetById?id=${password}`,
            { method: 'GET' }
        );
        if (response.status === 200) {
            console.log("sssssssss");
            
            const data = await response.json();
            return data;
        }
        else{
            return null;
        }
    }
)