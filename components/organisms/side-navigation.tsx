import React from "react";
import currentProfile from "../../lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function SideNavigation() {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.servers.findMany({ where: { members: { some: { profileId: profile.id } } } });

  return (
    <div className="space-y-4 flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      Sidebar Navigation
    </div>
  );
}
