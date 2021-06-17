import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from ".";

export default {
  title: "atoms/button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Click",
};
