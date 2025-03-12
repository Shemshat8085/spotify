import {API} from "./api.js";
import {UI} from "./ui.js";

const api = new API();

const ui =new UI();

document.addEventListener('DOMContentLoaded', async()=>{
    ui.renderLoader();

    const songs = await api.getPopuler();

    ui.renderCards(songs);
})

ui.form.addEventListener("submit", async (e) => {
    e.preventDefault();

    

    const query=e.target[0].value;

    if(!query.trim()){
        alert('Lutfen bir sharkici aratiniz!!')
        return;
    }

    ui.renderLoader();

    ui.title.innerText=`${query} icin sonuclar`

    
    const songs = await api.getSearchMusics(query);

    ui.renderCards(songs);
});

ui.list.addEventListener("click", (e) => {
        if(e.target.className=='play'){
          const card=e.target.parentElement.parentElement;

          const songData = card.dataset;

          
          ui.renderPlayer(songData);
        }
})


