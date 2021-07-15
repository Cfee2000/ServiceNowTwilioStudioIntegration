exports.handler = function (context, event, callback) {
  const axios = require('axios');
  console.log(event.sys_id);
  console.log(event.assigned_to);

  let url =
    context.SERVICE_NOW_API_TABLE_ROOT + 'sys_user/' + event.assigned_to;
  console.log(url);
  console.log(event.name);

  axios
    .get(url, {
      auth: {
        username: context.SERVICE_NOW_USERNAME,
        password: context.SERVICE_NOW_PASSWORD,
      },
    })
    .then(function (response) {
      console.log('response');
      console.log(response.data.result);

      //  check if result valid - SNOW user/caller found
      if (response.data.result.manager) {
        let url =
          context.SERVICE_NOW_API_TABLE_ROOT + 'incident/' + event.sys_id;
        console.log(url);
        axios
          .put(
            url,
            {
              assigned_to: response.data.result.manager.value,
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
      } else {
        console.log(
          'Manager for ' +
            event.name +
            ' not found when trying to reassign incident. Check the user record in ServiceNow and make sure ' +
            event.name +
            ' has an assigned manager'
        );
        console.log('response');
        callback(null, response);
      }
    })
    .catch(function (error) {
      console.log('error');
      console.log(error);
      callback(null, error);
    });
};
