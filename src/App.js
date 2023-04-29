import React from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {

  
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
  }, []);
  return (
      <div
          className={`fade-in-section mx-auto ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
      >
          {props.children}
      </div>
  );
}
  return (

<><Landing/>
<Services FadeInSection={FadeInSection}/>
<Projects FadeInSection={FadeInSection}/>
<Contact/>
</>
          );
}

          export default App;
