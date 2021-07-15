# ServiceNow Twilio Studio Integration for Mulichannel Incident Mangement

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

The function code in this repository uses Node.JS. Make sure you it installed [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). Twilio currently supports Node >= 10.12 (and we recommend the _even_ versions of Node).

Download a ZIP file of this repository locally on your computer. Extract the contents and move them to your desired working directory. Open your favorite IDE (eg. Visual Studio Code) and open the working directory associated with this repository to get started. Open a terminal in your IDE (or another terminal program of your choice) to get started.

From the root of your working directory, install the dependencies (see the package.json file for details)
'''
npm install

```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```

brew tap twilio/brew && brew install twilio

```

Finally, install the [Twilio Serverless CLI Plugin](https://www.twilio.com/docs/labs/serverless-toolkit) for the Twilio CLI:

```

npm install @twilio-labs/serverless-api

```

## Development

```
