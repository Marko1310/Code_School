import Main from '../components/Main';
import Header from '../components/UI/Header';

function Application() {
  return (
    <div className="h-screen w-screen bg-red-100">
      <div className="flex h-full flex-col">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Application;
