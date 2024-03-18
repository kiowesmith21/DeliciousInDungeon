const DISHES = { 
    'KAKIAGE': {
        'NAME': 'Mandrake Kakiage & Giant Bat Tempura',

        'DESCRIPTION': "A dish prepared by Senshi in collaboration with Chilchuck, using Senshi's cooking prowess and Chilchuck's skill with traps. Shredded mandrake and marinated bat breast are coated in batter and deep fried in olive oil, tempura-style.",
        
        'RECIPE': "Mandrake (3 med. size), Big Bat breast meat (400 grams), Basilisk egg (1), Weak flour (150 grams), Water (170 cc), Soy sauce (1 tbsp), Sake (1 tbsp), Salt (a pinch), Garlic & ginger (to taste)",

        'IMAGE': "https://cdn.vox-cdn.com/thumbor/XaArk6R5WZIC8XFFe81GeG_IrIQ=/0x0:1000x563/1720x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25250562/3_1_Mandrake_Kakiage___Giant_Bat_Tempura__Anime_.jpeg"
     },
     'ROASTBASILISK': {
        'NAME': 'Roast Basilisk',

        'DESCRIPTION': "A healthy dish made by Senshi where a whole basilisk is stuffed with medicinal herbs then slowly spit-roasted over an open fire. It tastes much better if left overnight to rest after the spice rub and prior to stuffing, although if time is of the essence it can be cooked immediately.",
        
        'RECIPE': "Basilisk (1, tail and innards removed), Mana herb (to taste), Salt and pepper (to taste), Stuffing: Antidotal herb (1 med. size), Strong medicinal herb (1 bunch), Ultra medicinal herb (1 bunch), Anti-paralysis herb (1 med. size), Anti-petrify herb (1 med. size)",

        'IMAGE': "https://cdn.vox-cdn.com/thumbor/9p149-p5vqsGX7We2kq1Wi3pAME=/0x0:1000x563/1720x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25248292/2_1_Roast_Basilisk__Anime_.jpeg"
     },
     'BASILISKOMELET': {
      'NAME': 'Mandrake & Basilisk Omelet',

      'DESCRIPTION': "A dish created by Senshi consisting of a fluffy Basilisk egg omelet filled with minced Basilisk bacon and mandrake. If the mandrake used was killed with its 'head' still attached, it will be less bitter and more mellow",
      
      'RECIPE': "Mandrake (1 med. size), Basilisk bacon (use the fattiest cuts) (50 grams), Basilisk egg (1), Salt and pepper (to taste), Ketchup (to taste)",

      'IMAGE': "https://cdn.vox-cdn.com/thumbor/eobxnNgBG36TxNqhI38Q2KL246c=/0x0:1000x563/1720x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25248293/2_2_Mandrake_and_Basilisk_Omelette__Anime_.jpeg"
   },
   'SCORPIONHOTPOT': {
      'NAME': 'Huge Scorpion & Walking Mushroom Hotpot',

      'DESCRIPTION': "A warm, nourishing dish created by Senshi on his first time meeting Laios' adventuring group, made from ingredients found on the first floor of the dungeon. Scorpion, mushroom, algae, tubers and dried slime noodles are all boiled together in water, creating a light soup.",
      
      'RECIPE': "Huge Scorpion (1), Walking Mushroom (1), Mushroom feet (2), Seaweed (artic moss, star jelly) (as needed), Invertatoes (about 5 med. size), Dried slime (to preference), Water (as needed)",

      'IMAGE': "https://cdn.vox-cdn.com/thumbor/lkkjweD8fm04-H-RD1ls4pcUcOU=/0x0:1000x563/1720x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25248289/1_1_Huge_Scorpion_and_Walking_Mushroom_Hotpot__Anime_.jpeg"
   },
   'LIVINGARMORSTIRFRY': {
      'NAME': 'Living Armor Dwarf-Style Stir-Fry',

      'DESCRIPTION': "A dish using one set of Living Armor prepared by Senshi, stir-fried.",
      
      'RECIPE': "Antidotal herb (2 bunches), Medicinal herb (1 bunch), Living Armor (7-8 med. pieces), Special sauce (1 tbsp),Salt and pepper (a little)",

      'IMAGE': "https://cdn.vox-cdn.com/thumbor/hFMfQNW3fErgGc6VvgKSl38b3xw=/0x0:1000x563/1720x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25248294/3_2_Living_Armor_Dwarf_Style_Stir_Fry_and_Living_Armor_Soup__Anime_.jpeg"
   },
   'BOILEDMIMIC': {
      'NAME': 'Boiled Mimic',

      'DESCRIPTION': "A simple dish prepared by Senshi from the cupboard mimic that attacked Chilchuck. It is prepared by boiling together only mimic and salt, and eaten much like other shellfish, using thin tools to dig out the chewy, flavorful meat.",
      
      'RECIPE': "Mimic upper body (1), Claws (1 pair), Legs (4), Salt (lots)",

      'IMAGE': "https://cdn.vox-cdn.com/thumbor/RdOCJi5rQSv_ZHUZ4JhEcEJVTT8=/0x0:1000x563/1720x0/filters:focal(0x0:1000x563):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25274929/Boiled_Mimic__Anime_.jpeg"
   },
}

export const MONSTERS = { 
   'BIGBAT': {
       'NAME': 'Big Bat',

       'DESCRIPTION': "Big Bats resemble normal bats, but are much larger, about the height of a Tall-man. Their bones are a particular marvel, being light yet strong.",

       'IMAGE': "https://i.ytimg.com/vi/W0lmuyjFTYE/maxresdefault.jpg"
    },
    'BASILISK': {
       'NAME': 'Basilisk',

       'DESCRIPTION': "Basilisks appear to be chickens with a snake for a tail. However, the snake's portion is actually though to be the head, since if a Basilisk is cut in half, the part with the snake head lives longer. The dividing line between head and tail is a point of contention.",
 
       'IMAGE': "https://i.ytimg.com/vi/pbzf7-Sa3E8/maxresdefault.jpg"
    },
    'HUGESCORPION': {
      'NAME': 'Huge Scorpion',

      'DESCRIPTION': "Huge Scorpions resemble normal scorpions, except they are much larger, approximately one quarter of the size of a Tall-man.",

      'IMAGE': "https://static.tvtropes.org/pmwiki/pub/images/dungeonmeshi_giantscorpion.png"
   },
   'WALKINGMUSHROOM': {
      'NAME': 'Walking Mushroom',

      'DESCRIPTION': "They have the appearance of large mushrooms that walk on two feet resembling upside-down mushrooms. The ones encountered most often are approximately a quarter of the height of a tall-man.",

      'IMAGE': "https://44.media.tumblr.com/b0f29a3fd6c7ec8c4166cc98134cf15a/9e8b02a11904b716-93/s540x810_f1/3dd035269f873c0d5572ed13b075956f24c2d84c.gif"
   },
   'LIVINGARMOR': {
      'NAME': 'Living Armor',

      'DESCRIPTION': "Living Armor resemble hollow suits of armor that move by themselves, and until recently were thought to be actual suits of armor animated by an unknown sorcerer. However, they are in actuality a kind of mollusk that mimics armor. They consist of colonies of individuals that gather together when older, linking up their bodies, and then move by contracting themselves like muscles.",

      'IMAGE': "https://pbs.twimg.com/media/GELNAYkaoAAlLfS?format=jpg&name=4096x4096"
   },
   'MIMIC': {
      'NAME': 'Mimic',

      'DESCRIPTION': "Mimics resemble large hermit crabs that typically use treasure chests as their shells, although they can use any container as a home.",

      'IMAGE': "https://static.animecorner.me/2024/02/1707696037-38776.png"
   },
}

Object.freeze(DISHES);
Object.freeze(MONSTERS);

export default DISHES;