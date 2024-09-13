import type { Meta, StoryObj } from '@storybook/react'
import ContentSection from './ContentSection'

const meta: Meta<typeof ContentSection> = {
  component: ContentSection,
  parameters: {
    layout: 'screen',
  },
}

export default meta
type Story = StoryObj<typeof ContentSection>

export const Primary: Story = {
  args: {
    children: <div className="flex items-center justify-center w-full">test children</div>,
  },
}
