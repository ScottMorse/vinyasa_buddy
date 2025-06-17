import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import {
  animate,
  createTimeline,
  createTimer,
  createScope,
  type Scope,
  // ...other methods
} from 'animejs';
import { StickFigure } from './StickFigure';

function App() {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({
      root,
    }).add((self) => {});

    return () => {
      scope.current?.revert();
    };
  }, []);

  return (
    <div className="App">
      <div ref={root}>
        <StickFigure />
      </div>
    </div>
  );
}

export default App;
