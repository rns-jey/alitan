import { NextResponse } from "next/server";
import CurrentProfile from "../../../lib/current-profile";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../lib/db";
import { MemberRole } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await CurrentProfile();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const server = await db.servers.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: uuidv4(),
        channel: {
          create: [{ name: "General", profileId: profile.id }],
        },
        members: {
          create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
