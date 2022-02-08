import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Profile } from './components/Profile';

function App() {
  const allPages = new Map<string, JSX.Element>();
  allPages.set('home', Home());
  allPages.set('profile', Profile())
  const [current, setCurrent] = useState(Home());

  const changeBody = (el: JSX.Element, path: string) => {
    window.history.pushState(path, 'Nettside', `/${path}`);
    setCurrent(el);
  }

  useEffect(() => {
    let path = window.location.pathname.slice(1).toLowerCase();
    let el = allPages.get(path);
    if (el === undefined) {
      path = 'home';
      el = allPages.get(path)!;
    };
    changeBody(el, path)
  }, [])

  return (
    <div>
      <Header changer={changeBody} allPages={allPages}/>
      {current}
    </div>
  );
}


export default App;