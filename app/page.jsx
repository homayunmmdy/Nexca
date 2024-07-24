import { Companies, FAQ, Hero, EmailList, Services } from './components/sections'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Companies />
      <FAQ />
      <EmailList />
    </div>
  )
}

export default Home