
 let button = document.querySelector(".btn");

 

 button.addEventListener("click", flickr);

 async function flickr () {


    
let text= document.querySelector("#search").value;
let per= document.querySelector("#per").value;

let data= await getImgs(text, per);
updateUi(data);
 }


 
    
    async function getImgs(text,per) {
        
        
    const basUrl= 'https://www.flickr.com/services/rest';
    const apikey= '255c273dd506b7bbb260b683f11910b0';
    let method= 'flickr.photos.search';
    let url = `${basUrl}?api_key=${apikey}&method=${method}&text=${text}r&
    per_page=${per}&page=1&format=json&nojsoncallback=1`
    
    let response = await fetch(url);
    let data = await response.json();
     return data.photos;
    
    }
    
    
    function updateUi(data){
  document.querySelector("#photos").innerHTML= "";
    data.photo.forEach(img => {
    let el = document.createElement("img");
    el.setAttribute("src", imgUrl (img,"q"));
    document.querySelector("#photos").appendChild(el);




  

 






    


    
    });
    
    


    const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
    
      }
    
    
    
    function imgUrl (img, size){
    
    
    
    return `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_${size}.jpg`

    
    }

  
