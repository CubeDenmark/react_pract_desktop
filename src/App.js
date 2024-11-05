import Fortest from "./components/Fortest";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Fortest />
      <Counter />
      <Footer />
    </section>
  );
}


// import test from './components/test';

// function App() {
//   return (
//     test()
//   );
// }

// export default App;
