 //     document.body.onload=function () {
            //         nbr=6;
            //         p=0;
            //         container1=document.getElementById("container1");
            //         submit1=document.getElementById("submit1");
            //         submit2=document.getElementById("submit2");
            //         container1.style.width=(550*nbr)+"px";
            //         for(i=1;i<=nbr;i++){
            //             div=document.createElement("div");
            //             div.className="photo";
            //             div.style.backgroundImage="url(mm"+i+".png)";
            //             container1.appendChild(div);
            //         }
            //     }
            //    submit2.onclick=function(){
            //         if(p>=-nbr+1)
            //              p--;
            //              container1.style.transform="translate("+p*550+"px)";
            //              container1.style.transition = "all 0.5s ease";
            //         afficherMasquer();
            //     }
            //     submit1.onclick=function(){
            //         if(p<0)
            //              p++;
            //              container1.style.transform="translate("+p*550+"px)";
            //              container1.style.transition = "all 0.5s ease";
            //         afficherMasquer();
            //     }
            //     function afficherMasquer(){ 
            //         if(p==-nbr+1)
            //             submit2.style.visibility="hidden";
            //         else
            //             submit2.style.visibility="visible";
            //         if(p==0)
            //             submit1.style.visibility="hidden";
            //         else
            //             submit1.style.visibility="visible";
            //     }
            // document.getElementById("demo").onclick = function() {myFunction()};

            //     function myFunction() {
            //     document.getElementById("demo").style.height=125+"px";
            //     }
                // document.getElementById("buton_categorie").style.height=30+"px";
                // document.getElementById("buton_categorie").onclick=function() {heigth()} ;
                // heigth(){
                
                //     document.getElementById("buton_categorie").style.height=130+"px";
                // }
                const  second_carrousselle = document.querySelector ("#second_carrousselle")  ;
                    const  left_arrow = document.querySelector(".left-arrow");
                    const  right_arrow = document.querySelector(".right-arrow");
                    // right_arrow.style.visibility="hidden";
                        left_arrow.addEventListener('click',()=>{
                            second_carrousselle.style.marginLeft="-300px";
                            right_arrow.style.visibility="visible";
                                left_arrow.addEventListener('click',()=>{
                                     second_carrousselle.style.marginLeft="-600px";
                                    left_arrow.addEventListener('click',()=>{
                                        second_carrousselle.style.marginLeft="-900px";
                                        left_arrow.addEventListener('click',()=>{
                                            second_carrousselle.style.marginLeft="-1200px";
                                            // left_arrow.style.visibility="hidden";
                                             })
                        
                                    })
                                })
                        })
                        right_arrow.addEventListener('click',()=>{
                            
                            second_carrousselle.style.marginLeft="-900px";
                                right_arrow.addEventListener('click',()=>{
                                     second_carrousselle.style.marginLeft="-600px";
                                    right_arrow.addEventListener('click',()=>{
                                        second_carrousselle.style.marginLeft="-300px";
                                        right_arrow.addEventListener('click',()=>{
                                            second_carrousselle.style.marginLeft="0px";
                                //             left_arrow.style.visibility="hidden";
                                             })
                        
                                    })
                                })
                        })
    //                     .NameOfMenu img
    // {
    //     width: 170px;
    //     height: 60px;
    // }
    // .bloc_second_carrousselle
    // {
    //     width: 100vh;
    //     height: auto;
    //     border: 1px solid black;
    //     display: flex;
    //     flex-direction: column;
    //     position: relative;
    // }
    // #essai_responsive_text
    // {
    //     align-self: center;
    //     overflow: hidden;
    //     width: 300px;
    //     border: 0px;
    // }

    // #second_carrousselle
    // {
    //     width:1500px;
    //     height: 500px;
    //     margin: auto;
    //     display: flex;
    //     justify-content: center;
    //     border: 0px solid rgb(236, 224, 224);
    //     border-radius: 15px;
    //     box-shadow: 2px 2px 1px rgb(180, 176, 176);
    // }
    // .bloc_second_carrousselle p
    // {
    //     font-size: 25px;
    // }
    // .bloc_cours
    // {
    //     width: 300px;
    //     height: 430px;
    //     border: 1px solid rgb(221, 220, 220);
    //     border-radius: 15px;
    //     background-color: rgb(255, 255, 255);
    //     transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    // }
    // /* .cinquieme,.quatrieme
    // {
    //     display: none;
    // } */
    // .text_cours div
    // {
    //     font-size: 23px;
    // }
    // .text_cours a
    // {
    //     font-size: 24px;
    // }
    // .h1
    // {

    //     width: 100vh;
    //     /* border:1px solid black; */
    // }
    // .block_slide
    // {
    //     width: 100vh;
        
    // }
    // .left-arrow,.right-arrow
    // {
    //     display: block;
    //     font-size: 76px;
    //     cursor: pointer;
    //     opacity: 0.5;
    //     transition: all  0.2s ease-in-out;
    // }
    // .left-arrow
    // {
    //     position: absolute;
    //     top: 50%;
    //     right: 10%;
    // }
    // .left-arrow:hover,.right-arrow:hover
    // {
    //     font-size: 90px;
    //     opacity: 1;
    // }
    // .right-arrow
    // {
    //     position:absolute;
    //     top: 50%;
    //     left: 10%;
    // }