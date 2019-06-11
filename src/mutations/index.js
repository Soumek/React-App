import gql from "graphql-tag";
export const NUEVO_USUARIO=gql`
mutation crearUsuario($input: UsuarioInput) {
  crearUsuario(input: $input)
}
`;

export const AUTENTICAR_USUARIO=gql`
mutation autenticarUsuario($usuario: String! $password: String!
){autenticarUsuario(usuario: $usuario password: $password
){
  token
} 
}`

export const ACTUALIZAR_MENU_EMPRESA=gql`
mutation actualizarMenuItemEmpresa($input: MenuItemEmpresaInput) {
  actualizarMenuItemEmpresa(input: $input)
}
`;

export const CREAR_SUBRUTA=gql`
mutation crearSubRuta($input: SubRutaInput) {
  crearSubRuta(input: $input)
}
`;