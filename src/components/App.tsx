import Background from "./Background.tsx";
import Header from "./Header.tsx";
import Container from "./Container.tsx";
import Footer from "./Footer.tsx";
import {useEffect, useState} from "react";

function App() {
  const [jobItems, setJobItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`);
      const data = await response.json();
      setJobItems(data.jobItems);
    }

    fetchData();
  }, [searchText]);

  return(
      <>
        <Background />
        <Header searchText={searchText} setSearchText={setSearchText} />
        <Container jobItems={jobItems} />
        <Footer />
      </>
  )
}

export default App;
