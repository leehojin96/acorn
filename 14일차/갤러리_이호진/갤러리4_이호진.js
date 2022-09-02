

let imgNames = ["media/가위.png", "media/바위.png", "media/보.png"];


function play(obj) {
    
    let random = Math.floor(Math.random() * imgNames.length);

    //alert(random);

    let rsp = document.getElementById("rsp");
    rsp.style.backgroundImage = "url('" + imgNames[random] + "')";
    rsp.style.backgroundSize = "cover";
    rsp.style.backgroundPosition = "center";


    result = obj.innerHTML;

    let resultdiv = document.getElementById("result");



    switch (result) {
        case "가위":

            switch (random) {
                case 0:
                    resultdiv.innerHTML = "무승부";
                    break;
                case 1:
                    resultdiv.innerHTML = "패배";
                    break;
                case 2:
                    resultdiv.innerHTML = "승리";
                    break;

            }
            break;
        case "바위":

            switch (random) {
                case 0:
                    resultdiv.innerHTML = "승리";
                    break;
                case 1:
                    resultdiv.innerHTML = "무승부";
                    break;
                case 2:
                    resultdiv.innerHTML = "패배";
                    break;
            }
            break;
        case "보":

            switch (random) {
                case 0:
                    resultdiv.innerHTML = "패배";
                    break;
                case 1:
                    resultdiv.innerHTML = "승리";
                    break;
                case 2:
                    resultdiv.innerHTML = "무승부";
                    break;
            }
            break;


    }


}
