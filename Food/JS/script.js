$(document).ready(function(){
    $(".food-slider").slick({
        autoplay: true,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn"
    });
});



// let btn = document.querySelectorAll('.btn-primary')
//         for(let i = 0; i<btn.length; i++){
//             btn[i].addEventListener('mouseout', out)
//             function out(){
//                 btn[i].setAttribute('style','border-radius:4px;')
//             }
//             for(let i = 0; i<btn.length; i++){
//                 btn[i].addEventListener('mouseover', over)
//                 function over(){
//                     btn[i].setAttribute('style','border-radius:40px;')
//                 }
//             }
//         }

        // let secondary = document.querySelectorAll('.btn-secondary')
        // for(let i = 0; i<secondary.length; i++){
        //     secondary[i].addEventListener('mouseout', out1)
        //     function out1(){
        //         secondary[i].setAttribute('style','border-radius:4px;')
        //     }
        //     for(let i = 0; i<secondary.length; i++){
        //         secondary[i].addEventListener('mouseover', over1)
        //         function over1(){
        //             secondary[i].setAttribute('style','border-radius:40px;')
        //         }
        //     }
        // }


            let call = document.getElementsByClassName('call')
                for(let i = 0; i<call.length; i++){
                call[i].addEventListener('click',function(){
                    alert('Call')
                    
                })
            }
                    let rasberry = document.getElementById('rasberry')
                        rasberry.addEventListener('mouseout', function(){
                            rasberry.setAttribute('style','hieght: 1rem; width:100%')
                        })
                        rasberry.addEventListener('mouseover', function(){
                            rasberry.setAttribute('style','hieght: 2rem; width:100%')
                        })

                        let mailed = document.getElementsByClassName('mailed')
                            for(let i = 0; i<mailed.length; i++){
                                mailed[i].addEventListener('click',mailclick)
                                function mailclick(){
                                    alert('Enter your Email')
                                }
                            }

                            let wrapper = document.querySelectorAll('post-wrapper')
                                for(let i = 0; i<wrapper.length; i++){
                                    wrapper[i].addEventListener('mouseout',clecheck)
                                    function clecheck(){
                                        wrapper[i].setAttribute('style','Height:10px;')
                                    }
                                    for(let i = 0; i<wrapper.length; i++){
                                        wrapper[i].addEventListener('mouseout',clecheck)
                                        function clecheck(){
                                            wrapper[i].setAttribute('style','Height:15px')
                                        }
                                    }
                                
                                }
                            
                                let content = document.querySelectorAll('.card-content h2')
                                    for(let i = 0; i<content.length; i++){
                                        content[i].addEventListener('mouseout',blogout)
                                            function blogout(){
                                                content[i].setAttribute('style','color:black;')
                                            }
                                            for(let i = 0; i<content.length; i++){
                                                content[i].addEventListener('mouseover',blogover)
                                                    function blogover(){
                                                        content[i].setAttribute('style','color:blue;')
                                                    }        
                                            }        
                                    }

                                    let contentp = document.querySelectorAll('.card-content p')
                                    for(let i = 0; i<contentp.length; i++){
                                        contentp[i].addEventListener('mouseout',blogout)
                                            function blogout(){
                                                contentp[i].setAttribute('style','color:black;')
                                            }
                                            for(let i = 0; i<contentp.length; i++){
                                                contentp[i].addEventListener('mouseover',blogover)
                                                    function blogover(){
                                                        contentp[i].setAttribute('style','color:brown;')
                                                    }        
                                            }        
                                    }

        const flex = document.querySelectorAll('.flex-1 h2')
        for(let firstchild of flex){
            firstchild.addEventListener('mouseover', changeh2color)
            

            function changeh2color(){
                firstchild.setAttribute('style','color:gray;')
            }
        }

        const icons = document.querySelectorAll('.icons a img')
            for(const icon of icons){
                icon.addEventListener('mouseover',function(){
                    icon.setAttribute('style','transition:3000ms; transform: rotate(1turn);')
                })
                icon.addEventListener('mouseleave',function(){
                    icon.setAttribute('style','transition:0ms; transform: rotate(0turn);')
                })
            }
