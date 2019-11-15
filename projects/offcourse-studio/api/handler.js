const https = require("https");

module.exports.contact = (event, context, callback) => {
  const { origin, formData } = JSON.parse(event.body);
  const allowedDomains = ["offcourse-studio.com", "www.offcourse-studio.com"];

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedDomains.includes(origin)
        ? `https://${origin}`
        : "null",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(formData)
  };

  const options = {
    hostname: "hooks.slack.com",
    method: "POST",
    path: process.env.SlackHookPath
  };

  const req = https.request(options, res =>
    res.on("data", () => callback(null, response))
  );
  req.on("error", error => callback(JSON.stringify(error)));
  req.write(JSON.stringify({ text: formData }));
  req.end();
};
