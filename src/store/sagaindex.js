import { all, takeEvery, takeLatest, call } from "redux-saga/effects";
import API from "./../services/Api";
 
 
 
import {
  usersignIn,
  addTagetNode,
  addTasks,
  getAllTasks,
  logOut,
  getAllTargetNodes,
  getAllTargetGroups,
  getAllTaskSchedule,
  addTaskSchedule,
  addTagetGroups,
  getAllUsers,
  usersignUp,
  editTask
 
} from "./usersaga";

  import{getAllTasksBundle,createTaskBundle, getAllInvites, sendInvite, validateInviteToken, resendMailInvite} from "./bundlesaga";
import { createTaskScript, editTaskScripts, getAllTaskScripts,getAllDeployment } from "./taskScriptsaga";
import { Getmemoryusages,getPipelines,newPipeline } from "./Pipelinesaga";

const api = API.create();
export default function* root() {
  yield all([
    takeEvery("usersignIncalled", usersignIn, api),
    takeEvery("addTagetNodecalled", addTagetNode, api),
    takeEvery("addTaskscalled", addTasks, api),
    takeEvery("getTaskscalled", getAllTasks, api),
    takeEvery("logoutcalled", logOut, api),
    takeEvery("getTargetNodescalled",getAllTargetNodes,api),
    takeEvery("getTaskBundlecalled",getAllTasksBundle,api),
    takeEvery("getAllTaskSchedulecalled",getAllTaskSchedule,api),
    takeEvery("addTaskSchedulecalled",addTaskSchedule,api),
    takeEvery("getTargetGroupscalled",getAllTargetGroups,api),
    takeEvery("createTaskBundlecalled",createTaskBundle,api),
    takeEvery("addTagetGroupscalled",addTagetGroups,api),

        
    takeEvery("createTaskBundlecalled",createTaskBundle,api),    
    takeEvery("getUserscalled",getAllUsers,api),
    takeEvery("getAllInvitescalled",getAllInvites,api),
    takeEvery("sendInvitecalled",sendInvite,api),
    takeEvery("validateInviteTokencalled",validateInviteToken,api),
    takeEvery("resendMailInvitecalled",resendMailInvite,api),

    takeEvery("createUsercalled",usersignUp,api),
    takeEvery("editTaskscalled",editTask,api),

    takeEvery("createTaskScriptcalled",createTaskScript,api),
    takeEvery("getTaskScriptcalled",getAllTaskScripts,api),
    takeEvery("editTaskScriptscalled",editTaskScripts,api),
    takeEvery("getDeploymentListCalled",getAllDeployment,api),


    takeEvery("GetmemoryusageCalled",Getmemoryusages,api),
    takeEvery("getPipelinesCalled",getPipelines,api),
    // takeEvery("newPipelineCalled",newPipeline,api)


    
   ])
}
