import { Meta, StoryObj } from '@storybook/react'
import Board from '../components/Board'
import '../index.css'

const meta: Meta<typeof Board> = {
  title: 'Chessboard/Board',
  component: Board,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
}

export default meta

export const InitialPosition: StoryObj = {
  args: {},
}

export const Small: StoryObj = {
  args: {
    squareSize: 'sm',
    round: false,
  },
}

export const Large: StoryObj = {
  args: {
    squareSize: 'lg',
  },
}
