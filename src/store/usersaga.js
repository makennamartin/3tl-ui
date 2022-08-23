import * as _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import Api from "./../services/ApiCaller";
import { getAccessToken } from "./utilities";

import {
  loginFail,
  UserloginSuccess,
  loginTrigger,
  TargetNodeSuccess,
  GetTargetNodeFailurer,
  GetTargetNodeTrigger,
  GetTargetNodeSuccess,
  UpdateTargetNodeFail,
  UpdateTargetNodeSuccess,
  UpdateTargetNodeTrigger,
  RemoveTargetNodeFailure,
  RemoveTargetNodeTrigger,
  TaskScheduleFail,
  TaskScheduleSuccess,
  TaskScheduleTrigger,
  GetTaskSchdeuleFailurer,
  GetTaskSchdeuleTrigger,
  GetTaskScheduleSuccess,
  UpdateTaskSchdeuleFail,
  UpdateTaskSchdeuleSuccess,
  UpdateTaskSchdeuleTrigger,
  RemoveTaskSchdeuleFailure,
  RemoveTaskSchdeuleTrigger,
  TargetNodeTrigger,
  TargetNodeFail,
  AddTargetGroupFail,
  AddTargetGroupTrigger,
  AddTargetGroupSuccess,
  GetTargetGroupFailurer,
  GetTargetGroupTrigger,
  GetTargetGroupSuccess,
  UpdateTargetGroupFail,
  UpdateTargetGroupSuccess,
  UpdateTargetGroupTrigger,
  RemoveTargetGroupFailure,
  RemoveTargetGroupTrigger,
  GetTaskSuccess,
  GetTaskFailurer,
  GetTaskTrigger,
  GetTargetGroupByIdSuccess,
  CreateTasksTrigger,
  CreateTasksSuccess,
  CreateTasksFail,
  logOutSuccess,
  GetUsersSuccess,
  GetUsersFailurer,
  GetUsersTrigger,
  signupFail,
  signupTrigger,
  RemoveTasksTrigger,
  RemoveTasksFailure
} from "./userredux";

export function* usersignIn(api, { payload = {} }) {
  yield put(loginTrigger(true));
  const { email, password, navigation ,callback} = payload || {};
  try {
    let data = { email, password };
    const result = yield call(Api.callServer, api.UsersignIn, data, true);
    let auth = true;
    yield put(UserloginSuccess({ userInfo: {email,...result}, auth }));
    navigation.push("/");
  } catch (errorPayload) {
    console.log(errorPayload,'mm')
    yield put(loginFail(errorPayload));
    callback({error:true,msg:errorPayload.message})
  } finally {
    yield put(loginTrigger(false));
  }
}

export function* usersignUp(api, { payload = {} }) {
  yield put(signupTrigger(true));
  const { invitationToken, password, navigation } = payload || {};
  try {
    let data = { invitationToken, password };
    const result = yield call(Api.callServer, api.userSignup, data, true);
    alert(result.message)
    navigation.push('/')
  } catch (errorPayload) {
    yield put(signupFail(false));

   } finally {
    yield put(signupTrigger(false));
  }
}

export function* addTagetNode(api, { payload = {} }) {
  yield put(TargetNodeTrigger(true));
  const { navigation, nodeName, ipAddressOrHostName, sftpPort,callback } =
      payload || {};
  try { 
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createTagetNode,
      {
        token,
        nodeName,
        ipAddressOrHostName,
        sftpPort,
      },
      true
    );
    yield put(TargetNodeSuccess(result));
    callback({error:false})

    navigation.push('/targetnodes')
  } catch (e) {
    yield put(TargetNodeFail(e));
    callback({error:true,msg:e.message})
  } finally {
    yield put(TargetNodeTrigger(false));
  }
}

export function* getAllTargetNodes(api, { payload }) {
  yield put(GetTargetNodeTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTargetNodeList, {
      ...payload,
      token,
    });
    yield put(TargetNodeSuccess(response));
  } catch (error) {
    yield put(GetTargetNodeFailurer(error.message));
  }finally {
    yield put(GetTargetNodeTrigger(false));
  }
}

export function* getTargetNodeById(api, { payload }) {
  yield put(GetTargetNodeTrigger());
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTargetNodeById, {
      ...payload,
      token,
    });
    yield put(GetTargetNodeSuccess(response));
  } catch (error) {
    yield put(TargetNodeFail(error.message));
  }
}

export function* editTargetNode(api, { payload }) {
  yield put(UpdateTargetNodeTrigger());
  const token = yield getAccessToken();
  const {
    id,
    navigation,
    nodeName,
    ipAddressOrHostName,
    sftpPort,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    uuid,
  } = payload;
  try {
    const response = yield call(Api.callServer, api.editTagetNode, {
      navigation,
      nodeName,
      ipAddressOrHostName,
      sftpPort,
      id,
      createdBy,
      createdAt,
      updatedBy,
      updatedAt,
      uuid,
      token,
    });
    yield put(UpdateTargetNodeSuccess());
  } catch (error) {
    yield put(UpdateTargetNodeFail(error.message));
  }
}

/* Delete Address Booking */
export function* deleteTargetNodeById(api, { payload }) {
  yield put(RemoveTargetNodeTrigger());
  const token = yield getAccessToken();
  const { id } = payload;
  try {
    const response = yield call(Api.callServer, api.deleteTargetNode, {
      id,
      token,
    });
  } catch (error) {
    yield put(RemoveTargetNodeFailure(error.message));
  }
}





export function* addTaskSchedule(api, { payload = {} }) {
  yield put(TaskScheduleTrigger(true));
  try {
    const { callback, taskId,schedule,singleInstance} = payload || {};
    const token = yield getAccessToken();

    const result = yield call(
      Api.callServer,
      api.createTaskSchedule,
      {
        token,taskId,schedule,singleInstance
      },
      true
    );
    yield put(TaskScheduleSuccess(result));
    callback()
  } catch (e) {
    yield put(TaskScheduleFail(e));
  } finally {
    yield put(TaskScheduleTrigger(false));
  }
}


export function* getAllTaskSchedule(api, { payload }) {
  yield put(GetTaskSchdeuleTrigger());
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTaskScheduleList, {
      ...payload,
      token,
    });
    yield put(GetTaskScheduleSuccess(response));
  } catch (error) {
    yield put(GetTaskSchdeuleFailurer(error.message));
  }
}

export function* getTaskScheduleById(api, { payload }) {
  yield put(GetTaskSchdeuleTrigger());
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTaskScheduleById, {
      ...payload,
      token,
    });
    yield put(GetTaskScheduleSuccess(response));
  } catch (error) {
    yield put(GetTaskSchdeuleFailurer(error.message));
  }
}


export function* editTaskSchedule(api, { payload }) {
  yield put(UpdateTaskSchdeuleTrigger());
  const token = yield getAccessToken();
  const {
    
    id,
    navigation, taskId,schedule,singleInstance,createdBy,updatedBy,updatedAt
  } = payload;
  try {
    const response = yield call(Api.callServer, api.editTaskSchedule, {
    id,
    navigation, taskId,schedule,singleInstance,createdBy,updatedBy,updatedAt,token
    });
    yield put(UpdateTaskSchdeuleSuccess());
  } catch (error) {
    yield put(UpdateTaskSchdeuleFail(error.message));
  }
}

/* Delete Address Booking */
export function* deleteTaskScheduleById(api, { payload }) {
  yield put(RemoveTaskSchdeuleTrigger());
  const token = yield getAccessToken();
  const { id } = payload;
  try {
    const response = yield call(Api.callServer, api.deleteTaskSchedule, {
      id,
      token,
    });
    
  } catch (error) {
    yield put(RemoveTaskSchdeuleFailure(error.message));
  }
}

export function* getAllTasks(api, { payload }) {
  yield put(GetTaskTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTasksList, {
      ...payload,
      token,
    });
    yield put(GetTaskSuccess(response));
  } catch (error) {
    yield put(GetTaskFailurer(error.message));
  }finally{
    yield put(GetTaskTrigger(false));

  }
}




export function* addTagetGroups(api, { payload = {} }) {
  yield put(AddTargetGroupTrigger(true));
  const { navigation, groupName,callback } =
  payload || {};
  try {
  
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createTargetGroups,
      {
        token,
        groupName,
      },
      true
    );
    yield put(AddTargetGroupSuccess(result));
    navigation.push('/targetgroups')
    callback({error:false})
  } catch (e) {
    yield put(AddTargetGroupFail(e));
    callback({error:true,msg:e?.message})
  } finally {
    yield put(AddTargetGroupTrigger(false));
  }
}

export function* getAllTargetGroups(api, { payload }) {
  yield put(GetTargetGroupTrigger(true));
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTargetGroupsList, {
      ...payload,
      token,
    });
    yield put(GetTargetGroupSuccess(response));
  } catch (error) {
    yield put(GetTargetGroupFailurer(error.message));
  }finally{
    yield put(GetTargetGroupTrigger(false));

  }
}

export function* getTargetGroupById(api, { payload }) {
  yield put(GetTargetGroupTrigger());
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getTargetGroupsById, {
      ...payload,
      token,
    });
    yield put(GetTargetGroupByIdSuccess(response));
  } catch (error) {
    yield put(GetTargetGroupFailurer(error.message));
  }
}

export function* editTargetGroup(api, { payload }) {
  yield put(UpdateTargetGroupTrigger());
  const token = yield getAccessToken();
  const {
    id,
    navigation,
    groupName,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    uuid,
  } = payload;
  try {
    const response = yield call(Api.callServer, api.editTargetGroups, {
      navigation,
      groupName,
      id,
      createdBy,
      createdAt,
      updatedBy,
      updatedAt,
      uuid,
      token,
    });
    yield put(UpdateTargetGroupSuccess(response));
  } catch (error) {
    yield put(UpdateTargetGroupFail(error.message));
  }
}

/* Delete Address Booking */
export function* deleteTargetGroupById(api, { payload }) {
  yield put(RemoveTargetGroupTrigger());
  const token = yield getAccessToken();
  const { id } = payload;
  try {
    const response = yield call(Api.callServer, api.deleteTargetGroups, {
      id,
      token,
    });
  } catch (error) {
    yield put(RemoveTargetGroupFailure(error.message));
  }
}


export function* addTasks(api, { payload = {} }) {
  yield put(CreateTasksTrigger(true));
  const { navigation, taskName,altId,purpose,description ,callback} =
      payload || {};
  try {
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.createTasks,
      {
        token,
        taskName,altId,purpose,description,
       },
      true
    );
    callback({error:false})
    yield put(CreateTasksSuccess(result));
    navigation.push('/tasks')
  } catch (e) {
    yield put(CreateTasksFail(e));
    callback({error:true,msg:e?.message})
  } finally {
    yield put(CreateTasksTrigger(false));
  }
}

export function* editTask(api, { payload = {} }) {
  yield put(CreateTasksTrigger(true));
  const { navigation, taskName,altId,purpose,description ,callback,id} =
      payload || {};
  try {
    const token = yield getAccessToken();
    const result = yield call(
      Api.callServer,
      api.editTasks,
      {
        token,
        taskName,altId,purpose,description,
        id
       },
      true
    );
    callback({error:false})
    yield put(CreateTasksSuccess(result));
    navigation.push('/tasks')
  } catch (e) {
    yield put(CreateTasksFail(e));
    callback({error:true,msg:e?.message})
  } finally {
    yield put(CreateTasksTrigger(false));
  }
}


export function* logOut(api, { payload }) {
  yield put(logOutSuccess());
  payload?.history?.push('/')
 
}


export function* getAllUsers(api, { payload }) {
  yield put(GetUsersTrigger());
  const token = yield getAccessToken();
  try {
    const response = yield call(Api.callServer, api.getUsersList, {
      ...payload,
      token,
    });
    yield put(GetUsersSuccess(response));
  } catch (error) {
    yield put(GetUsersFailurer(error.message));
  }
}



export function* deleteTasks(api, { payload }) {
  yield put(RemoveTasksTrigger());
  const token = yield getAccessToken();
  const { id } = payload;
  try {
    const response = yield call(Api.callServer, api.deleteTasks, {
      id,
      token,
    });
    
  } catch (error) {
    yield put(RemoveTasksFailure(error.message));
  }
}