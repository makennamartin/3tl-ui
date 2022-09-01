import * as _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import Api from "./../services/ApiCaller";
import { getAccessToken } from "./utilities";

import {
  GetTasksScriptFailurer,
  GetTasksScriptSuccess,
  GetTasksScriptTrigger,
  CreateTasksScriptFail,
  CreateTasksScriptSuccess,
  CreateTasksScriptTrigger,
  GetTasksScriptByIdSuccess,
  UpdateTaskScriptTrigger,
  UpdateTaskScriptSuccess,
  UpdateTaskScriptFail,

  GetDeploymentFailurer,
  GetDeploymentSuccess,
  GetDeploymentTrigger,
  GetDeploymentIdSuccess,
  CreateDeploymentFail,
  CreateDeploymentSuccess,
  CreateDeploymentTrigger,
  UpdateDeploymentFail,
  UpdateDeploymentSuccess,
  UpdateDeploymentTrigger

} from "./taskScriptredux";

export function* getAllTaskScripts(api, { payload }) {
  yield put(GetTasksScriptTrigger(true));

  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTaskScriptList, {
      ...payload,
      token,
    });
    yield put(GetTasksScriptSuccess(response));
  } catch (error) {
    yield put(GetTasksScriptFailurer(error.message));
  } finally {
    yield put(GetTasksScriptTrigger(false));
  }
}

export function* createTaskScript(api, { payload = {} }) {
  yield put(CreateTasksScriptTrigger(true));
  const { schedule, location, taskId, callback } = payload;
  try {
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createTaskScripts,
      {
        schedule,
        location,
        taskId,
        token,
      },
      true
    );
    yield put(CreateTasksScriptSuccess(result));
    callback({ error: false });
    //    navigation.push("/taskScriptList");
  } catch (e) {
    console.log(e);
    callback({ error: true, msg: e.message });
    yield put(CreateTasksScriptFail(e));
  } finally {
    yield put(CreateTasksScriptTrigger(false));
  }
}

export function* getTaskScriptById(api, { payload }) {
  yield put(GetTasksScriptTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTaskScriptById, {
      ...payload,
      token,
    });
    yield put(GetTasksScriptByIdSuccess(response));
  } catch (error) {
    yield put(GetTasksScriptFailurer(error.message));
  } finally {
    yield put(GetTasksScriptTrigger(false));
  }
}

export function* editTaskScripts(api, { payload }) {
  yield put(CreateTasksScriptTrigger(true));
  const token = yield getAccessToken();
  const {
    id,
    taskId,
    schedule,
    location,
    createdAt,
    updatedAt,
    CreatedBy,
callback
  } = payload;
  console.log(payload)
  try {
    const response = yield call(Api.callServer, api.editTaskScript, {
      id,
      taskId,
      schedule,
      location,
      createdAt,
      updatedAt,
      createdBy:CreatedBy,
      token,
    });
    callback({ error: false });

    yield put(UpdateTaskScriptSuccess(response));
  } catch (error) {
    callback({ error: true,msg:error.message });

    yield put(UpdateTaskScriptFail(error.message));
  }finally{
    yield put(CreateTasksScriptTrigger(false));

  }
}



export function* getAllDeployment(api, { payload }) {
  yield put(GetDeploymentTrigger(true));

  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getDeploymentList, {
      ...payload,
      token,
    });
    yield put(GetDeploymentSuccess(response));
  } catch (error) {
    yield put(GetDeploymentFailurer(error.message));
  } finally {
    yield put(GetDeploymentTrigger(false));
  }
}

export function* createDeployment(api, { payload = {} }) {
  yield put(CreateDeploymentTrigger(true));
  const { bundleId,targets, location,  callback } = payload;
  try {
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createDeployment,
      {
        bundleId,
        location,
       targets,
        token,
      },
      true
    );
    yield put(CreateDeploymentSuccess(result));
    callback({ error: false });
    //    navigation.push("/taskScriptList");
  } catch (e) {
    console.log(e);
    callback({ error: true, msg: e.message });
    yield put(CreateDeploymentFail(e));
  } finally {
    yield put(CreateDeploymentTrigger(false));
  }
}

export function* getDeploymentById(api, { payload }) {
  yield put(GetDeploymentTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getDeploymentById, {
      ...payload,
      token,
    });
    yield put(GetDeploymentIdSuccess(response));
  } catch (error) {
    yield put(GetDeploymentFailurer(error.message));
  } finally {
    yield put(GetDeploymentTrigger(false));
  }
}

export function* editDeployment(api, { payload }) {
  yield put(CreateDeploymentTrigger(true));
  const token = yield getAccessToken();
  const {
    id,
    taskId,
    schedule,
    singleInstance,
    createdAt,
    updatedAt,
    updatedBy,
callback,location
  } = payload;
  console.log(payload)
  try {
    const response = yield call(Api.callServer, api.editDeployment, {
      id,
      taskId,
      schedule,
      singleInstance,
      createdAt,
      updatedAt,
      updatedBy,
  callback,
      location,
      token,
    });
    callback({ error: false });

    yield put(UpdateDeploymentSuccess(response));
  } catch (error) {
    callback({ error: true,msg:error.message });

    yield put(UpdateDeploymentFail(error.message));
  }finally{
    yield put(CreateTasksScriptTrigger(false));

  }
}