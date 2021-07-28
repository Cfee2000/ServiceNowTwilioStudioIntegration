# LEGAL DISCLAIMER

Notice: This code and the information contained herein is not legal advice, and Twilio recommends that you consult with your legal counsel to make sure that you are complying with all applicable laws in connection with communications you transmit and receive using Twilio. Ultimately, you are responsible for ensuring that your use of Twilio complies with all applicable laws and regulations. Please also refer to our [**Terms of Service**](https://www.twilio.com/legal/tos>) and [**Acceptable Use Policy**](https://www.twilio.com/legal/aup) for more information.

# Complementary Twilio Blog Post

There is a pending blog post that walks through a full POC development using the solution provided in this repository. I will link to that blog once it's posted.

The blog assumes a manual process for using this repository, and as such, if you wish to follow that blog from start to finish without having to do any local javascript development, you can simply walk through the blog step by step in lieu of the below instrucitons.

However, if you're interested in being able to streamline your development by using the Twilio CLI and Serverless Toolkit, then you can use the instructions below to do local development and deploy your functions to Twilio Serverlesss via the CLI. I would recommend this route for intermediate to advanced developers looking to interate and manage changes over time

# ServiceNow Twilio Studio Integration for Multichannel Incident Mangement

The repository includes the following:

1. ServiceNow Business Rule Scripts - we use these scripts to create automated outbound notifications from ServiceNow Incidents.
2. Twilio Studio Flows - the scripts in step #1 call Twilio Studio Flow Execution API, and the flows here provide the functionality to facilitate 2-way communications over SMS and/or Voice
3. Twilio Functions - these functions provide web service calls to ServiceNow to perform CRUD operations against an Incident record as it's being worked by an assigned ServiceNow Agent.

## Local Development Setup (Optional)

If you don't want to do local development, then please follow the [Blog Post](www.twilio.com/blog) above. If you're ambitious and want to do local development, then read on...

The function code in this repository uses Node.JS. Make sure you it installed [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). Twilio currently supports Node >= 10.12 (and we recommend the _even_ versions of Node).

Here are the steps to get your local environment ready to build and deploy the Twilio Functions in this repository:

```Step 1:``` Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and [Twilio Serverless CLI Plugin](https://www.twilio.com/docs/labs/serverless-toolkit)<br/>
```Step 2:``` Download a ZIP file of this repository locally on your computer (Alternatively, you can Fork the repository and manage your own version through Github).<br/>
```Step 3:``` Extract the contents and move them to your desired working directory.<br/>
```Step 4:``` Open your favorite IDE (eg. Visual Studio Code) and open the working directory associated with this repository to get started.<br/>
```Step 5:``` Open a terminal in your IDE (or another terminal program of your choice) to get started.<br/>
```Step 6:``` From the root of your working directory, install the dependencies as follows (see the package.json file for details on what will be installed)<br/>

```npm install```

```Step 7:``` Initialize your Twilio Serverless Project with the following (requires the Serverless Toolkit from Step #1)<br/>

```twilio serverless:init```

```Step 8:``` Setup your local debugging environment to attach to your functions for debugging (setup will vary based on IDE you use, but this instruction will be specifically for VSCode)<br/>

## Development
