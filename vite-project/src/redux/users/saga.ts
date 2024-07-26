import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { UserType, GET_USER_BY_ID } from "./types";
import { getUserErrorAction, getUserSuccessAction } from "./slice";

// Generator function
function* getUserSaga({ payload: id }: PayloadAction<string>) {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<UserType> = yield axios.get(`your-server-url:port/api/users/${id}`);
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchGetUser() {
  yield takeLatest(GET_USER_BY_ID, getUserSaga);
}
