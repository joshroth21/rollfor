import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RollTableRow from "./row-table-row";

const meta = {
  title: "RollTable/Roll Table/Row",
  component: RollTableRow,
  parameters: {
    layout: "fullscreen",
  },
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
