import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import QueueTable from "./queue-table";

const meta = {
  title: "RollTable/Queue",
  component: QueueTable,
  args: {},
} satisfies Meta<typeof QueueTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Queue: Story = {
};
