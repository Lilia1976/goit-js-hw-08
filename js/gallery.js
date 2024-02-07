/*Завдання — Галерея зображень
Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення в 
модальному вікні 
1.Розмітка галереї. Логічно почати з того, що створити те, куди ми будемо додавати елементи 
галереї. Для цього в HTML коді додай тег контейнера галереї — невпорядкований список із класом 
gallery.
2.Масив зображень. Для створення елементів галереї тобі знадобляться дані. Додай цей масив 
об’єктів у свій JavaScript файл. Кожний об’єкт являє собою один елемент галереї.
preview — посилання на маленьку версію зображення для картки галереї
original — посилання на велику версію зображення для модального вікна
description — текстовий опис зображення, для атрибута alt малого зображення та підпису великого 
зображення в модалці.
3.Розмітка елементів галереї.У тебе є контейнер, в який можна додати елементи галереї, і дані, 
за якими їх можна створити. Саме час наповнювати галерею розміткою.
Використовуй масив об’єктів images і цей HTML шаблон елемента галереї та створи в JavaScript 
коді розмітку елементів, після чого додай усю розмітку всередину ul.gallery. Не додавай інші 
HTML теги, крім тих, що містяться в цьому шаблоні
4.Стилі. Додай стилізацію галереї згідно макету.
5.Делегування.Саме час додати функціонал прослуховування кліка по елементах галереї та 
отримання посилання на велике зображення при кліку. Для цього використовуй прийом делегування 
на ul.gallery. Поки що при кліку на елемент галереї виводь у консоль посилання на велике 
зображення.
6.Підключення бібліотеки. Бібліотека basicLightbox представляє повністю функціональне 
модальне вікно, яке відмінно підходить під нашу задачу. Використовуй CDN сервіс jsdelivr і 
додай в HTML файл посилання на мініфіковані (.min) JS та CSS файли бібліотеки.
7.Модальне вікно. Доповни свій код так, щоб при кліку по елементу галереї відкривалось модальне 
вікно підключеної бібліотеки. Для того щоб дізнатися, як ініціалізувати модальне вікно у 
своєму коді і як його використовувати, ознайомся з документацією і прикладами.
8.Велике зображення. Використовуй свій код отримання посилання на велике зображення, щоб 
замінити значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй 
готову розмітку модального вікна із зображенням із прикладів бібліотеки basicLightbox.*/
const images = [
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
        },
    ];


const galleryContainer = document.querySelector(".gallery");
    
    function galleryCard({preview, original, description}) {
        const image = `<li class="gallery-item">
                        <a class="gallery-link" href="${original}">
                        <img
                        class="gallery-image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                        </a>
                    </li>`
        return image;
    }
    let image = "";
    for (let img of images){
        image += galleryCard(img);
    }

    galleryContainer.innerHTML = image;
    let modalWindow;
    galleryContainer.addEventListener('click', (event) => {

        if (event.target.classList.contains('gallery-image')) {
            event.preventDefault();

            const dataSource = event.target.getAttribute('data-source');
            const description = event.target.getAttribute('alt');
            modalWindow = basicLightbox.create(`<div class="modalWindow">
                                        <img
                                        src="${dataSource}"
                                        alt="${description}"
                                        width="1112"
                                        height="640"
                                        onclick="modalWindow.close()"
                                        >
                                    </div>`);
            modalWindow.show();
            
        };
    })
    document.addEventListener('keyup', ({code}) => {
        if (code === 'Escape') {
          modalWindow.close()
        }
      })