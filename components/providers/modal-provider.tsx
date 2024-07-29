"use client";
import CreateServerModal from "../molecules/create-server-modal";
import EditServerModal from "../molecules/edit-server";
import InviteModal from "../molecules/invite-modal";

export default function ModalProvider() {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
    </>
  );
}
