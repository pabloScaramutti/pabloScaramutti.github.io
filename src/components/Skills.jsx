import htmlIcon from '../assets/icons/html-5.svg'
import cssIcon from '../assets/icons/css3.svg'
import jsIcon from '../assets/icons/javascript.svg'
import reactIcon from '../assets/icons/react.svg'
import vueIcon from '../assets/icons/vuejs.svg'
import nextIcon from '../assets/icons/next-js.svg'

import illustratorIcon from '../assets/icons/adobe-illustrator.svg'
import lightroomIcon from '../assets/icons/adobe-lightroom.svg'
import photoshopIcon from '../assets/icons/adobe-photoshop.svg'
import afterEffectsIcon from '../assets/icons/adobe-after-effects.svg'
import premiereIcon from '../assets/icons/adobe-premiere-pro.svg'

const tools = [
  {
    name: 'HTML',
    icon: htmlIcon
  },
  {
    name: 'CSS',
    icon: cssIcon
  },
  {
    name: 'Javascript',
    icon: jsIcon
  },
  {
    name: 'React',
    icon: reactIcon
  },
  {
    name: 'NextJs',
    icon: nextIcon
  },
  {
    name: 'Vuejs',
    icon: vueIcon
  },
]

const visual = [
  {
    name: 'Illustrator',
    icon: illustratorIcon
  },
  {
    name: 'Lightroom',
    icon: lightroomIcon
  },
  {
    name: 'AfterEffects',
    icon: afterEffectsIcon
  },
  {
    name: 'PremirePro',
    icon: premiereIcon
  },
  {
    name: 'Photoshop',
    icon: photoshopIcon
  }
]

export default function Skills() {
  return (
    <div >
      <h1>Toolbox</h1>
      <div className='skills-container'>
        <div>
          <h2>IT</h2>
          <ul>
            {tools.map(e =>
              <li key={e.name}>
                <img src={e.icon} className="icon" />
                <p>{e.name}</p>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Visual</h2>
          <ul>
            {visual.map(e =>
              <li key={e.name}>
                <img src={e.icon} className="icon"></img>
                <p>{e.name}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
