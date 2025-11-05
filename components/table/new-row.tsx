"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";

type NewRowProps = {
	label?: string;
}

export default function NewRow({ label = 'New row' }: NewRowProps) {
  return (
	<Button variant="outline" className="border-dashed shadow-none w-full text-gray-300 hover:text-gray-300 hover:bg-gray-50">
		<Plus />
		{label}
	</Button>
  )
}
