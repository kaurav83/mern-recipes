import { Suspense } from 'react';
import { AppRouter } from './providers/router/AppRouter';
import { Loader } from './shared/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
