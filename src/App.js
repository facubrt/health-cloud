import Dashboard from './containers/Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './styles/global'
import { lightTheme, darkTheme } from './styles/theme'
import { useThemeContext } from './context/themeContext'

const App = () => {

  const {theme} = useThemeContext()
  return (
    <Router>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Dashboard/>
    </ThemeProvider>
    </Router>
  )
}

export default App