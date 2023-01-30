import { Router } from "express";
import { purchase } from "../Controller/PurchaseController.js";
import { authValidation } from "../Middleware/AuthMiddleware.js";
import { purchaseSchemaValidation } from "../Middleware/PurchaseMiddleware.js";

const purchaseRouter = Router();

purchaseRouter.post("/checkout", authValidation, purchaseSchemaValidation, purchase);

export default purchaseRouter;