exports.handler = function (context, event, callback) {
  const axios = require('axios');
  console.log(event.sys_id);

  let url = context.SERVICE_NOW_API_TABLE_ROOT + 'incident/' + event.sys_id;
  console.log(url);
  console.log(event.name);
  console.log(event.From);

  let workNotes = '';
  if (event.From.startsWith('MG')) {
    workNotes = 'New SMS comment from ' + event.name + ': ' + event.comment;
  } else {
    workNotes = 'New Voice comment from ' + event.name + ': ' + event.comment;
  }
  axios
    .put(
      url,
      {
        work_notes: workNotes,
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
      console.log('error');
      console.log(error);
      callback(null, error);
    });
};
