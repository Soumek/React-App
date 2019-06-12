export default class CustomError extends Error{
    message=this.message || "El usuario no existe";
}