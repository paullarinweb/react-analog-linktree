import './App.css'
import person from './assets/nature.jpg'
// social icons
import github from './assets/icons/github.svg'
import youtube from './assets/icons/youtube.svg'
import twitter from './assets/icons/twitter.svg'
import behance from './assets/icons/behance.svg'
import codepen from './assets/icons/codepen.svg'
import instagram from './assets/icons/instagram.svg'
import linkedin from './assets/icons/linkedin.svg'

function App() {
  return (
    <>
  <Main>
    <Profile/>
    <DownloadLink name={"Basic HTML Template"} source={'./src/assets/pages/basic.txt'} styles={"link border-gray-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}/>
    <Link name={"Portfolio"} source={"https://paullarinweb.github.io/portfolio/"} styles={"link bg-white text-black"}/>
    <SocialLinks>
    <Social source={"https://www.instagram.com/paullarinwebdev"} svg={instagram} title={"instagram"}/>
    <Social source={"https://twitter.com/paullarindev"} svg={twitter} title={"twitter"}/>
    <Social source={"https://codepen.io/paullarinweb"} svg={codepen} title={"codepen"}/>
    <Social source={"https://www.youtube.com/@paullarindev"} svg={behance} title={"behance"}/>
    <Social source={"https://github.com/paullarinweb"} svg={github} title={"github"}/>
    <Social source={"https://www.youtube.com/@paullarindev"} svg={youtube} title={"youtube"}/>
    <Social source={"https://www.linkedin.com/in/paul-larin-680aa6269"} svg={linkedin} title={"linkedin"}/>

    </SocialLinks>
  <p className='opacity-30'>Icons from <a  target="_blank" href="https://icons8.com">Icons8</a></p> 

  </Main>
    </>
  )
}

function Main({children}){
  return (
    <div className='main'>
    {children}
    </div>
  )
}

function SocialLinks({children}){
  return (
    <div className='social-links'>
    {children}
    </div>
  )
}

function Profile(){
  return (
    <div className='profile'>
      <img className='profile-img' src={person} alt="Paul Larin" />
    <span className='profile-text font-sans text-2xl sm:text-3xl'>Paul Larin - Frontend Developer</span>
    </div>
  )
}

function Link({name, source, styles}){
  return (
    <>
    <a className={styles} href={source} target="_blank" rel="noopener noreferrer">{name}</a>
    </>
  )
}

function DownloadLink({name, source, styles}){
  return (
    <>
    <a className={styles} href={source} target="_blank" rel="noopener noreferrer" download>{name}</a>
    </>
  )
}

function Social({svg, title, source, styles}){
  return (
    <>
    <a className={styles} href={source} target="_blank" rel="noopener noreferrer">
      <img width={32} height={32} src={svg} alt={title} />
    </a>
    </>
  )
}

export default App
