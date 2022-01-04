function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

var r = 0;
var h = 0;
var t = 0;

function d2() {
    document.getElementById('div').disabled = false;
    document.getElementById('mul').disabled = false;
    if (t == 1) {
        document.getElementById('fl').disabled = true;
    } else {
        document.getElementById('fl').disabled = false;
    }

    document.getElementById('sub').disabled = false;
    document.getElementById('sum').disabled = false;
    document.getElementById('open').disabled = true;
    document.getElementById('cl').disabled = false;
    document.getElementById('rs').disabled = false;
    if (h !== r) {
        document.getElementById('rs').disabled = true;
    }
    if (h < r) {
        document.getElementById('close').disabled = false;
    }
}

function d6() {
    r++;
    document.getElementById('div').disabled = true;
    document.getElementById('mul').disabled = true;
    document.getElementById('sub').disabled = true;
    document.getElementById('sum').disabled = true;
    document.getElementById('rs').disabled = true;
    document.getElementById('open').disabled = false;
    document.getElementById('close').disabled = false;
}

function d7() {
    h++;
    if (r > h) {
        document.getElementById('rs').disabled = true;
    }
    if (r === h) {
        document.getElementById('rs').disabled = false;
        document.getElementById('close').disabled = true;
    }

}

function history() {
    document.getElementById('history').innerHTML = "<button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px' onclick='setCookie(\"history\",\"\");history()'>clear history</button><button style='width: 219px' onclick='document.getElementById(\"input\").value=this.innerHTML.substr(this.innerHTML.indexOf(\"=\")+1,this.innerHTML.length)'>" + getCookie('history').split("UR").join("</button><button class='df' style='width: 219px' onclick='document.getElementById(\"input\").value=this.innerHTML.substr(this.innerHTML.indexOf(\"=\")+1,this.innerHTML.length)'>") + "<button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'> </button><button style='width: 219px;background-color: #fcfcfc;border: #f0f0f0 solid 1px'>";
    document.getElementsByClassName('df')[document.getElementsByClassName('df').length - 1].style.backgroundColor = '#dcdcdc'
    document.getElementsByClassName('df')[document.getElementsByClassName('df').length - 1].innerHTML = "<a href='index.html' style='color: #8f8f8f;text-decoration: none' href='https://github.com/ha8540268/professional_calculator'>see repository</a>";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function d5() {
    document.getElementById('div').disabled = true;
    document.getElementById('mul').disabled = true;
    t = 0;
    document.getElementById('cl').disabled = false;
    document.getElementById('sub').disabled = true;
    document.getElementById('sum').disabled = true;
    document.getElementById('rs').disabled = true;
    document.getElementById('close').disabled = true;
    document.getElementById('open').disabled = false
}


function d1() {
    document.getElementById('sub').disabled = true;
    document.getElementById('open').disabled = false;
    document.getElementById('sum').disabled = true;
}

function d3() {
    document.getElementById('div').disabled = true;
    document.getElementById('mul').disabled = true;

    document.getElementById('cl').disabled = true;
    document.getElementById('rs').disabled = true;

}

function d4() {
    var d = document.getElementById('input').value.substr(document.getElementById('input').value.length - 2, document.getElementById('input').value.length - 3);
    if (document.getElementById('input').value.length == 1 || d == '*' || d == '+' || d == '-' || d == '/') {
        document.getElementById('div').disabled = true;
        document.getElementById('mul').disabled = true;

        document.getElementById('cl').disabled = true;
        document.getElementById('rs').disabled = true;
    }
}
