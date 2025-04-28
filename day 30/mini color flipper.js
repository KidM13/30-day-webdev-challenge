document.addEventListener('DOMContentLoaded' , () =>{
    const colordisplay = document.getElementById('color');
    const flipbutton = document.getElementById('flip-btn');
    flipbutton.addEventListener('click' , () =>{
        const randomcolor = getRandomColor();
        document.body.style.backgroundColor = randomcolor;
        colordisplay.textContent = randomcolor;
    });
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random() *16)];
      }  
      return color;
    }
});