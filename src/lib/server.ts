import { action, cache, json, redirect } from "@solidjs/router";
import { GET } from "@solidjs/start";

export const executeOnServer = () => {
  "use server";

  console.log("This should run on server");

  return json({ message: "From Server hello" });
};

export const simulateGetRequest = cache(async (id: string) => {
  "use server";

  console.log(`simulateGet ${id}`);

  return json({ message: "From Server hello" });
}, "testget");

export const simulateAction = action(async (id, data) => {
  "use server";
  console.log("simulateAction");
  throw redirect("/", { revalidate: "simulateAction" });
});

export const hello = GET(async (name: string) => {
  "use server";
  console.log(`simulateHello ${name}`);
  return json(
    { hello: new Promise<string>((r) => setTimeout(() => r(name), 1000)) },
    { headers: { "cache-control": "max-age=60" } }
  );
});
