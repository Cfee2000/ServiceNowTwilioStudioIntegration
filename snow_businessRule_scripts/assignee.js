(function executeRule(current, previous /*null when async*/) {
  //sys_id record for whatever object (eg. specific Incident record) is triggered by this Business Rule
  var id = current.getValue('sys_id');
  var assignedTo = current.getValue('assigned_to');

  gs.info('assigned to: ' + assignedTo);
  gs.info('My sys_id is: ' + id);
  //"u_channel_preference" is a custom field I created in ServiceNow to illustrate the ability to use this field and send to Twilio
  //var channel = current.caller_id.u_channel_preference;

  //This will be the Messaging Service SID on your Twilio Account (you need to set this up) and will be used to send SMS
  var from = '[YOUR MESSAGING SERVICE SID]';

  //This will be a Twilio Voice number (in E164 format) that you can use as a CallerID to perform a voice call escalation from SMS
  var voiceNumber = '[YOUR TWILIO VOICE NUMBER]';

  //Spin up a REST Message using ServiceNow's Native WebServices API and point to your Twilio Studio Flow REST API Execution URL
  var request = new sn_ws.RESTMessageV2();
  request.setEndpoint(
    'https://studio.twilio.com/v2/Flows/[YOUR STUDIO SMS ASSIGNEE FLOW SID]/Executions'
  );
  request.setHttpMethod('POST');

  //Your Twilio Account SID and Auth Token to Authenticate this request
  var user = '[YOUR ACCOUNT SID]';
  var password = '[YOUR AUTH TOKEN]';

  request.setBasicAuth(user, password);

  //Request Headers for the most basic type of request for POC. Note that Twilio cannot accept a JSON blob, so Content-Type must be what is defined here
  request.setRequestHeader('Accept', '*/*');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  //You can modify the Body here to pass any parameters you need to pass from ServiceNow to Twilio
  request.setRequestBody(
    'To=' +
      current.assigned_to.mobile_phone +
      '&From=' +
      from +
      '&Parameters={"short_description":"' +
      current.short_description +
      '","phone":"' +
      current.assigned_to.mobile_phone +
      '","voiceNumber":"' +
      voiceNumber +
      '", "number":"' +
      current.number +
      '", "sys_id":"' +
      id +
      '", "assigned_to":"' +
      assignedTo +
      '", "name":"' +
      current.assigned_to.first_name +
      ' ' +
      current.assigned_to.last_name +
      '", "urgency":"' +
      current.urgency +
      '"}'
  );

  var response = request.execute();

  //Optionally update the Work Notes on the original object (eg. Incident). This is just an example of updating the ServiceNow object record. Use ServiceNow's REST API explorer to further investigate how you might update the record from Twilio during or after Studio Flow execution
  current.work_notes = response.getBody();
  current.update();
  //gs.log(response.getBody());
})(current, previous);
