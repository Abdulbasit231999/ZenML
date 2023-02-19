import React from "react";
import { Outlet } from "react-router";

export function BaseLayout() {
  return (
    <div>
      BaseLayout
      <Outlet />
    </div>
  );
}
