var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BMi1CewoUJo2ooSRDj6cs07iBgmxeyFNCGM-rzQifivhkbVP89vLSeZE1cQfSfkDRPdaTCrwcsSPNktCPa7T1_Y",
  privateKey: "kgZRz13-TxFC2-fWygvBStQKfup0wZEDdNOWhqLDxwE",
};

push.setVapidDetails(
  "mailto:itant@daum.net",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
