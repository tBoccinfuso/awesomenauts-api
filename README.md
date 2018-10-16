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
    
2. https://awesomenauts-api.herokuapp.com/naut/:naut
    - Where `:naut` is the key of the naut you want to search for. This will return a json object with all info related to the naut. Example: https://awesomenauts-api.herokuapp.com/naut/yoolip
    
3. https://awesomenauts-api.herokuapp.com/naut/:naut/role
    - Get the Role of the Awesomenaut.
    
3. https://awesomenauts-api.herokuapp.com/naut/:naut/difficulty
    - Get the Difficulty of the Awesomenaut.
    
4. https://awesomenauts-api.herokuapp.com/naut/:naut/description
    - Get the Description of the Awesomenaut.  
    
5. https://awesomenauts-api.herokuapp.com/naut/:naut/image
    - Get the Image of the Awesomenaut.
        
6. https://awesomenauts-api.herokuapp.com/naut/:naut/name
    - Get the Name of the Awesomenaut. This will include their full name. Example: Professor Yoolip.
        
7. https://awesomenauts-api.herokuapp.com/naut/:naut/abilities
    - Returns an ojbect containing all abilities of the Awesomenaut.
        
8. https://awesomenauts-api.herokuapp.com/naut/:naut/abilities/one
    - Get the first ability of the Awesomenaut.
            
9. https://awesomenauts-api.herokuapp.com/naut/:naut/abilities/two
    - Get the second ability of the Awesomenaut.
            
10. https://awesomenauts-api.herokuapp.com/naut/:naut/abilities/attack
    - Get the attack of the Awesomenaut.
            
11. https://awesomenauts-api.herokuapp.com/naut/:naut/abilities/jump
    - Get the jump ability of the Awesomenaut.
            
12. https://awesomenauts-api.herokuapp.com/battlefields
    - Get all battlefield objects.
            
13. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield
    - Return the object of the passed battlefield.
                
14. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/name
    - Get the Name of the battlefield.
                    
15. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/description
    - Get the Description of the battlefield.
                    
16. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/creep
    - Get the Creep of the battlefield.    
                    
17. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/hazard
    - Get the Hazard of the battlefield.
                    
18. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/hazard_text
    - Get the Hazard description of the battlefield.
                    
19. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/splash
    - Get the Splash art of the battlefield.
                    
20. https://awesomenauts-api.herokuapp.com/battlefield/:battlefield/map
    - Get the Mini map of the battlefield.
