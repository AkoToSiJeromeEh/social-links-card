
import './App.css'
import { Card  } from './components'
import { avatarImg  } from './assets'
function App() {

  const linksData = [

    {
      name : 'gitHub',
      link : 'https://github.com/AkoToSiJeromeE'
    },
    {
      name : 'frontend mentor',
      link : 'https://www.frontendmentor.io/profile/AkoToSiJeromeEh'
    },
    {
      name : 'linkedin',
      link : 'https://www.linkedin.com/in/jerome-gabriel-v-gaspar-bab589278/'
    },
    {
      name : 'twitter',
      link : 'https://twitter.com/JEROMEG59174228'
    },
    {
      name : 'instagram',
      link : 'https://www.instagram.com/ysje202211/'
    },
  ]

  return (
    <>
     <div className='main-layout min-h-dvh bg-cover bg-center bg-no-repeat bg-off-black text-pretty font-inter-sans grid place-items-center ' >
        <main className='m-1 Mobile:m-0  '>
          <Card 
            name="Jerome Gabriel"
            address="Nueva Ecija, Philippines"
            quotes=" Frontend Developer and UI Designer.  😎 "
            socialLinks = {linksData}
            profileImg={avatarImg}
            
          />
        </main>
     </div>
    </>
  )
}

export default App
