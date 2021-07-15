exports.handler = function (context, event, callback) {
  console.log(event.name);
  console.log(event.To);
  console.log(event.From);
  console.log(event.short_description);
  console.log(event.sys_id);
  console.log(event.urgency);
  console.log(event.number);
  console.log(context.ACCOUNT_SID);

  const client = require('twilio')(context.ACCOUNT_SID, context.AUTH_TOKEN);

  (async () => {
    await client.studio.v2
      .flows('FW1fe84d2ef00e784bb45c7d8fd2d50dd2')
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
