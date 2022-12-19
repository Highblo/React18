import { FC, useState } from "react";
import { flushSync } from "react-dom";

export const AutoBatchEventHandler: FC = () => {
  console.log("AutoBatchEventHandler");
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  const onClickCountUp = () => {
    console.log(state1);
    // バッチ処理をしないようにする
    flushSync(() => {
      setState1((state1) => state1 + 1);
    });
    console.log(state1);
    setState2((state2) => state2 + 1);
  };
  return (
    <div>
      <p>Automatic Batching確認用 (イベントハンドラ)</p>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
      <p>
        イベントハンドラ内でセット関数を実行するとまとめて１回レンダリングされる
      </p>
    </div>
  );
};
