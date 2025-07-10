
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import TaskBoard from './task/TaskBoard';

function App() {

  return (
   <div>
      <Header/>
      <div className='flex flex-col justify-center items-center'>
        <HeroSection/>
        <TaskBoard/>
      </div>
      <Footer/>
   </div>
  )
}

export default App
