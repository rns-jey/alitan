"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../atoms/button";
import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

export default function DeleteServerModal() {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "deleteServer";
  const { server } = data;

  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const onClick = async () => {
    try {
      setLoading(true);

      await axios.delete(`/api/servers/${server?.id}`);

      onClose();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">Delete Server</DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to delete <span className="font-semibold text-indigo-500">{server?.name}</span>? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button disabled={isLoading} onClick={onClick} variant="primary">
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
