import { commonAPI } from "./commonAPI";
import { base_URL } from "./serverURL";

//get manager list to approve
export const getManagersForApprovalAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/adminapi/hr/`, "", {
    Authorization: "Token " + token,
  });
};

//get list of team lead to approve
export const getTeamLeadsForApprovalAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/adminapi/teamlead/`, "", {
    Authorization: "Token " + token,
  });
};

//get list of trainee to approve
export const getTraineesForApprovalAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/adminapi/employee/ `, "", {
    Authorization: "Token " + token,
  });
};

//approve manager
export const approveManagerAPI = async (id, token) => {
  return await commonAPI("POST", `${base_URL}/adminapi/hr/${id}/approve/`, "", {
    Authorization: "Token " + token,
  });
};

//approve manager
export const approveTeamLeadAPI = async (id, token) => {
  return await commonAPI(
    "POST",
    `${base_URL}/adminapi/teamlead/${id}/approve/`,
    "",
    {
      Authorization: "Token " + token,
    }
  );
};

//approve trainee
export const approveTraineeAPI = async (id, token) => {
  return await commonAPI(
    "POST",
    `${base_URL}/adminapi/employee/${id}/approve/ `,
    "",
    {
      Authorization: "Token " + token,
    }
  );
};

//assign project
export const assignProject = async (id, token) => {
  return await commonAPI(
    "POST",
    `${base_URL}/teamleadapi/projects/${id}/project_assign/ `,
    "",
    {
      Authorization: "Token " + token,
    }
  );
};

// get manager profile
export const updateManagerAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/hrapi/profile/`, "", {
    Authorization: "Token " + token,
  });
};

export const editManagerAPI = async (token, body) => {
  return await commonAPI("PUT", `${base_URL}/hrapi/profile/`, body, {
    Authorization: "Token " + token,
  });
};

//get trainee details
export const getTraineeDetailsAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/empapi/profile/`, "", {
    Authorization: "Token " + token,
  });
};

//edit trainee details
export const editTraineeDetailsAPI = async (token, body) => {
  return await commonAPI("PUT", `${base_URL}/empapi/profile/`, body, {
    Authorization: "Token " + token,
  });
};

//schedule meeting by admin
export const scheduleMeetingAdminAPI = async (token, body) => {
  return await commonAPI("POST", `${base_URL}/adminapi/meeting/`, body, {
    Authorization: "Token " + token,
  });
};

//schedule meeting by manager
export const scheduleMeetingManagerAPI = async (token, body) => {
  return await commonAPI("POST", `${base_URL}/hrapi/meeting/`, body, {
    Authorization: "Token " + token,
  });
};

//schedule meeting by team lead
export const scheduleMeetingTeamLeadAPI = async (token, body) => {
  return await commonAPI("POST", `${base_URL}/teamleadapi/meeting/`, body, {
    Authorization: "Token " + token,
  });
};

//get meetings by admin
export const getMeetingsAdminAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/adminapi/meeting/`, "", {
    Authorization: "Token " + token,
  });
};

//get meetings by manager
export const getMeetingsManagerAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/hrapi/meeting/`, "", {
    Authorization: "Token " + token,
  });
};
//get meetings by admin
export const getMeetingsTeamLeadAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/teamleadapi/meeting/`, "", {
    Authorization: "Token " + token,
  });
};
//get meetings by admin
export const getMeetingsTraineeAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/empapi/mymeeting/`, "", {
    Authorization: "Token " + token,
  });
};
//get daily task
export const getDailyTaskAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/empapi/dailytask/`, "", {
    Authorization: "Token " + token,
  });
};
//complete daily task
export const updateDailyTaskAPI = async (token, id) => {
  return await commonAPI(
    "POST",
    `${base_URL}/empapi/dailytask/${id}/mark_completed/`,
    "",
    {
      Authorization: "Token " + token,
    }
  );
};
//get daily task by team lead
export const getDailyTaskTeamLeadAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/teamleadapi/dailytask/`, "", {
    Authorization: "Token " + token,
  });
};
//submit review and rating
export const submitRatingAPI = async (token, id, body) => {
  console.log({ body });
  return await commonAPI(
    "POST",
    `${base_URL}/teamleadapi/employee/${id}/rate_emp/`,
    body,
    {
      Authorization: "Token " + token,
    }
  );
};
//get review
export const getReviewAPI = async (token) => {
  return await commonAPI("GET", `${base_URL}/empapi/myrating/`, "", {
    Authorization: "Token " + token,
  });
};
//approve team
export const approveTeamAPI = async (token, id) => {
  return await commonAPI(
    "POST",
    `${base_URL}/hrapi/teams/${id}/team_approval/`,
    "",
    {
      Authorization: "Token " + token,
    }
  );
};
