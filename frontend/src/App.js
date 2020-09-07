import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deviceMobile, deviceWeb } from './actions'
import {
  ViewMain,
  ViewLogin,
  ViewWol,
  ViewBlogList,
  ViewBlog,
  Error
} from './pages'
import { Header, Footer } from './components'

import './styles/Global.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    handleResize()
  })

  const handleResize = () => {
    if (window.innerWidth <= 960) {
      dispatch(deviceMobile())
    } else {
      dispatch(deviceWeb())
    }
  }

  window.addEventListener('resize', handleResize)
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={ViewMain} />
        <Route exact path='/login' component={ViewLogin} />
        <Route exact path='/wol' component={ViewWol} />
        <Route exact path='/blog' component={ViewBlogList} />
        <Route exact path='/blog/:filename' component={ViewBlog} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
