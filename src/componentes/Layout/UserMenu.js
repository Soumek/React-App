import React from "react";
import {UserNavMenu} from './HeaderStyles';
export default function UserMenu() {
  return (
    <UserNavMenu className="position-absolute">
    <ul>
      <li>Perro</li>
      <li>Gato</li>
      <li>Zebra</li>
    </ul>
    </UserNavMenu>
  );
}
