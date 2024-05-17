import express from "express";
import {
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  getAllTeamMembers,
  getTeamMember,
  searchTeamMember
} from "../Controllers/teamMemberController.js";
const teamMemberRoute = express.Router();

// http://{domain-name}/api/teamMembers/create
teamMemberRoute.post("/create", createTeamMember);

// http://{domain-name}/api/teamMembers/:teamMemberId
teamMemberRoute.put("/update/:teamMemberId", updateTeamMember);

// http://{domain-name}/api/teamMembers/:teamMemberId
teamMemberRoute.delete("/delete/:teamMemberId", deleteTeamMember);

// http://{domain-name}/api/teamMembers/:teamMemberId
teamMemberRoute.get("/getSingleTeamMember/:teamMemberId", getTeamMember);

// http://{domain-name}/api/teamMembers/find
teamMemberRoute.get("/find", getAllTeamMembers);

// http://{domain-name}/api/teamMembers/query
teamMemberRoute.get("/query", searchTeamMember);

export default teamMemberRoute;
