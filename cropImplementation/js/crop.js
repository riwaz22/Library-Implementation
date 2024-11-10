document.addEventListener("DOMContentLoaded",()=>{
    new jsCrop("#main , #upload",{
        extButton:{
            buttonText: '&#8492;',
            buttonTitle: "Blob",
            buttonCSS: "color:#C6E7FF;",
            callBack: (blb)=>{alert(blb)}

        }
    }
    )
})