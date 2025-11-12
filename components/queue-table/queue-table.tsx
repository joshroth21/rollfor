"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Inbox, X } from "lucide-react";
import NewRowButton from "../roll-table/new-row-button";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";

type QueueTableProps = {
  tableRows?: string[];
};

export default function QueueTable({ tableRows }: QueueTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center text-xl">
          <Inbox /> Queue
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tableRows ? (
          <Table>
            <TableBody>
              {tableRows.map((val) => (
                <TableRow key={val} className="group">
                  <TableCell>{val}</TableCell>
                  <TableCell className="w-9">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full invisible group-hover:visible"
                    >
                      <X />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <NewRowButton label="New item" />
      </CardFooter>
    </Card>
  );
}
