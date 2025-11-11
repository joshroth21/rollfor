import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RollTableRow from "./row-table-row";

const meta = {
  title: "RollTable/Row",
  component: RollTableRow,
  args: {},
} satisfies Meta<typeof RollTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    row: {
      number: 1,
      value: "Lorem ipsum",
    },
  },
};
