import { db } from "@/lib/db";
import initialProfile from "@/lib/initial-profile";
import { ChannelType } from "@prisma/client";
import { redirect } from "next/navigation";
import ServerHeader from "../molecules/server-header";

interface ServerSidebarProps {
  serverId: string;
}

export default async function ServerSidebar({ serverId }: ServerSidebarProps) {
  const profile = await initialProfile();

  if (!profile) return redirect("/");

  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: { createdAt: "asc" },
      },
      members: {
        include: { profile: true },
        orderBy: { role: "asc" },
      },
    },
  });

  if (!server) return redirect("/");

  const textChannels = server.channels.filter((channel) => channel.type === ChannelType.TEXT);
  const audioChannels = server.channels.filter((channel) => channel.type === ChannelType.AUDIO);
  const videoChannels = server.channels.filter((channel) => channel.type === ChannelType.VIDEO);

  const members = server.members.filter((member) => member.profileId !== profile.id);

  const role = server.members.find((member) => member.profileId === profile.id)?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full BG-[#F2F3F5] dark:bg-[#2B2D31]">
      <ServerHeader server={server} role={role} />
    </div>
  );
}
