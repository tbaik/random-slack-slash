# Random Slash Command

## Dependencies
node version 12.14.1+

## Usage In Slack
To use the random slash command, type `/random` inside of any Slack message. You must provide at least two space-separated values.

![example gif](assets/example.gif)

## Deploying
1. Clone this repository

    ``` git clone git@github.com:tbaik/random-slack-slash.git```
2. Run the deploy command

    ```npm run deploy```

    *You must set the following two environmental variables in order to deploy to AWS*
    ```
    export AWS_ACCESS_KEY_ID=<your-key-here>
    export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
    ```
