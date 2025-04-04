import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import  WatchPage  from './pages/WatchPage'
import Footer from './components/footer';
import { Toaster } from "react-hot-toast";
import { useAuthStore } from './store/authUser';
import { useEffect } from 'react';
import SearchPage from './pages/SearchPage';
import HistoryPage from './pages/HistoryPage';
import NotFoundPage from './pages/404';
import ProfilePage from './pages/ProfilePage';



function App() {
  const {user,isAuthChecking,authCheck}= useAuthStore();

  useEffect(()=>{
    authCheck();
  },[authCheck]);

  if(isAuthChecking){
    return(
      <div className='h-screen'>
        <div className='flex justify-center items-center bg-black h-full'>
        <Loader className='animate-spin text-red-600 size-10' />

        </div>
      </div>
    )
  }

  

  return (
    <>
   
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={!user ? <LoginPage/> : <Navigate to={"/"}/>}/>
      <Route path="/signup" element={!user ? <SignupPage/> : <Navigate to={"/"}/>}/>
      <Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
      <Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
      <Route path='/history' element={user ? <HistoryPage /> : <Navigate to={"/login"} />} />
      <Route path='/profile' element={user ? <ProfilePage /> : <Navigate to={"/login"} />} />
      <Route path="/*" element={<NotFoundPage/>}/>

    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
