let prevPic = document.querySelector('.previous-picture-btn');
let nextPic = document.querySelector('.next-picture-btn');

let pictureFrame = document.querySelector('.picture-frame');

let burgerPic1 = document.querySelector('.burger-image-1');
let burgerPic2 = document.querySelector('.burger-image-2');
let burgerPic3 = document.querySelector('.burger-image-3');
let burgerPic4 = document.querySelector('.burger-image-4');
let burgerPic5 = document.querySelector('.burger-image-5');




let actualPictureWatcher = 1;

nextPic.addEventListener('click', () =>{    

    let visiblePicture = document.querySelector('.visible-picture');

    visiblePicture.remove();    

    switch (actualPictureWatcher){

        case 1:
            
            pictureFrame.appendChild(burgerPic2);

            

            burgerPic2.classList.add('visible-picture');

            actualPictureWatcher = 2;

            document.querySelector('#picture1').removeAttribute('checked');

            document.querySelector('#picture2').setAttribute('checked','');

            break;
        
        case 2:
            
            pictureFrame.appendChild(burgerPic3);

            burgerPic3.classList.add('visible-picture');

            actualPictureWatcher = 3;

            document.querySelector('#picture2').removeAttribute('checked');

            document.querySelector('#picture3').setAttribute('checked','');

            break;

        case 3:
            
            pictureFrame.appendChild(burgerPic4);

            burgerPic4.classList.add('visible-picture');

            actualPictureWatcher = 4;

            document.querySelector('#picture3').removeAttribute('checked');

            document.querySelector('#picture4').setAttribute('checked','');

            break;

        case 4:
            
            pictureFrame.appendChild(burgerPic5);

            burgerPic5.classList.add('visible-picture');

            actualPictureWatcher = 5;

            document.querySelector('#picture4').removeAttribute('checked');

            document.querySelector('#picture5').setAttribute('checked','');

            break;

        case 5:
            
            pictureFrame.appendChild(burgerPic1);

            burgerPic1.classList.add('visible-picture');

            actualPictureWatcher = 1;

            document.querySelector('#picture5').removeAttribute('checked');

            document.querySelector('#picture1').setAttribute('checked','');

            break;
                
    }
    
})

prevPic.addEventListener('click', () =>{ 

    let visiblePicture = document.querySelector('.visible-picture');

    visiblePicture.remove();

    switch (actualPictureWatcher){

        case 1:

            pictureFrame.appendChild(burgerPic5);

            burgerPic5.classList.add('visible-picture');

            actualPictureWatcher = 5;

            document.querySelector('#picture1').removeAttribute('checked');

            document.querySelector('#picture5').setAttribute('checked','');

            break;
        
        case 2:

            pictureFrame.appendChild(burgerPic1);

            burgerPic1.classList.add('visible-picture');

            actualPictureWatcher = 1;

            document.querySelector('#picture2').removeAttribute('checked');

            document.querySelector('#picture1').setAttribute('checked','');

            break;

        case 3:
            
            pictureFrame.appendChild(burgerPic2);

            burgerPic2.classList.add('visible-picture');

            actualPictureWatcher = 2;

            document.querySelector('#picture3').removeAttribute('checked');

            document.querySelector('#picture2').setAttribute('checked','');

            break;

        case 4:
            
            pictureFrame.appendChild(burgerPic3);

            burgerPic3.classList.add('visible-picture');

            actualPictureWatcher = 3;

            document.querySelector('#picture4').removeAttribute('checked');

            document.querySelector('#picture3').setAttribute('checked','');

            break;

        case 5:
            
            pictureFrame.appendChild(burgerPic4);

            burgerPic4.classList.add('visible-picture');

            actualPictureWatcher = 4;

            document.querySelector('#picture5').removeAttribute('checked');

            document.querySelector('#picture4').setAttribute('checked','');

            break;
                
    }
    
})

let radioBtns = document.querySelectorAll("input[type='radio']");

radioBtns.forEach((radioBtn) =>{

    radioBtn.addEventListener('click', (ev)=>{

        if(radioBtn.id == 'picture1'){            

            let visiblePicture = document.querySelector('.visible-picture');

            visiblePicture.remove();

            pictureFrame.appendChild(burgerPic1);

            burgerPic1.classList.add('visible-picture');

            actualPictureWatcher = 1;            

        }
        else if(radioBtn.id == 'picture2'){            

            let visiblePicture = document.querySelector('.visible-picture');

            visiblePicture.remove();

            pictureFrame.appendChild(burgerPic2);

            burgerPic2.classList.add('visible-picture');

            actualPictureWatcher = 2;            

        }
        else if(radioBtn.id == 'picture3'){

            let visiblePicture = document.querySelector('.visible-picture');

            visiblePicture.remove();

            pictureFrame.appendChild(burgerPic3);

            burgerPic3.classList.add('visible-picture');

            actualPictureWatcher = 3;            

        }
        else if(radioBtn.id == 'picture4'){

            let visiblePicture = document.querySelector('.visible-picture');

            visiblePicture.remove();

            pictureFrame.appendChild(burgerPic4);

            burgerPic4.classList.add('visible-picture');

            actualPictureWatcher = 4;            

        }
        else if(radioBtn.id == 'picture5'){

            let visiblePicture = document.querySelector('.visible-picture');

            visiblePicture.remove();

            pictureFrame.appendChild(burgerPic5);

            burgerPic5.classList.add('visible-picture');

            actualPictureWatcher = 5;            

        }
    })
})

let visiblePicturePositions = document.querySelector('.visible-picture');   

let picFrameX = visiblePicturePositions.getBoundingClientRect().x;
let picFrameY = visiblePicturePositions.getBoundingClientRect().y;


