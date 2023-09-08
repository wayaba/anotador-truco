import { useState } from "react";
import "./App.css";

function App() {
  const [weCount, setWeCount] = useState(0);
  const [theyCount, setTheyCount] = useState(0);

  const handleAddPoint = (isWe = false) => {
    isWe ? setWeCount((prev) => prev + 1) : setTheyCount((prev) => prev + 1);
  };

  const handleRemovePoint = (isWe = false) => {
    isWe ? setWeCount((prev) => prev - 1) : setTheyCount((prev) => prev - 1);
  };

  const drawPoints = () => {
    const cantGroups = Array.from({ length: Math.floor(theyCount/5)+1 }, (_, index) => index + 1);
    return (
      <div>
        {cantGroups.map((group) => (
          <div key={`group-${group}`} className="grupo ">
              {drawImg(group,theyCount )}
          </div>
        ))}
      </div>
    );    
  };
  const drawImg = (group, total) =>{
    const partialCount = total - (group-1) * 5
    const currentLength = partialCount > 5 ? 5:partialCount
    const images = Array.from({ length: currentLength }, (_, index) => index + 1);
    
    return(
      images.map((image)=>{
          return (<img key={`img-${group}-${image}`} className={`fosforo${image}`} src="./img/fosforo.png" />)
        })
      
    )
  }
  return (
    <main className="grid h-screen place-content-center bg-slate-900 font-press-start">
      <div className="flex flex-row text-white gap-4">
        <section>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Nosotros
          </span>
          <p>{weCount}</p>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => handleAddPoint(true)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Agregar
            </button>
            <button
              type="button"
              onClick={() => handleRemovePoint(true)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Sacar
            </button>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Ellos
          </span>
          <div className="flex flex-col bg-gray-500 min-h-[70vh] rounded-lg">
            <p>{theyCount}</p>
            <div className="flex-col flex justify-center items-center">
              {drawPoints()}
            </div>
          </div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => handleAddPoint()}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Agregar
            </button>
            <button
              type="button"
              onClick={() => handleRemovePoint()}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Sacar
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
