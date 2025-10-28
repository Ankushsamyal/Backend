class ApiError extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        error = [],
        stackcr =""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message= message
        this.success= false
        this.errors= error
        if(stackcr){
            this.stack= stackcr
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {ApiError}