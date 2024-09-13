import type { Meta, StoryObj } from '@storybook/react'
import AccordionContainer from './AccordionContainer'

const meta: Meta<typeof AccordionContainer> = {
  component: AccordionContainer,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof AccordionContainer>

export const Primary: Story = {
  args: {
    label: 'test label',
    children: <div className="flex items-center justify-center">test children</div>,
  },
}
