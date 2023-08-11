import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsersAction } from "../actions/personal-info.actions";



export const PERSONAL_INFO_FEATURE_KEY = "personal-info";

const PERSONAL_INFO_INITIAL_STATE = {
    users: [],
    loading: false,
    error: null
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsersAction.fulfilled, (state, { payload }) => {
                if (payload && Array.isArray(payload)) {
                    state.users = payload;
                }
                state.loading = false;
            })
            .addCase(getUsersAction.rejected, (state, _) => {
                state.loading = false;
                state.error = _.error.message;
            })
    }
});


export const personalInfoReducer = personalInfoSlice.reducer;
export const personalInfoActions = personalInfoSlice.actions;
export const getPersonalInfoState =
    (rootstate) => rootstate[PERSONAL_INFO_FEATURE_KEY];