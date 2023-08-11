import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";



export const PERSONAL_INFO_FEATURE_KEY = "personal-info";

const PERSONAL_INFO_INITIAL_STATE = {
    users: [],
}

export const personalInfoAdapter = createEntityAdapter();

export const personalInfoInitialState = personalInfoAdapter.
    getInitialState(PERSONAL_INFO_INITIAL_STATE);

export const personalInfoSlice = createSlice({
    name: PERSONAL_INFO_FEATURE_KEY,
    initialState: personalInfoInitialState,
    reducers: {
        addUserInfo: (state, { payload }) => {
            if (!!payload) {
                state.users.push(payload);
            }
        },
        addUsers: (state, { payload }) => {
            if (Array.isArray(payload)) {
                state.users = payload;
            }
        }
    }
});


export const personalInfoReducer = personalInfoSlice.reducer;
export const personalInfoActions = personalInfoSlice.actions;
export const getPersonalInfoState =
    (rootstate) => rootstate[PERSONAL_INFO_FEATURE_KEY];