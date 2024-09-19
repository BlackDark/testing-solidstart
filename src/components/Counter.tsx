import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import { executeOnServer } from "~/lib/server";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  const clickHandler = () => {
    executeOnServer();
    setCount(count() + 1);
  };
  return <Button onClick={clickHandler}>Clicks: {count()}</Button>;
}
