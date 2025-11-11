"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Inbox } from "lucide-react";
import NewRowButton from "../roll-table/new-row-button";

export default function QueueTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center text-xl">
          <Inbox /> Queue
        </CardTitle>
      </CardHeader>
      <CardContent>
      </CardContent>
	  <CardFooter>
        <NewRowButton label="New item" />
	  </CardFooter>
    </Card>
  );
}
