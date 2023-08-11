import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersAPI } from "../service/personal-info.service";
import { addUserAPI } from "../service/personal-info.service";


export const getUsersAction = createAsyncThunk("users/get", async () => {
    const users = await getUsersAPI();
    return users;
})

export const addUser = createAsyncThunk("user/add", async (payload) => {
    const users = await addUserAPI(payload);
    return users;
})