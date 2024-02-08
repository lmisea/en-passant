import { useState } from 'react'
import Piece from './Piece'

type SquareProps = {
  /**
   * Square color
   */
  color: 'white' | 'black'
  /**
   * File notation of the square
   */
  file?: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
  /**
   * Rank notation of the square
   */
  rank?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  /**
   * Show board coordinates
   */
  coordinates?: boolean
  /**
   * Specify if the square is a corner square and which corner
   */
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /**
   * Show board with rounded corners
   */
  roundCorner?: boolean
  /**
   * Square size
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Chess piece on the square (if any)
   */
  piece?: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king'
  /**
   * Chess piece color (if any)
   */
  pieceColor?: 'white' | 'black'
}

/**
 * Chessboard square component
 */
const Square = ({
  color,
  file,
  rank,
  coordinates = true,
  corner,
  roundCorner = true,
  size = 'md',
  piece,
  pieceColor,
}: SquareProps) => {
  const squareColor =
    color === 'white'
      ? 'bg-light-square border-light-square text-dark-square'
      : 'bg-dark-square border-dark-square text-light-square'

  let squareSize: string
  switch (size) {
    case 'sm':
      squareSize = 'w-16 h-16'
      break
    case 'md':
      squareSize = 'w-18 h-18'
      break
    case 'lg':
      squareSize = 'w-20 h-20'
  }

  if (!coordinates) {
    rank = undefined
    file = undefined
  }

  if (!roundCorner) corner = undefined

  let cornerSquare: string
  switch (corner) {
    case 'top-left':
      cornerSquare = 'rounded-tl-3xl'
      break
    case 'top-right':
      cornerSquare = 'rounded-tr-3xl'
      break
    case 'bottom-left':
      cornerSquare = 'rounded-bl-3xl'
      break
    case 'bottom-right':
      cornerSquare = 'rounded-br-3xl'
      break
    case undefined:
      cornerSquare = ''
  }

  const hoverEffect: string = piece
    ? 'hover:cursor-grab hover:border-bright-emerald'
    : ''

  const [focusStyle, setFocusStyle] = useState('')

  const [isActive, setIsActive] = useState(false)

  const [rightClickStyle, setRightClickStyle] = useState('')

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!piece) return
    if (event.button !== 0) return
    setIsActive(true)
    setFocusStyle((prevFocusStyle) =>
      prevFocusStyle === ''
        ? 'bg-gradient-to-t from-active-square to-active-square border-emerald'
        : '',
    )
    setRightClickStyle('')
  }

  const handleRightClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault()
    setIsActive(false)
    setRightClickStyle((prevRightClickStyle) =>
      prevRightClickStyle === ''
        ? 'bg-gradient-to-t from-selected-square to-selected-square border-folly'
        : '',
    )
    setFocusStyle('')
  }

  const activeEffect: string =
    isActive && piece
      ? 'active:cursor-grabbing active:bg-gradient-to-t from-active-square to-active-square active:border-active-square'
      : ''

  return (
    <div
      className={`
        ${squareColor} ${squareSize} ${cornerSquare} ${hoverEffect}
        ${focusStyle} ${rightClickStyle} ${activeEffect} relative ease-in-out
        font-noto-sans font-semibold select-none flex items-center
        justify-center border-2 duration-200 transition-all
      `}
      onMouseDown={handleClick}
      onContextMenu={handleRightClick}
    >
      <div className="absolute top-0 left-1">{rank}</div>
      <div className="absolute bottom-0 right-2">{file}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Piece type={piece} color={pieceColor} scale={size} />
      </div>
    </div>
  )
}

export default Square
