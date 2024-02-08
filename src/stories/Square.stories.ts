import { Meta, StoryObj } from '@storybook/react'
import Square from '../components/Square'
import '../index.css'

const meta: Meta<typeof Square> = {
  title: 'Chessboard/Square',
  component: Square,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
}

export default meta

export const White: StoryObj = {
  args: {
    color: 'white',
  },
}

export const Black: StoryObj = {
  args: {
    color: 'black',
  },
}

export const WhiteTopLeft: StoryObj = {
  args: {
    color: 'white',
    corner: 'top-left',
  },
}

export const BlackTopRight: StoryObj = {
  args: {
    color: 'black',
    corner: 'top-right',
  },
}

export const WhiteBottomLeft: StoryObj = {
  args: {
    color: 'white',
    corner: 'bottom-left',
  },
}

export const BlackBottomRight: StoryObj = {
  args: {
    color: 'black',
    corner: 'bottom-right',
  },
}
