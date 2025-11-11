import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import NewRowButton from './new-row-button';

const meta = {
  title: "RollTable/New Row",
  component: NewRowButton,
  args: {},
} satisfies Meta<typeof NewRowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewRow: Story = {
  args: {},
};
