"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";

type NewRowProps = {
	label?: string;
}

export default function NewRow({ label = 'New row' }: NewRowProps) {
  return (
	<Button variant="outline" className="border-dashed shadow-none w-full text-gray-300 dark:text-gray-600 hover:text-gray-300 dark:hover:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50">
		<Plus />
		{label}
	</Button>
  )
}
