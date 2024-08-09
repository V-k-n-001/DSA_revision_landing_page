import Body from "./Components/Body"
import Footer from "./Components/Footer";
import Header from "./Components/Header";


function App() {

  return (
    <>
      <div className="bg-white-50 px-6 mb-16   min-h-screen flex flex-col gap-16 md:px-5 md: md:justify-between lg:px-2" > 
      <Header/>
      <Body/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
