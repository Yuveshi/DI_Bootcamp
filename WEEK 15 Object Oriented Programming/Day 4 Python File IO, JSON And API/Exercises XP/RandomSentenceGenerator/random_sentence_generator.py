import random

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random_sentence(length, words):
    random_words = random.sample(words, length)  # Get random unique words
    sentence = ' '.join(random_words).lower()  # Create a sentence
    return sentence

def main():
    print("This program generates a random sentence.")
    length = input("Enter the length of the sentence (between 2 and 20): ")

    # Validate input
    if not length.isdigit() or not (2 <= int(length) <= 20):
        print("Invalid input. Please enter an integer between 2 and 20.")
        return

    length = int(length)
    words = get_words_from_file('words.txt')  # Read words from file
    sentence = get_random_sentence(length, words)
    print(f"Generated sentence: {sentence}")

if __name__ == "__main__":
    main()
