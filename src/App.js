import { deepPurple} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignUpPage from './pages/SignUpPage';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SignUpPage />
      </ThemeProvider>
    </div>
  );
}
export default App;
