import React from 'react'
import MiApi from './components/MiApi';

function App() {
  return (
      <body className="d-flex h-100 text-center text-bg-dark">
    
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Desafio Latam</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-1 active" aria-current="page" href="#">Home</a>
            <a className="nav-link fw-bold py-1 px-1" href="#">Features</a>
            <a className="nav-link fw-bold py-1 px-1" href="#">Contact</a>
          </nav>
        </div>
      </header>
    
      <main className="px-3">
        <h1>Breweries in Town</h1>
        <MiApi></MiApi>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
        </p>
      
      </main>
    
      <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer>
    </div>
    
    </body>
     
  );
}

export default App;
