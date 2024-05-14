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

// //register user
// export const registerAPI = async (reqBody) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/register`,
//     reqBody,
//     {
//       headers: {
//         "Content-type": "application/json",
//       },
//       withCredential: true,
//       credentials: "include",
//     }
//   );
// };

// //register service provider
// export const registerProviderAPI = async (reqBody) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceProvider/register`,
//     reqBody,
//     { "Content-Type": "multipart/form-data" }
//   );
// };

// export const getProviderRequest = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/admin/listofserviceproviderRequest`,
//     "",
//     ""
//   );
// };

// export const approveRequest = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/approval/serviceprovider`,
//     req,
//     ""
//   );
// };

// export const rejectRequest = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/rejection/serviceprovider`,
//     req,
//     ""
//   );
// };

// export const serviceProviderLogin = async (req, res) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/login`,
//     req,
//     {
//       headers: {
//         "Content-type": "application/json",
//       },
//       credentials: "include",
//     }
//   );
// };
// export const uploadProviderImage = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceProvider/uploadimage`,
//     req,
//     { "Content-Type": "multipart/form-data" }
//   );
// };

// export const adminLogin = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/login`,
//     req,
//     ""
//   );
// };

// export const serviceProviderMarkAttendance = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/serviceprovider/attendance`,
//     req,
//     headers
//   );
// };

// export const serviceProviderShowAttendance = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/serviceprovider/attendanceview`,
//     req,
//     headers
//   );
// };

// //list of approved service provider
// export const getApprovedServiceProvidersList = async (req) => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/admin/listofapprovedserviceproviderRequest`,
//     "",
//     ""
//   );
// };

// //user login
// export const userLogin = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/login`,
//     req,
//     ""
//   );
// };

// //user booking
// export const userBooking = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/primarybooking`,
//     req,
//     headers
//   );
// };

// export const searchServiceProvider = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/serviceproviderSearch`,
//     req,
//     ""
//   );
// };

// export const leaveRequest = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/leaverequest`,
//     req,
//     headers
//   );
// };
// export const addWebinar = async (req, header) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/webinar`,
//     req,
//     header
//   );
// };
// export const showAllWebinar = async (req) => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/user/webinar/view`,
//     req,
//     ""
//   );
// };

// export const registerBlog = async (req, header) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/blog`,
//     req,
//     header
//   );
// };
// export const viewBlog = async (req) => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/user/blog/view`,
//     req,
//     ""
//   );
// };

// //view booking requests by service provider
// export const viewBookingRequestByProvider = async (headers) => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/serviceprovider/primarybooking/view`,
//     "",
//     headers
//   );
// };

// // accept booking request by service provider
// export const acceptBookingRequestByProvider = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/primarybooking/accept`,
//     req,
//     headers
//   );
// };

// // accept booking request by service provider
// export const rejectBookingRequestByProvider = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/primarybooking/reject`,
//     req,
//     headers
//   );
// };

// //view all booking by admin
// export const viewBookingRequestByAdmin = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/primarybooking/view`,
//     "",
//     ""
//   );
// };

// //accept request by admin
// export const acceptBookingRequestByAdmin = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/primarybooking/accept`,
//     req,
//     ""
//   );
// };

// //reject request by admin
// export const rejectBookingRequestByAdmin = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/primarybooking/reject`,
//     req,
//     ""
//   );
// };

// //view unpaid booking requests by user
// // export const getUnpaidBookingStatus = async (headers) => {
// //   return await commonAPI(
// //     "GET",
// //     `${base_URL}/maternalcare/primarybooking/billunpaid/view`,
// //     "",
// //     headers
// //   );
// // };

// //view booking requests by user
// export const getBookingStatus = async (headers) => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/primarybooking/user/view`,
//     "",
//     headers
//   );
// };

// // pay amount by user
// export const paymentUser = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/primarybooking/user/payment/view`,
//     req,
//     headers
//   );
// };

// //view all webinars by user
// export const viewWebinar = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/user/webinar/view`,
//     "",
//     ""
//   );
// };

// //view all blogs by user
// export const viewAllBlogByUser = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/user/blog/view`,
//     "",
//     ""
//   );
// };

// //view all leave request by admin
// export const viewAllLeaveRequests = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/admin/serviceprovider/leaverequest/view`,
//     "",
//     ""
//   );
// };

// //accept leave request by admin
// export const acceptLeaveRequestByAdmin = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/serviceprovider/leaverequest/accept`,
//     req,
//     ""
//   );
// };

// //reject leave request by admin
// export const rejectLeaveRequestByAdmin = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/admin/serviceprovider/leaverequest/reject`,
//     req,
//     ""
//   );
// };

// // post review by user
// export const addReviewAPI = async (req, headers) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/review`,
//     req,
//     headers
//   );
// };

// // get review
// export const getReviewAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/review/view`,
//     req,
//     ""
//   );
// };

// // get salary of service provider
// export const viewSalaryAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/salary`,
//     req,
//     ""
//   );
// };

// // get salary of service provider
// export const getUserAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/user/get/id`,
//     req,
//     ""
//   );
// };

// // get salary of service provider
// export const getProviderAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/serviceprovider/get/id`,
//     req,
//     ""
//   );
// };

// // get categories
// export const getAllCategoriesAPI = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/category/get`,
//     "",
//     ""
//   );
// };

// // add categories
// export const addCategoryAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/maincategory/add`,
//     req,
//     ""
//   );
// };

// // add subcategory
// export const addSubCategoryAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/subcategory/add`,
//     req,
//     ""
//   );
// };

// // delete category
// export const deleteCategoryAPI = async (req) => {
//   return await commonAPI(
//     "DELETE",
//     `${base_URL}/maternalcare/maincategory/delete`,
//     req,
//     ""
//   );
// };

// //get Emergency support
// export const getEmergencyAPI = async () => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/emergency/get`,
//     "",
//     ""
//   );
// };

// // add emergency contact
// export const addEmergencyAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/emergency/add`,
//     req,
//     ""
//   );
// };

// //sent message by user
// export const sentMessageUserAPI = async (req) => {
//   return await commonAPI("POST", `${base_URL}/maternalcare/chat/post`, req, "");
// };

// //receive message by user
// export const receiveMessageAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternity/chat/user/read`,
//     req,
//     ""
//   );
// };

// //get all messages for admin
// export const getAllMessagesAPI = async () => {
//   return await commonAPI("GET", `${base_URL}/maternalcare/chat/get`, "", "");
// };

// // sent message by admin
// export const sentMessageByAdminAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternitycare/admin/chat/post`,
//     req,
//     ""
//   );
// };

// // get message by admin
// export const getMessageByAdminAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/chat/admin/read`,
//     req,
//     ""
//   );
// };

// // get message by user
// export const getMessageByUserAPI = async (req) => {
//   return await commonAPI("POST", `${base_URL}/maternalcare/chat/user`, req, "");
// };

// // register complaint by user
// export const registerComplaintAPI = async (req) => {
//   return await commonAPI(
//     "POST",
//     `${base_URL}/maternalcare/complaints/post`,
//     req,
//     ""
//   );
// };

// // register complaint by user
// export const getComplaintsAPI = async (req) => {
//   return await commonAPI(
//     "GET",
//     `${base_URL}/maternalcare/complaints/get`,
//     req,
//     ""
//   );
// };
