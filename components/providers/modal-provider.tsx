"use client";
import CreateServerModal from "@/components/molecules/create-server-modal";
import EditServerModal from "@/components/molecules/edit-server";
import InviteModal from "@/components/molecules/invite-modal";
import MembersModal from "@/components/molecules/members-modal";
import CreateChannelModal from "../molecules/create-channel-modal";
import LeaveServerModal from "../molecules/leave-server-modal";
import DeleteServerModal from "../molecules/delete-server-modal";
import DeleteChannelModal from "../molecules/delete-channel-modal";
import EditChannelModal from "../molecules/edit-channel-modal";
import MessageFileModal from "../molecules/message-file-modal";
import DeleteMessageModal from "../molecules/delete-message-modal";

export default function ModalProvider() {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
}
