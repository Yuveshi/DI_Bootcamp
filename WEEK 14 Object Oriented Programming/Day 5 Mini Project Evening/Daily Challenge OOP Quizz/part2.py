import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        self.cards = [Card(suit, value) for suit in Deck.suits for value in Deck.values]

    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)
        else:
            print("Cannot shuffle. Cards are missing from the deck!")

    def deal(self):
        if len(self.cards) > 0:
            return self.cards.pop(0)
        else:
            print("No cards left to deal!")
            return None


# Create a deck of cards
deck = Deck()

# Shuffle the deck
deck.shuffle()

# Deal a card
card = deck.deal()
print(f"Dealt card: {card}")

# Deal all remaining cards
while len(deck.cards) > 0:
    print(f"Dealt card: {deck.deal()}")

# Try to deal when no cards are left
print(deck.deal())  # Should indicate that no cards are left.
