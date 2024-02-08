import { Meta, StoryObj } from '@storybook/react'
import Piece from '../components/Piece'
import '../index.css'

const meta: Meta<typeof Piece> = {
  title: 'Chessboard/Piece',
  component: Piece,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
}

export default meta

export const WhitePawn: StoryObj = {
  args: {
    color: 'white',
    type: 'pawn',
  },
}

export const BlackPawn: StoryObj = {
  args: {
    color: 'black',
    type: 'pawn',
  },
}

export const WhiteKnight: StoryObj = {
  args: {
    color: 'white',
    type: 'knight',
  },
}

export const BlackKnight: StoryObj = {
  args: {
    color: 'black',
    type: 'knight',
  },
}

export const WhiteBishop: StoryObj = {
  args: {
    color: 'white',
    type: 'bishop',
  },
}

export const BlackBishop: StoryObj = {
  args: {
    color: 'black',
    type: 'bishop',
  },
}

export const WhiteRook: StoryObj = {
  args: {
    color: 'white',
    type: 'rook',
  },
}

export const BlackRook: StoryObj = {
  args: {
    color: 'black',
    type: 'rook',
  },
}

export const WhiteQueen: StoryObj = {
  args: {
    color: 'white',
    type: 'queen',
  },
}

export const BlackQueen: StoryObj = {
  args: {
    color: 'black',
    type: 'queen',
  },
}

export const WhiteKing: StoryObj = {
  args: {
    color: 'white',
    type: 'king',
  },
}

export const BlackKing: StoryObj = {
  args: {
    color: 'black',
    type: 'king',
  },
}
