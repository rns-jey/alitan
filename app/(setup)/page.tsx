import InitialModal from "@/components/molecules/initial-modal";
import { db } from "@/lib/db";
import initialProfile from "@/lib/initial-profile";
import { redirect } from "next/navigation";

export default async function SetupPage() {
  const profile = await initialProfile();

  if (!profile) return;

  const server = await db.servers.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
}
