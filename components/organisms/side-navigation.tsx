import React from "react";
import currentProfile from "../../lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import NavigationAction from "./navigation-action";
import { Separator } from "@/components/atoms/separator";
import { ScrollArea } from "@/components/molecules/scroll-area";
import NavigationItem from "@/components/molecules/navigation-item";

export default async function SideNavigation() {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.servers.findMany({ where: { members: { some: { profileId: profile.id } } } });

  return (
    <div className="space-y-4 flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem id={server.id} name={server.name} imageUrl={server.imageUrl} />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
