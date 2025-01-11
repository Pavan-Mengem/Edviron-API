import { Router } from "express";
import { GetAllTransaction ,GetTransctionByCustomOrderId,GetTransctionBySchool,webhookStatusUpdate,manualStatusUpdate} from "../controllers/transaction..controller.js";


const router = Router()


// router.route("/login").post(loginUser)

//secured routes
// router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/all").get(GetAllTransaction)
router.route("/:school_id").get(GetTransctionBySchool)
router.route("/status/:custom_order_id").get(GetTransctionByCustomOrderId)
router.route("/webhook-status-update").post(webhookStatusUpdate)
router.route("/status-update").post(manualStatusUpdate)




export default router