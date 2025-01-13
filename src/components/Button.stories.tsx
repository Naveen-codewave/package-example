import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.tsx";
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "outlined"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    size: "medium",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    size: "medium",
    variant: "secondary",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    size: "medium",
    variant: "outlined",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
    variant: "secondary",
  },
};
