Build backend with full crud 
     
     create user auth (username, password, email)
     user will have the 
                         id of the user
                         username 
                         name
                         logo (profile image)
                         score 1000
                         friends
                         inventory of logo badges 

    create  guest user 

    create websocket connection for multiplayer server
    
Frontend 
  Authorization

        Login page auth the user
        Sign up page
        Login in as guest 


  Main page 

        Friend request to start game with friends
        Random game with any user that is looking to start
        Play with computer 
        inventory with logo badges
        Choose how many players 

 Page with game 

    Start game
        Have card deck with all cards
        Each player will start with 7 cards from deck
        Game field will have 1 card 
        Create logic for the card
                         Move can be color or number of field card

                         Special cards 
                                    [
                                             change direction,
                                             +4 choose color,
                                             skip move(matchColor),
                                             +2 matchColor ,
                                             Wildcard choose color for the field

                                             ]
                        Call uno when you have 1 card left on hand 
                                    if game potentially won but uno was not called collect 2 

                        If deck has 1 card THEN shuffle field - last card and add to deck 

                        2+ players game 
                                    
                                    first out +200 score 
                                    second out +100 score 
                                    lost  - 100 score 

                        Playing with computer 
                                    if won +100 
                                    if lost - 50 score 

                  Game outcome will animate full screen with fireworks or something sad 
 After game route to start page 
 Render the score 
 

    

                         