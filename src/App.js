import React from "react";
import {Message} from './message';

export function App () {
  const textTemplate = 'Message text template.';
  return (
    <div>
      <Message text={textTemplate}/>
    </div>
  );
}

export default App;