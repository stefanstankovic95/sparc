import { useState, useEffect } from "react";
import loadingscreen from ".//loadingscreen.gif"

const LoadingScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 6000); // 6 sekunde, promenite ako hocete vise/manje.
  
      return () => clearTimeout(timer);
    }, []);
  
    return isLoading ? (
      <div className="loading-screen">
        <img src={loadingscreen} alt="Loading" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
      </div>
    ) : null;
  };
  
  export default LoadingScreen;