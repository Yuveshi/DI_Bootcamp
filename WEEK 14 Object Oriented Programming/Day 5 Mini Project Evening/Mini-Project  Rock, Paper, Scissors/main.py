import rockpaperscissors
from game import Game

def main():
    results = {
    "Win" : 0,
    "Loss": 0,
    "Draw": 0
    }

    party = Game()

    while True:
        choice = rockpaperscissors.get_user_menu_choice()

        if choice == "x":
            break
        elif choice == "s":
            rockpaperscissors.print_results(results)
        elif choice == "g":
            result = party.play()

            results[result] += 1

if __name__ == "__main__":
    main()
    