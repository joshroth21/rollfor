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
import { toast } from "sonner";
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
  const [tableQueue, setTableQueue] = useState<string[]>(["Lorem", "ipsum"]);
  const [isQueueCollapsed, setIsQueueCollapsed] = useState(true);
  const [showQueueForm, setShowQueueForm] = useState(false);
  const [queueInputValue, setQueueInputValue] = useState("");

  const addToQueue = () => {
    if (queueInputValue.trim()) {
      setTableQueue((prevQueue) => [queueInputValue.trim(), ...prevQueue]);
      setQueueInputValue("");
      setShowQueueForm(false);
    }
  };

  const removeFromQueue = (value: string) => {
    setTableQueue(tableQueue.filter((rowValue) => rowValue !== value));
  };

  const handleQueueInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addToQueue();
    }
  };

  const removeRow = (rowToRemove: RollTableRow) => {
    // Add random item from queue if queue has items
    if (tableQueue.length > 0) {
      const randomIndex = Math.floor(Math.random() * tableQueue.length);
      const randomQueueItem = tableQueue[randomIndex];

      // Replace the removed row with a new row using the same number
      const newRow: RollTableRow = {
        number: rowToRemove.number,
        content: randomQueueItem,
      };

      // Replace the row instead of removing it
      setTableRows((prevRows) =>
        prevRows.map((row) => (row === rowToRemove ? newRow : row))
      );

      // Remove the used item from queue
      setTableQueue((prevQueue) =>
        prevQueue.filter((_, index) => index !== randomIndex)
      );
      toast("Randomly added from queue");
    } else {
      // If no queue items, just remove the row
      // setTableRows(tableRows.filter((tableRow) => tableRow !== rowToRemove));
      toast.warning("Nothing left in queue!");
    }
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
              title="Show queue"
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
                  title="Hide queue"
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
                  <Input
                    className="bg-white"
                    placeholder="Add Item to Queue"
                    value={queueInputValue}
                    onChange={(e) => setQueueInputValue(e.target.value)}
                    onKeyDown={handleQueueInputKeyDown}
                  />
                  <Button
                    size="icon"
                    variant={"outline"}
                    onClick={addToQueue}
                    disabled={!queueInputValue.trim()}
                  >
                    <FaArrowDown />
                  </Button>
                </div>
              )}
              {tableQueue.length > 0 ? (
                <Table>
                  <TableBody>
                    {tableQueue.map((value) => (
                      <TableRow className="flex group" key={value}>
                        <TableCell className="flex-1">{value}</TableCell>
                        <TableCell>
                          <Button
                            className="invisible group-hover:visible"
                            size="icon-sm"
                            onClick={() => removeFromQueue(value)}
                          >
                            <FaXmark />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="font-mono italic opacity-50 text-center mt-4">
                  Queue is empty
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
