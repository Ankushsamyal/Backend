const asyncHandler =(functionHandler)= (req, res, next)=>{
    Promise.resolve(functionHandler(req, res, next)).catch((err)=>{next(err)})
}






// const asyncAwaitFunction = (fn) = async (req,res,next)=>{
//     try {
//        await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.msg
//         })
//     }
// }