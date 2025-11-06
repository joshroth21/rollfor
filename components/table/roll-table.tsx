"use client";

import { Settings } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import NewRow from "./new-row";
import { RollTableProps } from "./roll-table.types";
import RollTableRow from "./row-table-row";

export default function RollTable({
  tableName,
  tableIcon,
  tableRows,
}: RollTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {tableIcon ? <DynamicIcon name={tableIcon} /> : null}
          {tableName}
        </CardTitle>
        <CardAction>
          <Button variant="outline" size="icon" title="Settings">
            <Settings />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((row) => (
              <RollTableRow key={row.number} row={row} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <NewRow />
      </CardFooter>
    </Card>
  );
}
