# ServiceNow Twilio Studio Integration for Multichannel Incident Mangement

The repository includes the following:

1. ServiceNow Business Rule Scripts - we use these scripts to create automated outbound notifications from ServiceNow Incidents.
2. Twilio Studio Flows - the scripts in step #1 call Twilio Studio Flow Execution API, and the flows here provide the functionality to facilitate 2-way communications over SMS and/or Voice
3. Twilio Functions - these functions provide web service calls to ServiceNow to perform CRUD operations against an Incident record as it's being worked by an assigned ServiceNow Agent.

## Setup

The function code in this repository uses Node.JS. Make sure you it installed [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). Twilio currently supports Node >= 10.12 (and we recommend the _even_ versions of Node).

Download a ZIP file of this repository locally on your computer. Extract the contents and move them to your desired working directory. Open your favorite IDE (eg. Visual Studio Code) and open the working directory associated with this repository to get started. Open a terminal in your IDE (or another terminal program of your choice) to get started.

From the root of your working directory, install the dependencies (see the package.json file for details)
```npm install```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```brew tap twilio/brew && brew install twilio```

Finally, install the [Twilio Serverless CLI Plugin](https://www.twilio.com/docs/labs/serverless-toolkit) for the Twilio CLI:

```npm install @twilio-labs/serverless-api```

## Development

