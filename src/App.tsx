import './App.css';
import { StickFigure } from './StickFigure';
import { usePosture, useSetPosture } from './store';

function App() {
  const posture = usePosture();
  const setPosture = useSetPosture();

  return (
    <div className="App">
      <StickFigure
        position={posture?.stickFigurePosition ?? null}
        config={{
          headRadius: 50,
          lineWidth: 4,
        }}
      />
    </div>
  );
}

export default App;
