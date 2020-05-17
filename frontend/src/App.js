import React from 'react'
import './App.css'
import Chat from './components/Chat'
import Login from './components/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/chat' component={Chat} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
