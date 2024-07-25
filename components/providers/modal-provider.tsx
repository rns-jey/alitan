"use client";
import CreateServerModal from "../molecules/create-server-modal";
import InviteModal from "../molecules/invite-modal";

export default function ModalProvider() {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
}
