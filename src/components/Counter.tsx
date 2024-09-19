import { useAction } from "@solidjs/router";
import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import {
  executeOnServer,
  hello,
  simulateAction,
  simulateGetRequest,
} from "~/lib/server";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const resultAction = useAction(simulateAction);

  const clickHandler = async () => {
    const resGet = await simulateGetRequest("hey");
    console.log(resGet);

    // Not sure how this should be consumed
    const resHello = await hello("hey");
    console.log(resHello);

    executeOnServer();
    setCount(count() + 1);
  };

  const actionHandler = async () => {
    const resAction = await resultAction("any", { some: "data" });
    console.log(resAction);
  };

  return (
    <div>
      <Button onClick={clickHandler}>Clicks: {count()}</Button>
      <Button onClick={actionHandler}>Action please</Button>
    </div>
  );
}
