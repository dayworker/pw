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
// 엣지
// let sub = {
// 	endpoint:
// 		"https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAB8VnEuAntWv7P68IoWeKDkSSovu0Bh%2fsot0Bji%2bHXhs3%2bLXFLw1%2bDc7tVW%2bU2mdORgseIDicPvYd7uns2fodLYYKv7dPz6PvTZRNOPZMBpUWO7uHEWV9QpZld49YTEux7AjZf7uNe%2bMPw8u6ZivcnjdMr4WRy7fo1TjOUvr0ZDVYSYOLYl6s4MDtokXUxYfA5pC%2ft9W8FSG93SoVAlAqeCRt%2fgQP0OyB%2bbassq493O7oM9Qrg21dgrs5bmBmmzpLQQQITtQYmobkP%2bWSXog6Ixw7wR%2fN2bzniNKGXbP8rj17vDvoV0QsLUnMyIuq9ZUc5bj1rna7OTcs7Z%2feCq12dQ",
// 	expirationTime: null,
// 	keys: {
// 		p256dh:
// 			"BM7P6tDi9KPD7YwtMbZBiRtghB58tQ-s6fsyTtBPvOUmMuWDr4GfOyB32FugRrt4qbPGDgPUM-5_qICl5dULRKY",
// 		auth: "EzCwhXREwkPItiFDX9f5yQ",
// 	},
// };

// 크롬
let sub = {
	endpoint:
		"https://fcm.googleapis.com/fcm/send/ec6rqjE_TKw:APA91bGGqQA1U8CLdmcfUzS3qseJsZCFubrW7Nzq8tRiLzqAXw3e6DF58yY4BZ-t31M6den0G6BLEwYZVn2mpmfnUQe2CLshzjkH-TdO7saep07PtfGZ3gOHYOJ-FkRukA52vxrwtxP3",
	expirationTime: null,
	keys: {
		p256dh:
			"BONQAPaGV9O-zRzlPLUM1xX8B4b-rtIRxvnfdknUrEdUkxzAU__v-OUwILUHnEz3xyuTlcktQCdVkjyjXPRPXpk",
		auth: "yB4r11wd90keWf-wWRua4g",
	},
};

push.sendNotification(sub, "Hello world!");
