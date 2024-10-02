import './App.css'
import ironMan from './assets/ironman.jpg';

function App() {

  return (
    <div className="flex flex-col md:flex-row">
      <img src={ironMan} className="hidden md:flex w-96 h-screen object-cover fixed top-0 bottom-0 left-0"></img>
      <form action='/' className="flex flex-col md:pt-20 md:pl-48 md:w-2/5 p-5 md:ml-96">
        <h3 className="text-4xl text-gray-900 font-bold special-font mb-16">Sign in to dribble</h3>

        <div className="flex flex-col md:gap-y-10">
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex flex-col">
              <h3 className="text-[#0d0c22] my-2 font-bold">Name</h3>
              <input type="text" className="p-4 rounded-xl border-2 border-gray-200 special-font w-full" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0d0c22] my-2 font-bold">Username</h3>
              <input type="text" className="p-4 rounded-xl border-2 border-gray-200 special-font w-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#0d0c22] my-2 font-bold">Email</h3>
            <input type="text" className="p-4 rounded-xl border-2 border-gray-200 special-font w-auto flex flex-grow" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#0d0c22] my-2 font-bold">Password</h3>
            <input type="password" className="p-4 rounded-xl border-2 border-gray-200 w-auto flex flex-grow" />
          </div>
        </div>

        <div className="flex flex-row mt-10 gap-x-5 w-full">
          <input type="checkbox" className='accent-[#0d0c22] bg-[#0d0c22] w-9 h-9'/>
          <h3 className="text-clip text-wrap">I agree with Dribbble's &nbsp;<a href="/" className="underline">term of service</a>, &nbsp;<a href="/" className="underline">Privacy policy</a> and default &nbsp; <a href="/" className="underline">Notification settings</a></h3>
        </div>
      
        <button className="w-full text-gray-50 font-bold cursor-pointer py-4 mt-5" style={{backgroundColor: '#0d0c22',borderRadius: '59px'}} type='submit'>Create account</button>
      </form>
    </div>
  )
}

export default App
