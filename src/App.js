import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

 const App = () => {
   return (
    <Router>
       <div>
         <Header />
         <main>
           <Switch>
             <Route exact path="/" component={AboutMe} />
             <Route path="/portfolio" component={Portfolio} />
             <Route path="/contact" component={Contact} />
             <Route path="/resume" component={Resume} />
           </Switch>
         </main>
        <Footer />
       </div>
     </Router>
   );
 };