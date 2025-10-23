import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type RollTableRow = {
  number: number;
  content: string;
};

export default function ExamplePage() {
  const createTableRows = () => {
    const numbersToTwenty = Array.from(Array(20).keys());
    const rows: RollTableRow[] = numbersToTwenty.map((value) => ({
      number: value + 1,
      content: `Lorem ipsum ${value+1}`,
    }));
    return rows;
  };
  return (
    <main className="container mx-auto">
      <Table className="mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        {createTableRows().map((row) => (
          <TableRow key={row.number}>
            <TableCell className="font-mono font-semibold text-gray-500">
              {row.number}
            </TableCell>
            <TableCell>{row.content}</TableCell>
          </TableRow>
        ))}
      </Table>
    </main>
  );
}
