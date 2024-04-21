import Header from './components/UI/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="h-screen w-screen bg-red-100">
      <div className="flex h-full flex-col">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
