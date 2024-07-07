function addMovie(){

    var movieName = document.getElementById('movieName').value;
    var imageUrl = document.getElementById('imageUrl').value;

    if(movieName.trim() === '' || imageUrl.trim() === ''){
        alert('Lütfen film adı ve resim URL\si girin.');
        return;
    }

    var movieList = document.getElementById('movieList');
    var listItem = document.createElement('div');
    listItem.className = 'd-flex justify-content-between align-items-center border-bottom mb-2';

    var movieContent = document.createElement('div');
    movieContent.className = 'd-flex align-items-center';

    var movieImage = document.createElement('img');
    movieImage.src = imageUrl;
    movieImage.alt = movieName;
    movieImage.className = 'movie-image me-2';

    var movieTitle = document.createElement('span');
    movieTitle.textContent = movieName;

    movieContent.appendChild(movieImage);
    movieContent.appendChild(movieTitle);

    var buttons = document.createElement('div');
    buttons.innerHTML = 
    `<button class= "btn btn-success me-2" 
    onclick="watchMovie(this)">İzlendi</button>
    <button class= "btn btn-danger me-2" onclick="removeMovie(this)">Kaldır</button>
    `;

    listItem.appendChild(movieContent);
    listItem.appendChild(buttons);

    movieList.appendChild(listItem);

    document.getElementById('movieName').value='';
    document.getElementById('imageUrl').value='';
}

function watchMovie(button){

    var listItem = button.parentNode.parentNode;

    var watchedList = document.getElementById('watchedList');

    var emotion = prompt('Filmle alakalı görüşlerinizi yazınız:');

    var movieContent = listItem.querySelector('.d-flex .align-items-center');

    var movieImage = movieContent.querySelector('.movie-image');


    var smallImage = movieImage.cloneNode();
    smallImage.className = 'movie-image me-2';

    listItem.innerHTML = '';
    listItem.appendChild(smallImage);
    listItem.innerHTML+= `<span>${emotion}</span>`;

    watchedList.appendChild(listItem);

    button.parentNode.innerHTML =  '<span class="text-success">İzlendi</span>'
}

function removeMovie(button){
    var listItem = button.parentNode.parentNode;
    listItem.remove();
}