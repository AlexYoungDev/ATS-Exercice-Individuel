#!/usr/bin/env python3
# See https://fr.wikipedia.org/wiki/Shebang for first line explanation
import random

from collections import defaultdict
from typing import List


PLAYER_COUNT = 4
CARD_COLORS = "♠♣♡♢"
CARD_VALUES = tuple(range(2, 15))  # Represent each card as points


class Card:
    _value_to_card_name = {11: "J", 12: "Q", 13: "K", 14: "A"}

    @classmethod
    def _value_to_card_str(cls, value: int) -> str:
        return (
            cls._value_to_card_name[value]
            if value in cls._value_to_card_name
            else str(value)
        )

    def __init__(self, color: str, value: int):
        if color not in CARD_COLORS:
            raise ValueError(f"Nonexistent card color {color}")

        if value not in CARD_VALUES:
            raise ValueError(f"Nonexistent card value {value}")

        self.color = color
        self.value = value

    def __lt__(self, other):
        return self.value < other.value

    def __repr__(self):
        """
        We want __repr__ to return the same string as __str__.
        When you print a list, each element is displayed using repr()
        """
        return self.__str__()

    def __str__(self):
        """
        By overriding this method we are able to display our Card objects using print(card_object)
        """
        return f"{self.color}{Card._value_to_card_str(self.value)}"


class Deck:
    def __init__(self):
        self.cards = []
        for color in CARD_COLORS:
            for value in CARD_VALUES:
                self.cards.append(Card(color, value))
        random.shuffle(self.cards)

    def deal(self, card_count: int) -> List[Card]:
        return [self.cards.pop() for _ in range(card_count)]

    def flop(self) -> List[Card]:
        flop = []
        for card_count in (3, 1, 1):
            self.deal(1)
            flop.extend(self.deal(card_count))
        return flop

    def __str__(self):
        return str(self.cards)

    def __repr__(self):
        return repr(self.cards)


class PlayerHand:
    def __init__(self, flop, player_cards):
        # Following code expect self.cards to be sorted
        self.cards = sorted(
            flop + player_cards
        )  # Sorting will be performed based on Card's __lt__ magic method

        self.best_card = max(
            self.cards
        )  # Use max() for more resilience if self.cards is not sorted in future

        # Calculate card values and colors occurrences in player's hand
        value_occurrences_dict = defaultdict(lambda: 0)
        color_occurrences_dict = defaultdict(lambda: 0)
        for card in self.cards:
            value_occurrences_dict[card.value] += 1
            color_occurrences_dict[card.color] += 1

        self.value_occurrences = tuple(value_occurrences_dict.values())
        self.color_occurrences = tuple(color_occurrences_dict.values())

    def __str__(self):
        suites = self._get_suites()

        for suite in suites:
            if all(card.color == suite[0].color for card in suite[1:]):
                if suite[-1].value == 14:
                    return "Quinte flush royale"

                else:
                    return "Quinte flush"

        if self._have_square():
            return "Carré"

        elif self._have_full():
            return "Full"

        elif self._have_color():
            return "Couleur"

        elif suites:
            return "Suite"

        elif self._have_brelan():
            return "Brelan"

        elif self._have_double_pair():
            return "Double paire"

        elif self._have_pair():
            return "Paire"

        else:
            return f"Carte haute {self.cards[-5:]}"

    def _get_suites(self) -> List[List[Card]]:
        found_suites = []

        # Treat each possible suite start
        for index, start_card in enumerate(self.cards[:3]):
            candidate_suite = [start_card]
            have_suite = True
            for i in range(1, 5):  # Start by searching next needed card value
                following_suite_card = next(
                    (card for card in self.cards if card.value == start_card.value + i),
                    None,
                )
                if following_suite_card is None:
                    have_suite = False
                    break

                candidate_suite.append(following_suite_card)

            if have_suite:
                found_suites.append(candidate_suite)

        return found_suites

    def _have_color(self) -> bool:
        return 5 in self.color_occurrences

    def _have_full(self) -> bool:
        return self._have_pair() and self._have_brelan()

    def _have_square(self) -> bool:
        return 4 in self.value_occurrences

    def _have_brelan(self) -> bool:
        return 3 in self.value_occurrences

    def _have_double_pair(self) -> bool:
        return self.value_occurrences.count(2) >= 2

    def _have_pair(self) -> bool:
        return 2 in self.value_occurrences


class Game:
    def __init__(self, player_count):
        self._player_count = player_count

    def new_turn(self):
        deck = Deck()
        players_cards = []
        for index in range(self._player_count):
            current_player_cards = deck.deal(2)
            print(f"Player {index + 1} cards: {current_player_cards}")
            players_cards.append(current_player_cards)

        flop = deck.flop()
        print(f"\nFlop: {flop}\n")

        for index, player_cards in enumerate(players_cards):
            print(f"Player {index + 1} hand: {PlayerHand(flop, player_cards)}")

        print("")


def main():
    """
    See https://stackoverflow.com/questions/4041238/why-use-def-main Denilson Sá Maia answer for some arguments about
    using a main function
    """
    try:
        game = Game(PLAYER_COUNT)
        while True:
            game.new_turn()
            if (
                input("Press Enter for a new turn or q to quit: ").strip().lower()
                == "q"
            ):
                break

    except KeyboardInterrupt:
        pass

    print("Exiting")


if __name__ == "__main__":
    main()
