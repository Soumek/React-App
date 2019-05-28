import mongoose,{Schema} from 'mongoose';
import bcrypt from "bcrypt";
mongoose.Promise= global.Promise;

mongoose.connect('mongodb://localhost/umbani', {useNewUrlParser:true});
mongoose.set('setFindandModify', false);
//definir el schema de clientes

const userSchema = new mongoose.Schema({
    usuario:String,
    password:String,
    email:String,
    rol:String,
});

userSchema.pre('save', function(next){
    //si el passwordn o esta modificado, ejecutar la siguiente funcion
    if(!this.isModified('password')){
        return next;
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err);
            this.password=hash;
            next();
        });
    })
});
const Usuarios= mongoose.model('usuarios', userSchema);

const clienteSchema= new mongoose.Schema({
    usuarioid:String,
    nombre: String,
    apellido: String,
    empresas:Array,
    edad:Number,
    rolcliente:String,

});
const Clientes=mongoose.model('clientes', clienteSchema);



const productoSchema=new mongoose.Schema({
    idempresa:String,
    nombre:String,
    cantidad:Number,
    precio:Number,
    descuento:Number,
});
const Productos=mongoose.model('productos', productoSchema);
const empresaSchema= new mongoose.Schema({
    clienteid:String,
    nombre:String,
    tipo:String,
    imagen:String,
    productos:[productoSchema]
});
const Empresas=mongoose.model('empresas', empresaSchema);
export {Usuarios, Clientes,Empresas, Productos};