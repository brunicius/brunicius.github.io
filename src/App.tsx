import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { CardHeader } from "./components/CardHeader/CardHeader";
import { CardTabs } from "./components/CardTabs/CardTabs";

const App = () => {
  const [cardShown, setCardShown] = useState<boolean>(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);

    setTimeout(()=>{
      setCardShown(true)
    }, 2000)
  }, [parent]);  

  return (
    <div>
      <Header />
      <div ref={parent}>
        {cardShown && (
          <Card>
            <CardHeader />
            <CardTabs />
          </Card>
        )}
      </div>
    </div>
  );
};

export default App;
