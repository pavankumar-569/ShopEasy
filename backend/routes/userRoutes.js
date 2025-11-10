import express from "express";
import { getUserDetails, getUsersList, loginUser, logout, registerUser, requestPasswordReset, resetPassword, updatePassword, updateProfile,getSingleUser, updateUserRole, deleteUser } from "../controller/userController.js";
import { rolebasedAccess, verifyUserAuth } from "../middleware/userAuth.js";
const router=express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(requestPasswordReset);
router.route("/reset/:token").post(resetPassword);
router.route("/profile").get(verifyUserAuth,getUserDetails);
router.route("/password/update").put(verifyUserAuth,updatePassword);
router.route("/profile/update").put(verifyUserAuth,updateProfile);
router.route("/admin/users").get(verifyUserAuth,rolebasedAccess("admin"),getUsersList);
router.route("/admin/user/:id").get(verifyUserAuth,rolebasedAccess("admin"),getSingleUser).put(verifyUserAuth,rolebasedAccess("admin"),updateUserRole).delete(verifyUserAuth,rolebasedAccess("admin"),deleteUser);

export default router;