import packageInfo from "../../package.json";

const serviceWorkerOptions = {
  serviceWorker: {
    // Specify the worker script URL relative to the _root_.
    url: `${packageInfo.homepage}/mockServiceWorker.js`,
    options: {
      // Override the scope to the root ("/").
      // By default, the worker is scoped to its location on server,
      scope: "/",
    },
  },
};

if (typeof window === "undefined") {
  console.log("Mock Service Worker start!");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { server } = require("../mocks/server");
  server.listen(serviceWorkerOptions);
  server.printHandlers();
} else {
  console.log("Mock Service Worker start!");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("../mocks/browser");
  worker.start(serviceWorkerOptions);
  worker.printHandlers();
}
