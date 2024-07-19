import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    color: "primary",
    size: "md",
    fullWidth: false,
    rounded: false,
  },
  title: "Buttons",
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary", "success", "danger", "warning"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: "Solid",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};
