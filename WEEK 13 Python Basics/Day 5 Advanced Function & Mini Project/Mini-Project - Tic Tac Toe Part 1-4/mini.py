board = []
played = []
win_cons = [(0,1,2), (3,4,5), (6,7,8),(0,3,6),(1,4,7), (2,5,8), (0,4,8), (2,4,6)]
nums = {1:0, 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8}

def display_board():
    print("*************")
    print(f'* {board[0]} | {board[1]} | {board[2]} *')
    print("* --------- *")
    print(f'* {board[3]} | {board[4]} | {board[5]} *')
    print("* --------- *")
    print(f'* {board[6]} | {board[7]} | {board[8]} *')
    print("*************")

def player_input(player):
    while True:
        try:
            pos = int(input("Select board position to play in (1-9): "))
            if pos not in range(1,10):
                print("Enter a number between 1-9")
            elif (nums[pos] in played):
                print("Position already filled. Choose another")
            else:
                pos = nums[pos]
                played.append(pos)
                board[pos] = player
                break
        except:
            print("enter a valid number")

def check_win():
    for condition in win_cons:
        first, second, third = condition
        
        if first in played and second in played and third in played:
            if board[first] == board[second] and board[first] == board[third]:
                return board[first]

    return ""

def play():
    #initialise board
    for i in range(9):
        board.append(i+1)

    winner = ""
    while winner == "":

        display_board()
        print("Player X's turn")
        player_input('X')
        
        winner = check_win()
        if winner != "":
            break

        # 9th turn happens at player x
        if len(played) == 9:
            break

        display_board()
        print("Player O's turn")
        player_input('O')

        winner = check_win()
        if winner != "":
            break
    
    if winner == "":
        print("Draw")
    else:
         print(f'Player {winner} has won')
    display_board()

play()