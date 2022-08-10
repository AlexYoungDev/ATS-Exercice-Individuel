import random # module used to generate random

colors = ["yellow", "blue", "red", "green"]

def secret_list(max_range):
    return random.choices(colors, k=max_range) # choisie un élément au hasard 

print(secret_list(3))


def user_input(): # est ce que l utilisateur rentre bien les coulerus
   response = input("Choice two colors :")
   response_list = response.strip().split(" ")
   return response_list
print(user_input())


def control_user_input(arr1, arr2): # deux tableaux, est ce que l'user est bon 
    for element in arr1:
        if element not in arr2: 
            return False 
    return True

print(control_user_input(user_input(). colors))

def  game_check(arr1, arr2): # arr 1 arr2=combinaison secrete
    color_ok = 0
    color_and_position_ok = 0
    for element, index in enumerate(arr1): # enumerate=il va retoutné un élément et son tableau 
        if index == arr2[index]:
            color_and_position_ok += 1
        elif element in arr2:
            color_ok += 1
        return color_ok. color_and_position_ok
            
