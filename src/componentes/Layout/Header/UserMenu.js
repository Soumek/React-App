import React from "react";
import {UserNavMenu, UserNavLink} from './HeaderStyles';
import CerrarSesion from './CerrarSesion';
export default function UserMenu() {
  return (
    <UserNavMenu className="position-absolute">
    <ul>
      <UserNavLink>Perfil</UserNavLink>
      <UserNavLink to="/admin">Administrar</UserNavLink>
      <UserNavLink>Historial</UserNavLink>
      <CerrarSesion/>
    </ul>
    </UserNavMenu>
  );
}
