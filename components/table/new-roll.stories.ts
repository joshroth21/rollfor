import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import NewRow from './new-row';

const meta = {
  title: "RollTable/New Row",
  component: NewRow,
  args: {},
} satisfies Meta<typeof NewRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
