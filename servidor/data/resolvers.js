import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Usuarios, Clientes, Empresas, Rutas, SubRutas } from "./db";
import {UserInputError} from 'apollo-server-express';
//Generar Token
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

import jwt from "jsonwebtoken";

const crearToken = (usuarioLogin, secreto, expiresIn) => {
  const { usuario } = usuarioLogin;
  return jwt.sign({ usuario }, secreto, { expiresIn });
};

export const resolvers = {
  Query: {
    getUsuarios: (root, { limite, offset }) => {
      return Usuarios.find({})
        .limit(limite)
        .skip(offset);
    },
    getClientes: root => {
      return Clientes.find({});
    },
    getEmpresas: root => {
      return Empresas.find({});
    },
    obtenerUsuario: (root, args, { usuarioActual }) => {
      if (!usuarioActual) {
        return null;
      }
      //obtener el usuario actual del requerst de jwt verificado.
      const usuario = Usuarios.findOne({ usuario: usuarioActual.usuario });
      return usuario;
    },
    getSubRutas: (root, { ruta }) => {
      const rutaActual = Rutas.findOne({ nombre: ruta });
      return rutaActual;
    }
  },
  Mutation: {
    crearUsuario: async (root, { input }) => {
      const usuario = input.usuario.trim();
      const existeUsuario = await Usuarios.findOne({ usuario });
      if (existeUsuario) {
        throw new UserInputError("El usuario ya existe");
      }
      const nuevoUsuario = await new Usuarios({
        usuario,
        password: input.password,
        email: input.email,
        rol: "user"
      });
      return new Promise((resolve, reject) => {
        nuevoUsuario.save(error => {
          if (error) reject(error);
          else resolve("El usuario se ha ingresado correctamente");
        });
      });
    },
    autenticarUsuario: async (root, { usuario, password }) => {
      const nombreUsuario = await Usuarios.findOne({ usuario });
      if (!nombreUsuario) {
        throw new UserInputError("El Usuario no existe");
      }

      const passwordCorrecto = await bcrypt.compare(
        password,
        nombreUsuario.password
      );

      if (!passwordCorrecto) {
        throw new Error("Password Incorrecto");
      }

      return {
        token: crearToken(nombreUsuario, process.env.SECRETO, "1hr")
      };
    },
    crearCliente: (root, { input }) => {
      const nuevoCliente = new Clientes({
        usuarioid: input.usuarioid,
        nombre: input.nombre,
        apellido: input.apellido,
        empresas: input.empresas,
        edad: input.edad,
        rolcliente: input.rolcliente
      });
      nuevoCliente.id = nuevoCliente._id;
      return new Promise((resolve, reject) => {
        nuevoCliente.save(error => {
          if (error) reject(error);
          else resolve(nuevoCliente);
        });
      });
    },
    actualizarCliente: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Clientes.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, cliente) => {
            if (error) reject(error);
            else resolve(cliente);
          }
        );
      });
    },
    crearEmpresa: (root, { input }) => {
      const nuevaEmpresa = new Empresas({
        clienteid: input.clienteid,
        nombre: input.nombre,
        tipo: input.tipo,
        imagen: input.imagen,
        productos: input.productos
      });
      nuevaEmpresa.id = nuevaEmpresa._id;
      return new Promise((resolve, reject) => {
        nuevaEmpresa.save(error => {
          if (error) reject(error);
          else resolve(nuevaEmpresa);
        });
      });
    },
    actualizarEmpresa: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Empresas.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, empresa) => {
            if (error) reject(error);
            else resolve(empresa);
          }
        );
      });
    },
    eliminarEmpresa: (root, { id, clienteid }) => {
      return new Promise((resolve, reject) => {
        Empresas.findOneAndDelete({ _id: id }, error => {
          if (error) reject(error);
          else resolve("La empresa ha sido eliminada satisfactoriamente");
        });
      });
    },
    crearProducto: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Empresas.findById(input.idempresa, (error, empresa) => {
          if (error) reject(error);
          else {
            empresa.productos.push({
              nombre: input.nombre,
              cantidad: input.cantidad,
              precio: input.precio,
              descuento: input.descuento
            });
            empresa.save(error => {
              if (error) reject(error);
              else resolve("El producto se ha agregado correctamente.");
            });
          }
        });
      });
    },
    actualizarProducto: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Empresas.findById(input.idempresa, (error, empresa) => {
          if (error) reject(error);
          else {
            const producto = empresa.productos.id(input.id);
            producto.set({
              nombre: input.nombre,
              cantidad: input.cantidad,
              precio: input.precio,
              descuento: input.descuento
            });
            empresa.save(error => {
              if (error) reject(error);
              else resolve("El producto se ha agregado correctamente2");
            });
          }
        });
      });
    },
    eliminarProducto: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Empresas.findById(input.idempresa, (error, empresa) => {
          if (error) reject(error);
          else {
            empresa.productos.id(input.id).remove();
            empresa.save(error => {
              if (error) reject(error);
              else resolve("El producto se ha eliminado correctamente");
            });
          }
        });
      });
    },
    crearSubRuta: async (root, { input }) => {
      const nombresubruta=input.nombresubruta
      const subRuta= await SubRutas.findOne({nombresubruta});
      if(subRuta){
        throw new Error("La ruta ya se encuentra registrada.");
      }
      const nuevaSubRuta = await new SubRutas({
        nombresubruta:input.nombresubruta,
        path:input.path,
        icono:input.icono,
        ubicacion: input.ubicacion,
        condicion:input.condicion
      });
      nuevaSubRuta.id = nuevaSubRuta._id;
      return new Promise((resolve, reject) => {
        nuevaSubRuta.save(error => {
          if (error) reject(error);
          else resolve("La subruta se ha creado satisfactoriamente");
        });
      });
    }
    
  }
};

// getUsuario: (root, {id}) =>{
//     return new Promise((resolve, object)=>{
//         Usuarios.findById(id, (error, usuario) =>{
//             if (error) rejects(error)
//             else resolve(usuario)
//         })
//     })
// },
// totalUsuarios:(root)=>{
//     return new Promise((resolve,object)=>{
//         Usuarios.countDocuments({},(error,count)=>{
//             if(error) rejects(error)
//             else resolve(count)
//         })
//     })
// }

// actualizarCliente: (root, {input}) =>{
//    return new Promise((resolve, cliente)=>{
//        Clientes.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, cliente) =>{
//            if(error) rejects(error)
//            else resolve(cliente)
//        });
//    });
// },
// eliminarCliente: (root, {id}) =>{
//     return new Promise((resolve, object)=>{
//         Clientes.findOneAndDelete({ _id: id }, (error) => {
//             if (error) rejects(error)
//             else resolve("El cliente se eliminó Satisfactoriamente")
//         });
//     });
// }
