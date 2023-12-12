import LoadingProvider from './LoadingProvider';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <LoadingProvider>
            <HomePage></HomePage>
        </LoadingProvider>
    );
}

export default App