import gql from "graphql-tag";
// USUARIOS

export const USUARIO_ACTUAL=gql`
query obtenerUsuario{
    obtenerUsuario{
        usuario
        rol
    }
}
`