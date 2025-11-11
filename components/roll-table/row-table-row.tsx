"use client";

import { TableCell, TableRow } from "../ui/table";
import { Input } from "../ui/input";
import { RollTableRowType } from "./roll-table.types";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useInlineEdit } from "../../lib/hooks/use-inline-edit";

type RollTableRowProps = {
  row: RollTableRowType;
  // onValueChange?: (number: number, newValue: string) => void;
};

export default function RollTableRow({ row }: RollTableRowProps) {
  const {
    isEditing,
    editedValue,
    setEditedValue,
    inputRef,
    containerRef,
    startEditing,
  } = useInlineEdit({
    value: row.value,
    // onSave: (value) => {
    //   // TODO: Implement save callback
    // },
  });

  return (
    <TableRow key={row.number} className="group">
      <TableCell className="font-mono font-semibold">{row.number}</TableCell>
      <TableCell>
        {isEditing ? (
          <div ref={containerRef} className="cursor-text">
            <Input
              ref={inputRef}
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="h-auto py-1 w-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ) : (
          <span onClick={startEditing}>{row.value}</span>
        )}
      </TableCell>
      <TableCell>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full invisible group-hover:visible"
        >
          <X />
        </Button>
      </TableCell>
    </TableRow>
  );
}
