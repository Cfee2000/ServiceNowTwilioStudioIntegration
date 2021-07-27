# LEGAL DISCLAIMER

Notice: This code and the information contained herein is not legal advice, and Twilio recommends that you consult with your legal counsel to make sure that you are complying with all applicable laws in connection with communications you transmit and receive using Twilio. Ultimately, you are responsible for ensuring that your use of Twilio complies with all applicable laws and regulations. Please also refer to our [**Terms of Service**](https://www.twilio.com/legal/tos>) and [**Acceptable Use Policy**](https://www.twilio.com/legal/aup) for more information.

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

There is a pending blog post that walks through a full POC development using the solution provided in this repository. I will link to that blog once it's posted. 

The blog assumes a manual process for development, but if you've installed the CLI per the setup instructions below, then you can use the CLI to upload your Twilio Serverless project directly
