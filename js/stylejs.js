const sections = document.querySelectorAll('section');
for( const sect of sections)
{
    sect.style.border = '2px solid blue';
    sect.style.marginBottom= '10px';
    sect.style.borderRadius = '15px';
    sect.style.paddingLeft = '7px';
    sect.style.backgroundColor = 'gray';
}

// const placeContainer  = document.getElementById('place-container');
// placeContainer.style.backgroundColor = 'yellow';

const placeContainer = document.getElementById('place-container');
placeContainer.classList.add('text-center');

// const li = document.createElement('li');
// li.innerText = 'Brand new place';
// placeContainer.append(li);