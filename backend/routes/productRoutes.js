import express from "express";
import {createProducts,createReviewForProduct,deleteProduct, deleteReview, getAdminProducts, getAllProducts, getProductReviews, getSingleProduct, updateProduct} from "../controller/productController.js";
import { rolebasedAccess, verifyUserAuth } from "../middleware/userAuth.js";
const router = express.Router();

//Route
router.route("/products").get(getAllProducts);

router.route("/admin/products").get(verifyUserAuth,rolebasedAccess("admin"),getAdminProducts);

router.route("/admin/product/create").post(verifyUserAuth,rolebasedAccess("admin"),createProducts);

router.route("/admin/product/:id").put(verifyUserAuth,rolebasedAccess("admin"),updateProduct).delete(verifyUserAuth,rolebasedAccess("admin"),deleteProduct);

router.route("/product/:id").get(getSingleProduct);
router.route("/review").put(verifyUserAuth,createReviewForProduct);
router.route("/admin/reviews").get(verifyUserAuth,rolebasedAccess("admin"),getProductReviews).delete(verifyUserAuth,rolebasedAccess("admin"),deleteReview);

export default router;
