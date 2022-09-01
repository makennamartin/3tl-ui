import * as _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../services/ApiCaller";
import { GetmemoryusageFailurer,
  GetmemoryusageSuccess,
  GetmemoryusageTrigger,
  getPipelinesSuccess,
  getPipelinesFailurer,
  getPipelinesTrigger,
  newPipelineSuccess,
  newPipelineFailurer,
  newPipelineTrigger
} from "./Pipelineredux";
import { getAccessToken } from "./utilities";


export function* Getmemoryusages(api, { payload }) {
  yield put(GetmemoryusageTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getmemoryusage, {
      token,
    });
    yield put(GetmemoryusageSuccess(response));
  } catch (error) {
   yield put(GetmemoryusageFailurer(error?.message));
  } finally {
     yield put(GetmemoryusageTrigger(false));
  }
}

export function* getPipelines(api, { payload }) {
  yield put(getPipelinesTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getPipelines, {
      token,
    });
    yield put(getPipelinesSuccess(response));
  } catch (error) {
   yield put(getPipelinesFailurer(error?.message));
  } finally {
     yield put(getPipelinesTrigger(false));
  }
}

// export function* newPipeline(api, { payload = {} }) {
//   yield put(CreateTasksScriptTrigger(true));
//   const { schedule, location, taskId, callback } = payload;
//   try {
//     const token = yield getAccessToken();
//     const result = yield call(
//       Api.callServer,
//       api.createTaskScripts,
//       {
//         schedule,
//         location,
//         taskId,
//         token,
//       },
//       true
//     );
//     yield put(CreateTasksScriptSuccess(result));
//     callback({ error: false });
//     //    navigation.push("/taskScriptList");
//   } catch (e) {
//     console.log(e);
//     callback({ error: true, msg: e.message });
//     yield put(CreateTasksScriptFail(e));
//   } finally {
//     yield put(CreateTasksScriptTrigger(false));
//   }
// }



