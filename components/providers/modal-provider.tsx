"use client";
import CreateServerModal from "@/components/molecules/create-server-modal";
import CreateChannel from "@/components/molecules/createChannel";
import EditServerModal from "@/components/molecules/edit-server";
import InviteModal from "@/components/molecules/invite-modal";
import MembersModal from "@/components/molecules/members-modal";

export default function ModalProvider() {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannel />
    </>
  );
}
