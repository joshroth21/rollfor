"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

type NewRowProps = {
  label?: string;
  onClick?: () => void;
};

export default function NewRowButton({
  label = "New row",
  onClick,
}: NewRowProps) {
  return (
    <Button
      variant="outline"
      className={twMerge(
        "border-dashed shadow-none w-full text-gray-300 dark:text-gray-600 hover:text-gray-300 dark:hover:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50",
		onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <Plus />
      {label}
    </Button>
  );
}
