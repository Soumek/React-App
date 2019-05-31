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
export const MENU_ITEMS_EMPRESAS=gql`
query getMenuItemsEmpresas{
    getMenuItemsEmpresas{
        id
        tipo
      	icon
      	condicion
    }
}
`;
