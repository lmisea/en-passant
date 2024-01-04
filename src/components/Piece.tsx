import { SVGProps } from 'react'
import {
  BlackBishop,
  BlackKing,
  BlackKnight,
  BlackPawn,
  BlackQueen,
  BlackRook,
  WhiteBishop,
  WhiteKing,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
} from './icons'

type PieceProps = {
  /**
   * Piece color
   */
  color?: 'white' | 'black'
  /**
   * Piece type
   */
  type?: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king'
  /**
   * Piece scale
   */
  scale?: 'sm' | 'md' | 'lg'
}

/**
 * Piece component
 */
const Piece = ({ color, type, scale = 'md' }: PieceProps) => {
  if (!color || !type) return null

  let pieceScale: string
  switch (scale) {
    case 'sm':
      pieceScale = 'scale-[1.2]'
      break
    case 'md':
      pieceScale = 'scale-[1.32]'
      break
    case 'lg':
      pieceScale = 'scale-[1.45]'
  }

  let PieceComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element
  switch (type) {
    case 'pawn':
      PieceComponent = color === 'white' ? WhitePawn : BlackPawn
      break
    case 'rook':
      PieceComponent = color === 'white' ? WhiteRook : BlackRook
      break
    case 'knight':
      PieceComponent = color === 'white' ? WhiteKnight : BlackKnight
      break
    case 'bishop':
      PieceComponent = color === 'white' ? WhiteBishop : BlackBishop
      break
    case 'queen':
      PieceComponent = color === 'white' ? WhiteQueen : BlackQueen
      break
    case 'king':
      PieceComponent = color === 'white' ? WhiteKing : BlackKing
  }

  return <PieceComponent className={`transform ${pieceScale}`} />
}

export default Piece
