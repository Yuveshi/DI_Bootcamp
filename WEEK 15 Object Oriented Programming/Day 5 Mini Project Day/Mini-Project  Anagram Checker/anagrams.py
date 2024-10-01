from anagram_checker import AnagramChecker
import menu

while True:
    choice = menu.menu_input()

    if choice == 'Q':
        print('Exiting program')
        break

    if choice == 'E':
        checker = AnagramChecker('words.txt')
        word_to_check = input("Enter word to be checked: ")

        if menu.validate_word(word_to_check):
            anagrams = checker.get_anagrams(word_to_check)

            print('Valid English word')
            print(f'Anagrams: {", ".join(anagrams)}')
        else:
            print('Not a valid English word')