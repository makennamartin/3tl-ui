import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const userslice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    signInLoading: false,
    signInError: undefined,
    signUpLoading: false,
    targetNodeLoading:false,
    targetNodeError:undefined,
    targetNodeInfo:null,
    targetNode:[],
    taskScheduleLoading:false,
    taskScheduleError:undefined,
    taskScheduleInfo:null,
    taskSchedule:[],
    targetGroupLoading:false,
    targetGroupError:undefined,
    targetGroupInfo:null,
    targetGroup:[],
    tasks:[],
    tasksError:undefined,
    tasksLoading:false,
    tasksInfo:null,
    users:[],
    usersLoading:false,
    usersError:undefined,




  },
  reducers: {
    UserloginSuccess: (state, action) => {
      return {
        ...state,
        userInfo: action.payload.userInfo,
        signInError: undefined,
        auth: action.payload.auth,
      };
    },

    loginTrigger: (state, action) => {
      return {
        ...state,
        signInLoading: action.payload,
      };
    },
    loginFail: (state, action) => {
      return {
        ...state,
        signInError: action.payload,
      };
    },

    TargetNodeTrigger: (state, action) => {
      return {
        ...state,
        targetNodeLoading: action.payload,
      };
    },
    TargetNodeFail: (state, action) => {
      return {
        ...state,
        targetNodeError: action.payload,
      };
    },
    TargetNodeSuccess: (state, action) => {
      return { ...state, targetNode: action.payload };
    },


    GetTargetNodeSuccess: (state, action) => {
      return {
        ...state,
        targetNode: action.payload,
      };
    },

    GetTargetNodeFailurer: (state, action) => {
      return {
        ...state,
        targetNodeError: action.payload,
      };
    },
    GetTargetNodeTrigger: (state, action) => {
      return {
        ...state,
        targetNodeLoading: action.payload,
      };
    },

    UpdateTargetNodeTrigger: (state, action) => {
      return {
        ...state,
        targetNodeLoading: action.payload,
      };
    },
    UpdateTargetNodeSuccess: (state, action) => {
      return {
        ...state,
        targetNodeInfo: action.payload,
      };
    },
    UpdateTargetNodeFail: (state, action) => {
      return {
        ...state,
        targetNodeError: action.payload,
      };
    },


    RemoveTargetNodeTrigger: (state, action) => {
      //console.log("removeProfileImageTrigger", action.payload);
      return {
        ...state,
        targetNodeLoading: action.payload,
      };
    },
    RemoveTargetNodeFailure: (state, action) => {
      //console.log("removeprofileimage redux called", action.payload);
      return {
        ...state,
        targetNodeError: action.payload,
      };
    },
    /* Get Address Booking Redux */




    TaskScheduleTrigger: (state, action) => {
      return {
        ...state,
        taskScheduleLoading: action.payload,
      };
    },
    TaskScheduleFail: (state, action) => {
      return {
        ...state,
        taskScheduleError: action.payload,
      };
    },
    TaskScheduleSuccess: (state, action) => {
      return { ...state, taskScheduleInfo: action.payload };
    },


    GetTaskScheduleSuccess: (state, action) => {
      return {
        ...state,
        taskSchedule: action.payload,
      };
    },

    GetTaskSchdeuleFailurer: (state, action) => {
      return {
        ...state,
        taskScheduleError: action.payload,
      };
    },
    GetTaskSchdeuleTrigger: (state, action) => {
      return {
        ...state,
        taskScheduleLoading: false,
      };
    },

    UpdateTaskSchdeuleTrigger: (state, action) => {
      return {
        ...state,
        taskScheduleLoading: action.payload,
      };
    },
    UpdateTaskSchdeuleSuccess: (state, action) => {
      return {
        ...state,
        taskSchedule: action.payload,
      };
    },
    UpdateTaskSchdeuleFail: (state, action) => {
      return {
        ...state,
        taskScheduleError: action.payload,
      };
    },


    RemoveTaskSchdeuleTrigger: (state, action) => {
      //console.log("removeProfileImageTrigger", action.payload);
      return {
        ...state,
        taskScheduleLoading: action.payload,
      };
    },
    RemoveTaskSchdeuleFailure: (state, action) => {
      //console.log("removeprofileimage redux called", action.payload);
      return {
        ...state,
        taskScheduleError: action.payload,
      };
    },



   


    AddTargetGroupTrigger: (state, action) => {
      return {
        ...state,
        targetGroupLoading: action.payload,
      };
    },
    AddTargetGroupFail: (state, action) => {
      return {
        ...state,
        targetGroupError: action.payload,
      };
    },
    AddTargetGroupSuccess: (state, action) => {
      return { ...state, targetGroupInfo: action.payload };
    },


    GetTargetGroupSuccess: (state, action) => {
      return {
        ...state,
        targetGroup: action.payload,
      };
    },

    GetTargetGroupByIdSuccess: (state, action) => {
      return {
        ...state,
        targetGroupInfo: action.payload,
      };
    },

    GetTargetGroupFailurer: (state, action) => {
      return {
        ...state,
        targetGroupError: action.payload,
      };
    },
    GetTargetGroupTrigger: (state, action) => {
      return {
        ...state,
        targetGroupLoading: action.payload,
      };
    },

    UpdateTargetGroupTrigger: (state, action) => {
      return {
        ...state,
        targetGroupLoading: action.payload,
      };
    },
    UpdateTargetGroupSuccess: (state, action) => {
      return {
        ...state,
        targetGroup: action.payload,
      };
    },
    UpdateTargetGroupFail: (state, action) => {
      return {
        ...state,
        targetGroupError: action.payload,
      };
    },


    RemoveTargetGroupTrigger: (state, action) => {
      //console.log("removeProfileImageTrigger", action.payload);
      return {
        ...state,
        targetGroupLoading: action.payload,
      };
    },
    RemoveTargetGroupFailure: (state, action) => {
      //console.log("removeprofileimage redux called", action.payload);
      return {
        ...state,
        targetGroupError: action.payload,
      };
    },


    GetTaskSuccess: (state, action) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },

    GetTaskFailurer: (state, action) => {
      return {
        ...state,
        tasksError: action.payload,
      };
    },
    GetTaskTrigger: (state, action) => {
      return {
        ...state,
        tasksLoading: action.payload,
      };
    },


    CreateTasksTrigger: (state, action) => {
      return {
        ...state,
        tasksLoading: action.payload,
      };
    },
    CreateTasksFail: (state, action) => {
      return {
        ...state,
        tasksError: action.payload,
      };
    },
    CreateTasksSuccess: (state, action) => {
      return { ...state, tasksInfo: action.payload };
    },





    logOutSuccess:(state,action) =>{
      return{
        userInfo:{

        },
        auth:false
        
      }
    },



    GetUsersSuccess: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },

    GetUsersFailurer: (state, action) => {
      return {
        ...state,
        usersError: action.payload,
      };
    },
    GetUsersTrigger: (state, action) => {
      return {
        ...state,
        usersLoading: false,
      };
    },

    signupFail: (state, action) => {
      return {
        ...state,
        signupError: action.payload,
      };
    },
    signupTrigger: (state, action) => {
      return {
        ...state,
        signupLoading: false,
      };
    },




    RemoveTasksTrigger: (state, action) => {
      //console.log("removeProfileImageTrigger", action.payload);
      return {
        ...state,
        tasksLoading: action.payload,
      };
    },
    RemoveTasksFailure: (state, action) => {
      //console.log("removeprofileimage redux called", action.payload);
      return {
        ...state,
        tasksError: action.payload,
      };
    },

  },
});

export default userslice.reducer;
export const { loginFail,
  loginTrigger,
  UserloginSuccess,
  TargetNodeTrigger,
  TargetNodeFail,
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

 } = userslice.actions;
