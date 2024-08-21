// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationBar from "./components/navbar/navbar";
// import Home from './components/Home/home'; // Ensure this path is correct

// // import { SignUp } from './components/signup/signup';
// // // import Login from './components/Login';
// // import { Signin } from './components/signin/signin';
// // import LoginPage from './components/login_page/login';
// // import ForgotPasswordPage from './login_page/forgotPassword';
// // import SignupPage from './components/login_page/SignupPage';
// // import HomePage from './components/Home/home';

// // const App = () => {
  
// //   return (
// //     <>
// //     {/* <Home/> */}
// //       {/* <NavigationBar /> */}
// //       {/* <Login/> */}
// //       <SignUp/> 
// //       {/* <Signin/> */}
// //      {/* <Home/> */}
// //      {/* <LoginPage/> */}
// //      {/* <LoginPage/> */}
// //      {/* <ForgotPasswordPage/> */}
// // {/* <SignupPage/> */}
// // <HomePage/>
// //     {/* <Router>
// //       <Routes>
// //         <Route path="/" element={<LoginPage />} />
// //         <Route path="/signup" element={<SignupPage />} />
// //         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
// //         <
// //       </Routes>
// //     </Router> */}
// //       </>

      

// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './components/login_page/login';
// import SignupPage from './components/login_page/SignupPage';
// import ForgotPasswordPage from './components/login_page/forgotPassword';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LoginPage2 from './components/Login2/login.js';
 import ForgotPasswordPage from './components/login_page/forgotPassword';
// import SignupPage from './components/Login2/SignupPage2.js';
 import HomePage from './components/Home/WebPage.js';
import SportsRouter from './Sports/SportsRouter/index1';
import Sports from './Sports/Mainpage.js'
 import Recommend from './components/Recommended/Recommend.js';
 import PagesRouter from './components/PagesRouter/index.js';
 import FeedbackAndSocial from './components/Feedback/feedback';
import BlogHome from './components/HomePage/Homepage.js';
import BlogPost from './components/BlogPost/Blogpost.js';
import NewBlogForm from './components/NewBlogForm/NewBlogForm.js';
import LoginPage2 from './components/Login2/login2.js';
import SignupPage2 from './components/Login2/SignupPage.js';





const App = () => {
  return (
    <Router>
      {/* <NavigationBar /> */}
      <Routes>
         <Route path="/" element={<HomePage/>} /> 
        <Route path="/signup" element={<SignupPage2 />} />
        {/* <Route path="/signin" element={<LoginPage />} /> */}
        <Route path='/login' element={<LoginPage2/>} />
         <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
        <Route path="/about" element={<FeedbackAndSocial />}/> 

         {/* <Sports/> */}
   
     <Route path = '/sports' element={<Sports/>} />
    <Route path = '/sport/:id' element={<SportsRouter/>}/>
    <Route path ='/travel' element= {<Recommend/>}/>
       <Route path = '/page/:id' element={<PagesRouter/>}/>
       <Route path="/user/:userId" element={<BlogHome />} />
          <Route path="/user/:userId/blog/:blogId" element={<BlogPost />} />
          <Route path="/user/:userId/new-blog" element={<NewBlogForm />} />;
          <Route path="blog posts" element={<BlogHome/>} />;
 

  </Routes>

    </Router>
  );
}
export default App;