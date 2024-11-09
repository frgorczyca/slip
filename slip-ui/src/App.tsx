import { QueryClientProvider } from 'react-query';

import './App.css';
import { AppContainer, Title } from './components/core';
import { MorningSurvey } from './components/forms';
import { queryClient } from './services/queries/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Title />
        <MorningSurvey />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
