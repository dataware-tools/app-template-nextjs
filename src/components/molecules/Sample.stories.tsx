import { Story, Meta } from "@storybook/react";
import { SampleDOM, SampleDOMProps } from "./Sample";

export default {
  component: SampleDOM,
  title: "Sample",
} as Meta;

const Template: Story<SampleDOMProps> = (args) => <SampleDOM {...args} />;
export const Default = Template.bind({});
Default.args = {
  user: { name: "test" },
  onClick: () => window.alert("click!"),
  data: "test",
};
