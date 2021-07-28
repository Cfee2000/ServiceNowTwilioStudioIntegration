# DISCLAIMER

Notice: This code and the information contained herein is not meant to be used in a production deployment. Rather, this code is intended to serve as a means to springboard your Twilio + ServiceNow development, such that you have a model/framework/samples to start from when considering your own custom development of a ServiceNow + Twilio integration. Twilio and its employees do not provide any SLA for this code - it is meant to be used "as-is" to help customers with a reference point for their own use cases and development. Twilio recommends that you consult with your legal counsel to make sure that you are complying with all applicable laws in connection with communications you transmit and receive using Twilio. Ultimately, you are responsible for ensuring that your use of Twilio complies with all applicable laws and regulations. Please also refer to our [**Terms of Service**](https://www.twilio.com/legal/tos>) and [**Acceptable Use Policy**](https://www.twilio.com/legal/aup) for more information.

# Complementary Twilio Blog Post

There is a pending blog post that walks through a full POC development using the solution provided in this repository. I will link to that blog once it's posted.

The blog assumes a manual process for using this repository, and as such, if you wish to follow that blog from start to finish without having to do any local javascript development, you can simply walk through the blog step by step in lieu of the below instrucitons.

However, if you're interested in being able to streamline your development by using the Twilio CLI and Serverless Toolkit, then you can use the instructions below to do local development and deploy your functions to Twilio Serverlesss via the CLI. I would recommend this route for intermediate to advanced developers looking to interate and manage changes over time

# ServiceNow Twilio Studio Integration for Multichannel Incident Mangement

The repository includes the following:

1. ServiceNow Business Rule Scripts - we use these scripts to create automated outbound notifications from ServiceNow Incidents.
2. Twilio Studio Flows - the scripts in step #1 call Twilio Studio Flow Execution API, and the flows here provide the functionality to facilitate 2-way communications over SMS and/or Voice
3. Twilio Functions - these functions provide web service calls to ServiceNow to perform CRUD operations against an Incident record as it's being worked by an assigned ServiceNow Agent.

The Blog Post reference above will help you understand how to setup steps #1 and #2 above. The rest of this readme will be for advanced users to streamline step #3, such that you can leverage the Twilio CLI for local debugging and deploying to Twilio Serverless

## Local Development Setup (Optional)

If you don't want to do local development, then please follow the [Blog Post](www.twilio.com/blog) above. If you're ambitious and want to do local development, then read on...

The function code in this repository uses Node.JS. Make sure you it installed [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). Twilio currently supports Node >= 10.12 (and we recommend the _even_ versions of Node).

Here are the steps to get your local environment ready to build and deploy the Twilio Functions in this repository:

```Step 1:``` Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and [Twilio Serverless CLI Plugin](https://www.twilio.com/docs/labs/serverless-toolkit). You will want to read through these steps thorougly and make sure you understand how to use the CLI, including setting up Twilio Profile(s), before proceeding to next steps.<br/>
```Step 2:``` Download a ZIP file of this repository locally on your computer (Alternatively, you can Fork the repository and manage your own version through Github).<br/>
```Step 3:``` Extract the contents and move them to your desired working directory.<br/>
```Step 4:``` Open your favorite IDE (eg. Visual Studio Code) and open the working directory associated with this repository to get started.<br/>
```Step 5:``` Open a terminal in your IDE (or another terminal program of your choice) to get started.<br/>
```Step 6:``` From the root of your working directory, install the dependencies as follows (see the package.json file for details on what will be installed)<br/>

```
npm install
```

```Step 7:``` Initialize your Twilio Serverless Project with the following (requires the Serverless Toolkit from Step #1)<br/>

```
twilio serverless:init
```
Now you are all setup with a Twilio Serverless project that you can debug/deploy/iterate against!

# Deploying Locally from the Twilio CLI

<i>NOTE: You can reference my previous [Flex Plugins and Functions debugging/deploying](https://www.twilio.com/blog/flex-plugins-vs-code-functions-cli) blog post for guidance on the sections below</i><br/>

After running the "init" step above, you can simply run ```twilio serverless:deploy``` from the root directory to deploy your Twilio Functions to your Twilio Account. For subsequent deployments, use ```twilio serverless:deploy -override-existing-project```

# Debugging Locally with your Twilio Functions in VSCode

<i>NOTE: You'll need [NGROK](https://ngrok.com/) installed to run locally debugging successfully, whether you choose to run using a REST Client like Postman, or directly from a running Twilio process (eg. using an HTTP widget from Twilio Studio to point to your NGROK domain and local function)</i><br/>
    
If you want to debug your Twilio Functions locally, you have the option to setup your local debugging environment to attach to your functions for debugging (setup will vary based on IDE you use, but this instruction will be specifically for VSCode). In VSCode, you go to the debugger and create a launch.json file. The most basic setup is as follows, and should work for the default debugger settings:<br/>
```
{
    "version": "0.2.0",
    "configurations": [
          {
            "type": "node",
            "request": "attach",
            "name": "Attach",
            "port": 9229
          }
    ]
 }
```
There's a few steps you'll need to take to start debugging locally:<br/>

```Step 1:```From the root directory of your project (1 level up from your Functions folder), run the following command to start the debugger (make sure no existing NGROK processing are running)

```
twilio serverless:start --ngrok=cfeehan --inspect="" 
```

This will start a debugger process running on the default port 9229, which matches the launch.json file above.

```Step 2:``` In VSCode, go to your Debugger and press the play button to attach to the existing debugger. This will then prep your functions to be hit when setting breakpoints (so go set your breakpoints now!)

```Step 3 (optional):``` This step you can either choose to use Postman if you want to run one-off, ad-hoc queries that hit your Twilio Functions on your NGROK domain, or you can point Twilio Studio to your functions using the [Make HTTP Request](https://www.twilio.com/docs/studio/widget-library/http-request) widget and point to one of your functions (eg. https://[YOUR DOMAIN].ngrok.io/accept_incident), passing in any appropriate parameters as desired.

