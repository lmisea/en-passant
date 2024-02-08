import { HStack, VStack } from '@chakra-ui/react'
import Square from './Square'

type BoardProps = {
  /**
   * Board size
   */
  squareSize?: 'sm' | 'md' | 'lg'
  /**
   * Show board with rounded corners
   */
  round?: boolean
  /**
   * Show board coordinates
   */
  coordinates?: boolean
}

/**
 * Chessboard component
 */
const Board = ({
  squareSize = 'md',
  round = true,
  coordinates = true,
}: BoardProps) => {
  return (
    <>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="white"
            corner="top-left"
            roundCorner={round}
            rank={8}
            coordinates={coordinates}
            piece="rook"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            piece="knight"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="bishop"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            piece="queen"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="king"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            piece="bishop"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="knight"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            corner="top-right"
            roundCorner={round}
            piece="rook"
            pieceColor="black"
            size={squareSize}
          />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="black"
            rank={7}
            coordinates={coordinates}
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="black"
            size={squareSize}
          />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="white"
            rank={6}
            size={squareSize}
            coordinates={coordinates}
          />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="black"
            rank={5}
            size={squareSize}
            coordinates={coordinates}
          />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="white"
            rank={4}
            size={squareSize}
            coordinates={coordinates}
          />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="black"
            rank={3}
            size={squareSize}
            coordinates={coordinates}
          />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
          <Square color="black" size={squareSize} />
          <Square color="white" size={squareSize} />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="white"
            rank={2}
            coordinates={coordinates}
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            piece="pawn"
            pieceColor="white"
            size={squareSize}
          />
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <HStack spacing={0}>
          <Square
            color="black"
            corner="bottom-left"
            roundCorner={round}
            rank={1}
            file="a"
            coordinates={coordinates}
            piece="rook"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            file="b"
            coordinates={coordinates}
            piece="knight"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            file="c"
            coordinates={coordinates}
            piece="bishop"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            file="d"
            coordinates={coordinates}
            piece="queen"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            file="e"
            coordinates={coordinates}
            piece="king"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            file="f"
            coordinates={coordinates}
            piece="bishop"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="black"
            file="g"
            coordinates={coordinates}
            piece="knight"
            pieceColor="white"
            size={squareSize}
          />
          <Square
            color="white"
            corner="bottom-right"
            roundCorner={round}
            file="h"
            coordinates={coordinates}
            piece="rook"
            pieceColor="white"
            size={squareSize}
          />
        </HStack>
      </VStack>
    </>
  )
}

export default Board
