import { IconName } from "lucide-react/dynamic";

export type RollTableRowType = {
  number: number;
  value: string;
};

export interface RollTableProps {
  tableName: string;
  tableIcon?: IconName;
  tableRows: RollTableRowType[];
}
