import { GlobalContextProvider } from "./GlobalContext";
import { CardList } from "./CardList";
import { SearchBar } from "./SearchBar";

function App() {
  return (
    <GlobalContextProvider>
      <SearchBar />
      <CardList />
    </GlobalContextProvider>
  );
}

export default App;