# import string
# from collections import Counter
# from collections import OrderedDict

class AnagramChecker:
    def __init__(self, text_file):
        # could create a function to load the file   
        self.word_list = self.load_words(text_file)

    def load_words(self, text_file):
        try:
            words = []
            with open(text_file, 'r') as file:
                for line in file:
                     words.append(line.replace('\n', '').strip())
                
            return words
        except:
            return []
        
    def is_valid_word(self, word):
        if word.upper() in self.word_list:
            return True
        return False

    def get_anagrams(self, word):
        word = word.upper()
        anagrams = []
        # word_dict = dict(Counter(word))
        # sorted_word_dict = OrderedDict(sorted(word_dict.items()))

        # for item in self.word_list:
        #     if item == word:
        #         continue
        #     current_dict = dict(Counter(item))
        #     sorted_current_dict = OrderedDict(sorted(current_dict.items()))

        #     if sorted_current_dict == sorted_word_dict:
        #         anagrams.append(item)
        
        # if len(anagrams) == 0:
        #     return ''
        # else:
        #     return anagrams

        for item in self.word_list:
            if item == word.upper():
                continue

            if self.is_anagram(word, item):
                anagrams.append(item)
        
        if len(anagrams) == 0:
            return []
        else:
            return anagrams


    def is_anagram(self, word1, word2):
        word1 = sorted(word1.upper())
        word2 = sorted(word2.upper())

        if word1 == word2:
            return True
        return False

        # dict1 = dict(Counter(word1))
        # sorted1 = OrderedDict(sorted(dict1.items()))
        # dict2 = dict(Counter(word2))
        # sorted2 = OrderedDict(sorted(dict2.items()))

        # return (sorted1 == sorted2)


# checker = AnagramChecker('words.txt')
# print(checker.get_anagrams('LISTEN'))
# print(checker.is_anagram('listen', 'tinseL'))