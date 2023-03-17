import { addAccount } from "../services/userAccount.js"
import asyncHandler from "../middleware/async.js"

export const createUserAccount = asyncHandler (async(req,res) => {
    const ans = await addAccount (req.body)
    //res.send(ans)
    return makeResponse({
        res,
        status: 201,
        data: ans,
        message: 'A new acccount have been created',
    })
})