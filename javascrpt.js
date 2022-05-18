let textarea = document.querySelector('#textarea');


textarea.addEventListener('input', function(){
    let characters = document.querySelector('.characters');
    let words = document.querySelector('.words');
    let text = this.value;
    text = text.trim();
    let char = text.length;
    characters.textContent=char;


    let wrd = text.split(" ");

    let cleanList = wrd.filter(function(elm){
        return elm != "";
    });

    let getCleanListWord = cleanList.length;
    words.textContent= getCleanListWord;

})


    let container_BGColor_items = document.querySelectorAll('.container_BGColor_items');
    let body = document.querySelector('body');



        container_BGColor_items.forEach(element => {
            element.addEventListener('click', function(e){

                let getClass = e.currentTarget.classList;

                if(getClass.contains('color1')){
                    document.querySelector('body').style.cssText=`
                    background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
                    `;
                        // this.style.cssText=`
                        // border: 6px solid #ffffff;
                        // `;
                }else if(getClass.contains('color2')){
                    document.querySelector('body').style.cssText=`
                    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
                    `;
                        // this.style.cssText=`
                        // border: 6px solid #ffffff;
                        // `;
                }else if(getClass.contains('color3')){
                    document.querySelector('body').style.cssText=`
                    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
                    `;
                        // this.style.cssText=`
                        // border: 6px solid #ffffff;
                        // `;
                }else if(getClass.contains('color4')){
                    document.querySelector('body').style.cssText=`
                    background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);

                    `;
                        // this.style.cssText=`
                        // border: 6px solid #ffffff;
                        // `;
                }
            })
        });









let text_align_items = document.querySelectorAll('.text_align_items');


        text_align_items.forEach(element => {
            element.addEventListener('click', function(e){

                let getClass = e.currentTarget.classList;

                if(getClass.contains('text_align_wrapper_left')){
                    document.querySelector('textarea').style.cssText=`
                    text-align: left;
                    `;
                    document.querySelector('.text_align_items_status').textContent='Left';

                }else if(getClass.contains('text_align_wrapper_center')){
                    document.querySelector('textarea').style.cssText=`
                    text-align: center;
                    `;
                    document.querySelector('.text_align_items_status').textContent='Center';

                }else if(getClass.contains('text_align_wrapper_right')){
                    document.querySelector('textarea').style.cssText=`
                    text-align: right;
                    `;
                    document.querySelector('.text_align_items_status').textContent='Right';

                }else if(getClass.contains('text_align_wrapper_justify')){
                    document.querySelector('textarea').style.cssText=`
                    text-align: justify;
                    `;
                    document.querySelector('.text_align_items_status').textContent='Justify';

                }
            })
        });