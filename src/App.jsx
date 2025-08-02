import "./App.css";
import MovieList from "./cine/MovieList";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />

      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      
    </>
  );
}

export default App;
