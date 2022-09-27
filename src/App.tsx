import React, { createContext, useContext, useState } from 'react';
import { getDayOfYear } from 'date-fns';
import './App.css';
import { GithubAppState } from './types';
import { Context } from '.';


export default function Component() {
  const [user, setUser] = useState();

  const _ = useContext<GithubAppState>(Context);
  
  const now = new Date();
  getDayOfYear(now);


  return (
    <div className="App">
      Hello World!!
    </div>
  )
}



