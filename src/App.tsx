import { Stack } from '@mui/material';
import { Header } from '~comps/Header';
import { Main } from '~comps/Main';

function App() {

  return (
    <Stack direction={'column'} justifyContent={'space-between'} minHeight={'100vh'}>
      <Header />
      <Main />
      <Header />
    </Stack>
  )
}

export default App
