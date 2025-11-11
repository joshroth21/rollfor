"use client";

import { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Input } from "../ui/input";
import { RollTableRowType } from "./roll-table.types";
import { Button } from "../ui/button";
import { Save, X } from "lucide-react";

type RollTableRowProps = {
  row: RollTableRowType;
  // onValueChange?: (number: number, newValue: string) => void;
};

export default function RollTableRow({ row }: RollTableRowProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <TableRow key={row.number} className="group">
      <TableCell className="font-mono font-semibold">{row.number}</TableCell>
      <TableCell className="cursor-text">
        {isEditing ? (
          <div className="flex gap-2">
            <Input
              value={row.value}
              className="h-auto py-1 w-auto"
              onClick={(e) => e.stopPropagation()}
            />
            <Button size="icon" onClick={handleSave}>
              <Save />
            </Button>
          </div>
        ) : (
          <span onClick={handleClick}>{row.value}</span>
        )}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="icon" className="rounded-full invisible group-hover:visible">
          <X />
        </Button>
      </TableCell>
    </TableRow>
  );
}
