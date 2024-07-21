import React from "react";
import SideNavigation from "../../components/organisms/side-navigation";

export default async function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <SideNavigation />
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
}
