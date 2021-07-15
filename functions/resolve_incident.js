exports.handler = function (context, event, callback) {
  const axios = require('axios');

  let close_code = 'Solved (Permanently)';

  let url = context.SERVICE_NOW_API_TABLE_ROOT + 'incident/' + event.sys_id;

  let notes = '';
  if (event.From.startsWith('MG')) {
    notes = 'Close notes from ' + event.name + ' via SMS: ' + event.closeNotes;
  } else {
    notes =
      'Close notes from ' + event.name + ' via Voice: ' + event.closeNotes;
  }

  axios
    .put(
      url,
      {
        incident_state: '7',
        close_notes:
          'Close notes from ' + event.name + ' via SMS: ' + event.closeNotes,
        close_code: close_code,
      },
      {
        auth: {
          username: context.SERVICE_NOW_USERNAME,
          password: context.SERVICE_NOW_PASSWORD,
        },
      }
    )
    .then(function (response) {
      console.log('response');
      callback(null, response);
    })
    .catch(function (error) {
      console.log(error);
      callback(null, error);
    });
};
