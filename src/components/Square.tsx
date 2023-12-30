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
   * Specify if the square is a corner square and which corner
   */
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
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
  corner,
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
      squareSize = 'px-8 py-8'
      break
    case 'md':
      squareSize = 'px-9 py-9'
      break
    case 'lg':
      squareSize = 'px-10 py-10'
  }

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

  const activeEffect: string = piece
    ? 'active:cursor-grabbing active:bg-gradient-to-t from-active-square to-active-square active:border-active-square'
    : ''

  return (
    <div
      className={`
        ${squareColor}
        ${squareSize}
        ${cornerSquare}
        ${hoverEffect}
        ${activeEffect}
        ease-in-out border-2
      `}
    >
      {file}
      {rank}
      {pieceColor}
    </div>
  )
}

export default Square
