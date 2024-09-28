import pygame
import chess
import chess.svg
import sys

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 800
SQUARE_SIZE = WIDTH // 8
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
DARK_BROWN = (181, 136, 99)
LIGHT_BROWN = (240, 217, 181)

# Load images
IMAGES = {}
def load_images():
    pieces = ['wP', 'bp', 'wR', 'bR', 'wN', 'bN', 'wB', 'bB', 'wQ', 'bQ', 'wK', 'bK']
    for piece in pieces:
        IMAGES[piece] = pygame.transform.scale(pygame.image.load(f"images/{piece}.png"), (SQUARE_SIZE, SQUARE_SIZE))

# Draw chessboard
def draw_board(screen):
    colors = [LIGHT_BROWN, DARK_BROWN]
    for row in range(8):
        for col in range(8):
            color = colors[(row + col) % 2]
            pygame.draw.rect(screen, color, pygame.Rect(col * SQUARE_SIZE, row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE))

# Draw pieces on the board
def draw_pieces(screen, board):
    for row in range(8):
        for col in range(8):
            piece = board.piece_at(chess.square(col, 7 - row))
            if piece:
                piece_str = piece.symbol()
                color = 'w' if piece_str.isupper() else 'b'
                piece_str = piece_str.lower()
                screen.blit(IMAGES[color + piece_str], pygame.Rect(col * SQUARE_SIZE, row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE))

# Main game loop
def main():
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption('Chess')
    board = chess.Board()
    load_images()
    clock = pygame.time.Clock()
    running = True
    selected_square = None
    player_clicks = []

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.MOUSEBUTTONDOWN:
                location = pygame.mouse.get_pos()
                col = location[0] // SQUARE_SIZE
                row = location[1] // SQUARE_SIZE
                square = chess.square(col, 7 - row)
                if selected_square is None:
                    selected_square = square
                else:
                    move = chess.Move(selected_square, square)
                    if move in board.legal_moves:
                        board.push(move)
                    selected_square = None

        draw_board(screen)
        draw_pieces(screen, board)
        pygame.display.flip()
        clock.tick(15)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main()
