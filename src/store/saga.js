// saga effects
import { all } from "redux-saga/effects";

// sagas
import { gameSaga } from "./game/saga";

export function* watchSaga() {
  yield all([gameSaga()]);
}
