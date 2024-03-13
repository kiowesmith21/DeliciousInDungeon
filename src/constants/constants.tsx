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
     }
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
    }
}

Object.freeze(DISHES);
Object.freeze(MONSTERS);

export default DISHES;