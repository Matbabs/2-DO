import './App.css';
import Card from './components/Card/Card';
import Medias from './components/Medias/Medias';
import API from './components/API/API';
import Clock from './components/Clock/Clock';
import Weather from './components/Weather/Weather';
import Google from './components/Google/Google';
import { useEffect, useState } from 'react';

function App() {

  const [viewport, setViewport] = useState(true)

  useEffect(() => {
    if(!viewport)
      setViewport(true)
  }, [viewport])

  const cards = [
    {
      title: "medias",
      component: <Medias/>,
      position: {x: 25, y: 25}
    },
    {
      title: "api list",
      component: <API/>,
      position: {x: 25, y: 350}
    },
    {
      title: "clock",
      component: <Clock/>,
      position: {x: 350, y: 25}
    },
    {
      title: "weather Paris",
      component: <Weather city="Paris" state="Ile-de-france" country="France"/>,
      position: {x: 675, y: 25}
    },
    {
      title: "weather Rennes",
      component: <Weather city="Rennes" state="Brittany" country="France"/>,
      position: {x: 1000, y: 25}
    },
    {
      title: "weather Biarritz",
      component: <Weather city="Biarritz" state="Nouvelle-Aquitaine" country="France"/>,
      position: {x: 1325, y: 25}
    },
    {
      title: "service Google",
      component: <Google/>,
      position: {x: 675, y: 350}
    }
  ]

  function lightMode() {
    const root =  document.documentElement
    const style = getComputedStyle(root)

    const light = style.getPropertyValue('--light')
    root.style.setProperty('--light', style.getPropertyValue('--dark'))
    root.style.setProperty('--dark', light)

    const primary = style.getPropertyValue('--primary')
    root.style.setProperty('--primary', style.getPropertyValue('--primary-dark'))
    root.style.setProperty('--primary-dark', primary)

    const secondary = style.getPropertyValue('--secondary')
    root.style.setProperty('--secondary', style.getPropertyValue('--secondary-dark'))
    root.style.setProperty('--secondary-dark', secondary)
  }

  function resetViewport() {
    setViewport(false)
  }

  return (
    <div className="container">
      <div className="navbar">
        <span className="material-icons" onClick={lightMode}>light_mode</span>
        <span className="material-icons" onClick={resetViewport}>view_in_ar</span>
      </div>
      {viewport && cards.map((card, id) => <Card cardData={card} key={id}/>)}
      <div className="title">
        2-DO
      </div>
    </div>
      
  );
}

export default App;
