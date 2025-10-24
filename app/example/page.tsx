"use client";

import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaInbox, FaPlus, FaXmark } from "react-icons/fa6";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { twMerge } from "tailwind-merge";

type RollTableRow = {
  number: number;
  content: string;
};

export default function ExamplePage() {
  const createTableRows = (numberOfRows: number) => {
    const numbersToTwenty = Array.from(Array(numberOfRows).keys());
    const rows: RollTableRow[] = numbersToTwenty.map((value) => ({
      number: value + 1,
      content: `Lorem ipsum ${value + 1}`,
    }));
    return rows;
  };
  const [tableRows, setTableRows] = useState(createTableRows(20));
  const [isQueueCollapsed, setIsQueueCollapsed] = useState(false);
  const [tableQueue, setTableQueue] = useState<string[]>(["Lorem", "ipsum"]);
  const [showQueueForm, setShowQueueForm] = useState(false);
  const removeRow = (rowToRemove: RollTableRow) => {
    setTableRows(tableRows.filter((tableRow) => tableRow !== rowToRemove)); // TODO: Add random from queue
  };
  return (
    <>
      <Header />
      <main className="container mx-auto grid grid-cols-12 gap-4">
        <div
          className={twMerge(
            "col-span-12",
            isQueueCollapsed ? "lg:col-span-11" : "lg:col-span-8"
          )}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-2">#</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow key={row.number} className="group">
                  <TableCell className="font-mono font-semibold text-gray-500">
                    {row.number}
                  </TableCell>
                  <TableCell className="flex items-center">
                    <span>{row.content}</span>
                    <Button
                      variant="outline"
                      className="invisible group-hover:visible ml-auto rounded-full"
                      size="icon-sm"
                      onClick={() => removeRow(row)}
                      title="Remove"
                    >
                      <FaXmark />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div
          className={twMerge(
            "hidden lg:flex lg:flex-col border bg-gray-50 p-4 rounded",
            isQueueCollapsed ? "lg:col-span-1" : "lg:col-span-4"
          )}
        >
          {isQueueCollapsed ? (
            <Button
              className="mx-auto"
              size="icon"
              variant="outline"
              onClick={() => setIsQueueCollapsed(!isQueueCollapsed)}
            >
              <GoSidebarExpand />
            </Button>
          ) : (
            <>
              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setIsQueueCollapsed(!isQueueCollapsed)}
                >
                  <GoSidebarCollapse />
                </Button>
                <h3 className="flex items-center">
                  <FaInbox className="mr-2" />
                  <span className="font-semibold text-lg">Queue</span>
                </h3>
                <Button
                  className="ml-auto"
                  size="icon"
                  variant={"outline"}
                  onClick={() => setShowQueueForm(!showQueueForm)}
                  title="Add Item to Queue"
                >
                  <FaPlus />
                </Button>
              </div>
              {showQueueForm && (
                <div className="my-3 flex gap-2">
                  <Input className="bg-white" placeholder="Add Item to Queue" />
                  <Button size="icon" variant={"outline"}>
                    <FaArrowDown />
                  </Button>
                </div>
              )}
              <Table>
                <TableBody>
                  {tableQueue.map((value) => (
                    <TableRow key={value}>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </div>
      </main>
    </>
  );
}
