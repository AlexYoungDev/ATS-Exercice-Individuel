# /////////1//////////
import random
def create_deck () :
    deck = []
    card_number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10","V","D","R"]
    card_family = ["♠︎", "♣︎", "♡", "♢"]
    for number in card_number :
        for family in card_family :
            deck.append (f"{number}{family}") # append (-> ajoute des elements dans une liste/tableau)
            random.shuffle(deck) # melange aleatoirement les cartes
    return deck

deck=create_deck()

# /////////2//////////
def deal (hand) :
    given_cards=[]
    for x in range(hand) : # range (-> boucle dans range ex: boucle dans 52 cards, quand on veut itérer une action un certain nombre de fois)
        given_cards.append(deck.pop()) # pop (-> fonction intregree, enleve de la liste un element)
    return given_cards

player1 = deal(2)
player2 = deal(2)

#print (player1, player2)

# /////////3//////////
def flop () :
    flop_card=[]
    burned=[]
    burned.extend(deal(1)) # extend (-> extrait des elements dans une liste/tableau)
    flop_card.extend(deal(3))
    burned.extend(deal(1))
    flop_card.extend(deal(1))
    burned.extend(deal(1))
    flop_card.extend(deal(1))

    return flop_card

flop()

# /////////4//////////
class Card:
    def __init__ (self, family, number):
        self.family = family
        self.number = number
        self.value =  number + family 
    def __str__(self):
        return f"{self.number}{self.family}"
        

# x = Card ("heart", 2)
# print (x.family)

def create_card() :
    deck = []
    numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10","V","D","R"]
    families = ["♠︎", "♣︎", "♡", "♢"]
    for number in numbers :
        for family in families :
            card = Card(family, number)
            #print(card.family, card.number)
            deck.append(card)
            #print (deck[0])
    random.shuffle(deck)
    return deck 
    
deck = create_card()

def print_deck(deck):
    my_deck = []
    for x in range(len(deck)):
        my_deck.append(deck[x].__str__)
#     print(my_deck)
# print 

def deal(number):
    player = []
    for i in range(number):
        player.append(deck.pop()) # append pop / retire et push(donne)
    return player

player1 = deal(2)
player2= deal(2)
resPlayer1 = [player1[0].value , player1[1].value]
resPlayer2 = player2[0].value + player2[1].value
print(type(player1))

print(resPlayer1)

def flop () :
    flop_card=[]
    burned=[]
    burned.extend(deal(1)) # extend (-> extrait des elements dans une liste/tableau)
    flop_card.extend(deal(3))
    burned.extend(deal(1))
    flop_card.extend(deal(1))
    burned.extend(deal(1))
    flop_card.extend(deal(1))

    return flop_card

flops = flop()
resflops = [flops[0].value, flops[1].value , flops[2].value, flops[3].value, flops[4].value]
#print(resflops)

def showdown():
    print(resflops)
    print(resPlayer1)
    combi = resflops + resPlayer1
    print(combi)
    
showdown()
