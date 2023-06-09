var push = require("web-push");

let vapidKeys = {
	publicKey:
		"BDCuwEJaNg8f8UtTnD4yylmCuWsTCxxVoA-VXWExkxtCDC8U4yadV3aEUptbMvid_ctsDevpP-0NH40V-6AfW8k",
	privateKey: "jcXlqHYI5CV9j4R1EF71kuptaHOEzMkz9PThic_6ee0",
};

push.setVapidDetails(
	"mailto:itant@daum.net",
	vapidKeys.publicKey,
	vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
