import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import RollTable from "./roll-table";

const meta = {
  title: "RollTable/Roll Table",
  component: RollTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof RollTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tableName: 'Sample Table',
    tableIcon: 'table',
    tableRows: [{
      number: 1,
      value: "Lorem ipsum"
    }]
  },
};
