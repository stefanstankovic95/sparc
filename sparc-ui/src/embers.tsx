const Embers = () => {
    const divs = [];
    
    for (let n = 1; n <= 60; n++) {
      const width = Math.floor(Math.random() * 12);
      const height = Math.floor(Math.random() * 12);
      const speed = Math.floor(Math.random() * 4) + 2;
      const delay = Math.floor(Math.random() * 10);
      
      const divStyle: React.CSSProperties = {
        background: `radial-gradient(#f9a322, #e94d02)`,
        boxShadow: `0 0 7px #e83b00`,
        position: `absolute`,
        overflow: 'hidden',
        width: `${width}px`,
        height: `${height}px`,
        transform: `
          translate3d(${Math.random() * 100}vw, 100vh, 0) 
          rotate(${Math.random() * 180}deg) 
          rotateY(${Math.random() * 180}deg) 
          rotateX(${Math.random() * 180}deg)`,
      };
      if (width > 10 || height > 10) {
        divStyle.borderRadius = `40%`;
        divStyle.filter = `blur(2px)`;
      }
  
      divs.push(
        <div
          key={n}
          style={{
            ...divStyle,
            animation: `anim 20s infinite linear ${Math.random() * 1}s, anim-${n} ${speed}s infinite ease-in ${delay}s`,
          }}
        />
      );
    }
  
    return <div>{divs}</div>;
  };

export default Embers;