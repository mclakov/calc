
function insert(num) {
    if (document.form.text.value === '0') {
        document.form.text.value = "";
        document.form.text.value = document.form.text.value + num;
    }
    else {
        document.form.text.value = document.form.text.value + num;
         };
    if (num == '+') {
        a = 1;
    }
    if (num == '-') {
        a = 1;
    }
    if (num == '*') {
        a = 1;
    }
    if (num == '/') {
        a = 1;
    }
//    почему не работает или ||?
};
function cl() {
    document.form.text.value = 0;
    a = 1;
};
function ce() {
    let str = document.form.text.value;
    let  s = str.indexOf(`-`); //проверка на знаки
    if (s === -1) {
        s = str.indexOf(`+`);
        if (s === -1) {
            s = str.indexOf(`/`);
            if (s === -1) {
                s = str.indexOf(`*`);
                if (s === -1) {
                    document.form.text.value = 0;
                    return;
                }
            }

        }
    }
    let x1 = +str.substring(0, str.length-s);
    let x2 = +str.substring(s+1, str.length-1);
    console.log(x1);
    console.log(x2);
    document.form.text.value = `${x1} ${str[s]}`;

};

function eq() {
    document.form.text.value = +eval(document.form.text.value).toFixed(2);
};
function switchSign() {
    document.form.text.value = -(document.form.text.value);
};
let a = 1;
function dot() {
         if (a >= 2) {
         return;
        }
    document.form.text.value = (document.form.text.value)+".";
    a += 1; // счетчик точек
    };
function sqrt() {
    document.form.text.value = Math.sqrt(document.form.text.value);
};
function fraction() {
    document.form.text.value = 1/(document.form.text.value);
};
function percent() {
    document.form.text.value = document.form.text.value + '%';
    let str = document.form.text.value;

   let  s = str.indexOf(`-`); //проверка на знаки
    if (s === -1) {
        s = str.indexOf(`+`);
        if (s === -1) {
            s = str.indexOf(`/`);
            if (s === -1) {
                s = str.indexOf(`*`);
                if (s === -1) {
                    document.form.text.value = 0;
                    return;
                }
            }

        }
    }
   let x1 = +str.substring(0, str.length-s-1);
   let x2 = +str.substring(s+1, str.length-1);
    console.log(x1);
    console.log(x2);
   let x3 = +(x1 / 100 * x2).toFixed(2)
    document.form.text.value = `${x1} ${str[s]} ${x3}`;

};
function backs() {
    let bac = document.form.text.value;

    if (bac.length == 1) {
        document.form.text.value = "0";
    }
    else {
        document.form.text.value = bac.substring(0, bac.length-1);
    }
};
let memorySave = 0;
function ms() {
    elemMem.innerHTML = "M";
    memorySave = document.form.text.value;
    let  s = memorySave.indexOf(`-`); //проверка на знаки
    if (s === -1) {
        s = memorySave.indexOf(`+`);
        if (s === -1) {
            s = memorySave.indexOf(`/`);
            if (s === -1) {
                s = memorySave.indexOf(`*`);
                if (s === -1) {
                    memorySave = +memorySave; //запись в память ms

                }

            }

        }
    }
    else {
        memorySave = +memorySave.substring(0, s); //запись в память ms без знака

    }

};
function mc() {
    elemMem.innerHTML = "<br>";
    memorySave = 0;
    console.log(memorySave);
};
function mr() {
    let str = document.form.text.value;
    let  s = str.indexOf(`-`); //проверка на знаки
    if (s === -1) {
        s = str.indexOf(`+`);
        if (s === -1) {
            s = str.indexOf(`/`);
            if (s === -1) {
                s = str.indexOf(`*`);
                if (s === -1) {
                    document.form.text.value = memorySave;
                    }
                else {
                    document.form.text.value = document.form.text.value + memorySave;
                }
            }

        }
    }

};
function mr() {
    document.form.text.value = +(document.form.text.value) + (memorySave);
};