import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const getEventsByNameThunk = createAsyncThunk(
    'getEventsByNameThunk',
    async (name) => {
        // const response = await fetch(`https://localhost:7231/api/Event/GetEventsByName?name=${name}`,
        //     { method: 'GET' }
        // );
        const eventsList = useSelector(state => state.manager.eventsList);
        const d = eventsList.filter(e => e.name === name)
        console.log(d);

        return d;

    }
)