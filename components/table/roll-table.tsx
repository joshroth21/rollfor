"use client";

import { Settings } from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import NewRow from "./new-row";

type RollTableRow = {
  number: number;
  value: string;
};

interface RollTableProps {
  tableName: string;
  tableIcon?: IconName;
  tableRows: RollTableRow[];
}

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
              <TableRow key={row.number}>
                <TableCell className="font-mono font-semibold">
                  {row.number}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
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
