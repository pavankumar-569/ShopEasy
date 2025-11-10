import express from "express";
import { rolebasedAccess, verifyUserAuth } from "../middleware/userAuth.js";
import { allMyOrders, createNewOrder, deleteOrder, getAllOrders, getSingleOrder, updateOrderStatus } from "../controller/orderController.js";
const router = express.Router();

router.route('/new/order').post(verifyUserAuth,createNewOrder);
router.route('/admin/order/:id').get(verifyUserAuth,rolebasedAccess('admin'), getSingleOrder).put(updateOrderStatus).delete(deleteOrder);
router.route('/order/:id').get(verifyUserAuth,getSingleOrder)
router.route('/admin/orders').get(verifyUserAuth,rolebasedAccess('admin'), getAllOrders);
router.route('/orders/user').get(verifyUserAuth, allMyOrders);

export default router;
