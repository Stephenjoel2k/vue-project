import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    updated(registration) {
      if (window.confirm("A new version is available, update now?")) {
        const worker = registration.waiting;
        worker.postMessage({ action: "SKIP_WAITING" });
        // refresh the page or trigger a refresh programatically!  
      }
    }
  });
}
