import apisauce from "apisauce";
import _ from "lodash";
const baseUrl ='https://20.245.219.7:8443'
const create = (baseURL = baseUrl) => {
  const apis = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
    },
    timeout: 200000,
  });

  const UsersignIn = (data) => {
    return apis.post(`/login?username=${data.email}&password=${encodeURIComponent(data.password)}`,{});
  };


  const createTagetNode = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.post(`/target-nodes`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const editTagetNode = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/target-nodes`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };


  const getTargetNodeById = (data) => {
    return apis.get(
      `/target-nodes/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const getTargetNodeList = (data) => {
    return apis.get(
      `/target-nodes?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const deleteTargetNode = (data) => {
    return apis.delete(
      `/target-nodes/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const createTaskSchedule = (data) => {
    return apis.post(`/tasks-schedules`, data, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  const editTaskSchedule = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/tasks-schedules`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };


  const getTaskScheduleById = (data) => {
    return apis.get(
      `/tasks-schedules/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const getTaskScheduleList = (data) => {
    return apis.get(
      `/tasks-schedules?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const deleteTaskSchedule = (data) => {
    return apis.delete(
      `/tasks-schedules/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };



  const createTargetGroups = (data) => {
    return apis.post(`/target-group`, data, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  const editTargetGroups = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/target-group`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };


  const getTargetGroupsById = (data) => {
    return apis.get(
      `/target-group/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const getTargetGroupsList = (data) => {
    return apis.get(
      `/target-group?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const deleteTargetGroups = (data) => {
    return apis.delete(
      `/target-group/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const getTasksList = (data) => {
    return apis.get(
      `/tasks?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };

  const getTasksBundleList = (data) => {
    return apis.get(
      `/task-bundle?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };
 

  const createTasks = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.post(`/tasks`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const editTasks = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(`/tasks`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };




  const createTaskBundles = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.post(`/task-bundle`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
 

  const getUsersList = (data) => {
    return apis.get(
      `/users?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const createInvite = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.post(`/users/invite`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };


  const resendInviteMail = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/users/invite/${data.id}/send-email`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const validateInviteToken = (data) => {
    return apis.get(
      `/signup/validate-invite-token?token=${data.token}`,
      {},
    );
  };


  
  const getInvites = (data) => {
    return apis.get(
      `/users/invite?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };

  const userSignup = (data) => {

    return apis.post(`/signup`, data);
  };
  const deleteInvite = (data) => {
    return apis.delete(
      `/users/invite/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const deleteTasks = (data) => {
    return apis.delete(
      `/tasks/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };



  const editTaskBundle = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/task-bundle`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };


  const getTaskBundleById = (data) => {
    return apis.get(
      `/task-bundle/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };
  const getTaskScriptList = (data) => {
    return apis.get(
      `/tasks-script?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };

  const createTaskScripts = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.post(`/tasks-script`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };




  const editTaskScript = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/tasks-script`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };



  const getTaskScriptById = (data) => {
    return apis.get(
      `/tasks-script/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const deleteTaskScript = (data) => {
    return apis.delete(
      `/tasks-script/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };



  const getDeploymentList = (data) => {
    return apis.get(
      `/deployment?page=${data.page}&size=${data.size}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };

  const createDeployment = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.post(`/deployment`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };




  const editDeployment = (data) => {
    const { token } = data;
    delete data["token"];
    return apis.put(
      `/deployment`,
      { ...data },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };



  const getDeploymentById = (data) => {
    return apis.get(
      `/deployment/${data.id}`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };



  const getmemoryusage = (data) => {
    return apis.get(
      `/telemetry/memory-usage?page=0&size=100`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  const getPipelines = (data) => {
    return apis.get(
      `/pipelines/list`,
      {},
      { headers: { Authorization: `Bearer ${data.token}` } }
    );
  };


  return {
    UsersignIn,
    createTagetNode,
    editTagetNode,
    getTargetNodeById,
    getTargetNodeList,
    deleteTargetNode,
    createTaskSchedule,
    editTaskSchedule,
    deleteTaskSchedule,
    getTaskScheduleById,
    getTaskScheduleList,
    createTargetGroups,
    editTargetGroups,
    getTargetGroupsList,
    getTargetGroupsById,
    deleteTargetGroups,
    getTasksList,
    getTasksBundleList,
    createTasks,
    createTaskBundles,
    getUsersList,
    createInvite,getInvites,
    validateInviteToken,
    resendInviteMail,
    userSignup,
    deleteInvite,
    deleteTasks,
    editTaskBundle,
    getTaskBundleById,
    getTaskScriptList,
    createTaskScripts,
    editTaskScript,
    getTaskScriptById,
    deleteTaskScript,
    editTasks,
    createDeployment,
    getDeploymentList,
    getDeploymentById,
    editDeployment,
    getmemoryusage,
    getPipelines
  };
};
export default {
  create,
};
