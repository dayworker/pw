self.addEventListener("push", () => {
	self.registration.showNotification("Hello world!", {});
});
// self.addEventListener("push", (e) => {
// 	const data = e.data.json();
// 	let title = data.title || "a default message if nothing was passed to us";
// 	let body = data.body || "WOW! The things I learned at FloridaJS";
// 	let tag = data.tag || "push-simple-demo-notification-tag";
// 	let icon = "https://floridajs.com/images/logo.jpg";

// 	e.waitUntil(self.registration.showNotification(title, { body, tag }));
// });
