class Game:
    def __init__(self):
        self.__items = ['r', 'p', 's']

    def __get_user_item(self):
        valid = False
        while valid == False:
            item = input("Select (r)ock, (p)aper or (s)cissors: ").lower()

            if item in self.__items:
                valid = True
                return item
            else:
                print("Enter only one of the options")
        
        print|('\n')

    def __get_computer_item(self):
        from random import choice
        return choice(self.__items) 
    
    def __get_game_result(self, user_item, computer_item):
        roll = (user_item, computer_item)
        win = [('r', 's'), ('s', 'p'), ('p', 'r')]
        draw = [('r', 'r'), ('p', 'p'), ('s','s')]

        if roll in win:
            return 'Win'
        elif roll in draw:
            return 'Draw'
        else:
            return 'Loss'

    def play(self):
        user = self.__get_user_item()
        computer = self.__get_computer_item()
        result = self.__get_game_result(user, computer)

        print(f"You chose: {user}")
        print(f"Computer chose: {computer}")
        print(f"Result : {result}")

        return result