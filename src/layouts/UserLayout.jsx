import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/user/Sidebar";

export default function UserLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Outlet />
    </>
  );
}