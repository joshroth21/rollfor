import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import RollTable from "./roll-table";

const meta = {
  title: "RollTable",
  component: RollTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof RollTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    tableName: "Sample Table",
    tableIcon: "table",
    tableRows: [
      {
        number: 1,
        value: "Lorem ipsum",
      },
    ],
  },
};
