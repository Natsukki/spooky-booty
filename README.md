# SpookBot


## A simple discord bot

In order to run it you only need free hosting on websites such as `heroku`, `glitch.io`, etc...
The procfile provided is destined for `heroku` hosting.

## What for ?

I did this so I could change every `username` or `userNickName` in a discord server by adding an emoji (according to the season) at the end.

## Usage
```
-spook [-emoji]

-clean
```


## Bugs

- Beware of long usernames/nicknames as the bot will crash because of discord's API restrictions on those.
- If permissions and role order are not set correctly the bot will not change the usernames.
