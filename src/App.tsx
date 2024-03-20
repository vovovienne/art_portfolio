import LoadingProvider from './LoadingProvider';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import Content from './components/Content';

const App = () => {
    return (
        <LoadingProvider>
            <Content></Content>
        </LoadingProvider>
    );
}

export default App