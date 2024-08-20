"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../atoms/button";
import { useState } from "react";
import qs from "query-string";

import axios from "axios";

export default function DeleteMessageModal() {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "deleteMessage";
  const { apiUrl, query } = data;

  const [isLoading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const url = qs.stringifyUrl({
        url: apiUrl || "",
        query,
      });

      await axios.delete(url);

      onClose();
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
          <DialogTitle className="text-2xl text-center font-bold">Delete Message</DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to delete this message? This action cannot be undone.
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
