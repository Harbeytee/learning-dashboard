import Header from './components/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Notes from './components/Notes'
import Subjects from './components/Subjects'
import Lessons from './components/Lessons'

export default function Home() {
  return (
    <main className='h-full'>
      <Header />
      <div className='flex w-full h-full'>
        <SideMenu />
        <div className='w-full'>
          <Notes />

          <div className='flex  flex-col md:flex-row'>
            <Subjects />
            <Lessons />

          </div>

        </div>


      </div>
      
    </main>
  )
}
