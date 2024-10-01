def get_user_menu_choice():
    print("------Menu-------")
    print("(g) : Play a new game")
    print("(s) : Show scores")
    print("(x) : Quit")

    choice = input("Enter choice: ").lower()
    if choice not in ['g', 's', 'x']:
        print("not a valid choice")
        print('\n')
        return ""
    else:
        print('\n')
        return choice
    
def print_results(results):
    print(f"Wins : {results['Win']}")
    print(f"Losses : {results['Loss']}")
    print(f"Draws : {results['Draw']}")
    print("\n")