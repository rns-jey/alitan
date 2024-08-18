import { Server as NetServer, Socket } from "net";
import { Server as SocketIOServer } from "socket.io";
import { Profile, Member, Server } from "@prisma/client";
import { NextApiResponse } from "next";

export type ServerWithMembersWithProfiles = Server & { members: (Member & { profile: Profile })[] };

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
