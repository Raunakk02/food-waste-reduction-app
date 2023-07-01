import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase_utils";
import SignupCard from "../components/auth/Signup";
import { Navigate } from "react-router";

function HomePage() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
      // <Navigate to={'signup'} />
      <div>
        <header>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Tips &amp; Tricks</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
        
        <section className="hero">
          <div className="hero-content">
            <h1>Reduce Food Waste, Save the Planet</h1>
            <p>Discover easy and practical ways to reduce food waste in your kitchen</p>
            <a href="#" className="btn">Get Started</a>
          </div>
        </section>
        
        <section className="features">
          <div className="feature">
            <img src="https://picsum.photos/40/40" alt="Icon 1" />
            <h2>Recipe Suggestions</h2>
            <p>Explore delicious recipes that use ingredients you already have to minimize waste.</p>
          </div>
          
          <div className="feature">
            <img src="https://picsum.photos/40/40" alt="Icon 2" />
            <h2>Tips &amp; Tricks</h2>
            <p>Learn useful tips and tricks to extend the shelf life of your groceries and avoid waste.</p>
          </div>
          
          <div className="feature">
            <img src="https://picsum.photos/40/40" alt="Icon 3" />
            <h2>Community</h2>
            <p>Connect with like-minded individuals who are passionate about reducing food waste.</p>
          </div>
        </section>
        
        <footer>
          <p>&copy; 2023 Food Waste Reduction App. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default HomePage;
