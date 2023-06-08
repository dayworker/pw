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

let sub = {
  endpoint:
    "https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAC0I2qu4mmSAX8%2f47JCkKzOcHTyceqEfjK3UgcH%2fNU0ZP65YTupapTonJMIzaVW4k145AYla92WBi0naty%2bo5%2fttwmCYqzzWWvS8SetWoiY0%2fzWBJMm2DKgRKSKX5SpaITOSrNqBEsHc1HlDqORKkcw7zPFIGMHWb59mSYfmzvqerk5zpe1jBGagMTdozTnUhh7NC%2fGaBh55advWIY4WBEj2G36b1Y7LPxaVLC1lS6mOmdgjQKLcR7Vo2lMhXfF4YnQvULjdoF5zv1fvtZCSTUdrtHRmK5S%2bu7xc40iysz14Ls0Jz%2b3siGQIDLr6RM3WdcgiHilN4HrbF%2fjf5pKVYuK",
  expirationTime: null,
  keys: {
    p256dh:
      "BFOgwK1tx2MlRha-qpjnSWCO5qEGaeN6bDxAf7a6GOtYC8cFP8RYBzpTzvqTqV0V-4nwqHQYmDqm-NGvWQ2jyNk",
    auth: "BZ5w5jT9VzN6Cm-9xAtOCg",
  },
};

push.sendNotification(sub, "test message");
