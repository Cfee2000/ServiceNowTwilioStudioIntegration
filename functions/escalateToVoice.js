exports.handler = function (context, event, callback) {
  console.log(event.name);
  console.log(event.To);
  console.log(event.From);
  console.log(event.short_description);
  console.log(event.sys_id);
  console.log(event.urgency);
  console.log(event.number);
  console.log(context.ACCOUNT_SID);

  const client = require('twilio')(
    context.TWILIO_API_KEY,
    context.TWILIO_API_SECRET,
    { accountSid: context.ACCOUNT_SID }
  );

  (async () => {
    await client.studio.v2
      .flows(`${context.TWILIO_STUDIO_FLOW_SID}`)
      .executions.create({
        to: event.To,
        from: event.From,
        parameters: {
          short_description: event.short_description,
          sys_id: event.sys_id,
          urgency: event.urgency,
          name: event.name,
          number: event.number,
          assigned_to: event.assigned_to,
        },
      })
      .then((execution) => {
        console.log(execution.sid);
        callback(null, execution.sid);
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
        callback(null, error);
      });
  })();
};
