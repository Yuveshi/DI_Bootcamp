class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.lower().split()  # Convert text to lower case and split into words
        frequency = words.count(word.lower())  # Count occurrences of the specified word
        return frequency if frequency > 0 else None  # Return None if word is not found

    def most_common_word(self):
        from collections import Counter  # Import Counter to count word frequencies
        words = self.text.lower().split()
        word_count = Counter(words)
        if word_count:
            return word_count.most_common(1)[0]  # Return the most common word and its count
        return None

    def unique_words(self):
        words = set(self.text.lower().split())  # Use set to get unique words
        return list(words)

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r', encoding='utf-8') as file:  # Open the file
            text_content = file.read()  # Read the entire file content
        return cls(text_content)  # Return an instance of Text with the file content


class TextModification(Text):
    def remove_punctuation(self):
        import string
        return self.text.translate(str.maketrans('', '', string.punctuation))  # Remove punctuation

    def remove_stopwords(self):
        stopwords = {'a', 'an', 'the', 'and', 'is', 'in', 'to', 'of'}  # Define a set of stopwords
        words = self.text.split()
        return ' '.join(word for word in words if word.lower() not in stopwords)  # Filter stopwords

    def remove_special_characters(self):
        import re
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)  # Remove special characters


if __name__ == "__main__":
    # Part I: Analyze a simple string
    sample_text = "A good book would sometimes cost as much as a good house."
    text_instance = Text(sample_text)
    
    print("Frequency of 'good':", text_instance.word_frequency('good'))  # Example usage
    print("Most common word:", text_instance.most_common_word())
    print("Unique words:", text_instance.unique_words())

    # Part II: Analyze text from a file
    text_from_file = Text.from_file('the_stranger.txt')
    print("Frequency of 'the':", text_from_file.word_frequency('the'))  # Example usage
    print("Most common word:", text_from_file.most_common_word())
    print("Unique words:", text_from_file.unique_words())

    # Testing TextModification
    modified_text = TextModification(sample_text)
    print("Text without punctuation:", modified_text.remove_punctuation())
    print("Text without stopwords:", modified_text.remove_stopwords())
    print("Text without special characters:", modified_text.remove_special_characters())
