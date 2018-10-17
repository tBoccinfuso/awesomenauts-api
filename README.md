# awesomenauts-api
An API for all your Awesomenauts related data returned as json. Make your requests to: https://awesomenauts-api.herokuapp.com/

## What params can I pass?

1. `:naut` => the key of an Awesomenaut. Often will be the naut's name will be the key unless they are multi word name.
2. `:battlefield` => the key of a battlefield.

### Naut keys
froggyg
lonestar
leon
scoop
gnaw
raelynn
ayla
clunk
voltar
coco
skolldir
yuri
derpl
vinnie
genji
swiggins
rocco
ksenia
ix
ted
penny
sentry
skree
nibbs
yoolip
chucho
jimmy
max
deadlift
dizzy
smiles
rocket
qi-tara
snork

### Battlefield keys
ribbit ai_205 aiguillon ai_404 sorona

## What routes give me data?

1. https://awesomenauts-api.herokuapp.com/nauts 
    - Return 1 big json object with all nauts (also objects).
    
2. /naut/:naut
    - Example: https://awesomenauts-api.herokuapp.com/naut/yoolip
    - Where `:naut` is the key of the naut you want to search for. This will return a json object with all info related to the naut. 
    
3. /naut/:naut/role
    - Example: https://awesomenauts-api.herokuapp.com/naut/deadlift/role
    - Get the Role of the Awesomenaut.
    
3. /naut/:naut/difficulty
    - Example: https://awesomenauts-api.herokuapp.com/naut/lonestar/difficulty
    - Get the Difficulty of the Awesomenaut.
    
4. /naut/:naut/description
    - Example: https://awesomenauts-api.herokuapp.com/naut/froggyg/description
    - Get the Description of the Awesomenaut.  
    
5. /naut/:naut/image
    - Example: https://awesomenauts-api.herokuapp.com/naut/dizzy/image
    - Get the Image of the Awesomenaut.
        
6. /naut/:naut/name
    - Example: https://awesomenauts-api.herokuapp.com/naut/yoolip/name
    - Get the Name of the Awesomenaut. This will include their full name. Example: Professor Yoolip.
        
7. /naut/:naut/abilities
    - Example: https://awesomenauts-api.herokuapp.com/naut/max/abilities
    - Returns an ojbect containing all abilities of the Awesomenaut.
        
8. /naut/:naut/abilities/one
    - Example: https://awesomenauts-api.herokuapp.com/naut/max/abilities/one
    - Get the first ability of the Awesomenaut.
            
9. /naut/:naut/abilities/two
    - Example: https://awesomenauts-api.herokuapp.com/naut/max/abilities/two
    - Get the second ability of the Awesomenaut.
            
10. https://awesomenauts-api.herokuapp.com/naut/:naut/abilities/attack
    - Get the attack of the Awesomenaut.
            
11. /naut/:naut/abilities/jump
    - Example: https://awesomenauts-api.herokuapp.com/naut/max/abilities/jump
    - Get the jump ability of the Awesomenaut.
            
12. /battlefields
    - Example: https://awesomenauts-api.herokuapp.com/battlefields
    - Get all battlefield objects.
            
13. /battlefield/:battlefield
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/:ribbit
    - Return the object of the passed battlefield.
                
14. /battlefields/:battlefield/name
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/ai_205/name
    - Get the Name of the battlefield.
                    
15. /battlefields/:battlefield/description
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/ribbit/description
    - Get the Description of the battlefield.
                    
16. /battlefields/:battlefield/creep
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/ai_404/creep
    - Get the Creep of the battlefield.    
                    
17. /battlefields/:battlefield/hazard
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/sorona/hazard
    - Get the Hazard of the battlefield.
                    
18. /battlefields/:battlefield/hazard_text
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/sorona/hazard_text
    - Get the Hazard description of the battlefield.
                    
19. /battlefields/:battlefield/splash
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/ribbit/splash
    - Get the Splash art of the battlefield.
                    
20. /battlefields/:battlefield/map
    - Example: https://awesomenauts-api.herokuapp.com/battlefield/ribbit/map
    - Get the Mini map of the battlefield.
