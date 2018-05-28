let menu = {
     op1:'no nos queda de eso, por favor elige otro platillo',
     op2:'lo sentimos esa opcion no esta disponible, intentalo de nuevo',
     op3:'disculpa no nos quedan',
     op4:'de esos si nos quedan, por favor pulsa el boton "pedir" ',
};

function opcion1() {
    alert(menu.op1);  
}
function opcion2() {
    alert(menu.op2);
}
function opcion3() {
    alert(menu.op3);
}
function opcion4() {
    alert(menu.op4);
}
function submit() {
    alert('espera un momento mientras preparamos tu pedido');
}

/* intento 2
const userOrder =  prompt('¿Qué deseas ordenar?');

let menu = {
    op1: 'ceviche',
    op2: 'tacos al pastor',
    op3: 'empanada chilena',
    op4: 'hamburguesa',
};

function selection() {
    if (userOrder === 'ceviche') {
        console.log(menu.op1[0] === 'ceviche');  
    } else if (userOrder === 'tacos al pastor') {
        console.log(menu.op2[1] === 'ceviche');
    } else if (userOrder === 'empanada chilena') {
        console.log(menu.op3[3] === 'ceviche');
    }  else if (userOrder === 'hamburguesa') {
        console.log(menu.op4[4] === 'ceviche');
    }
}
*/

/* intento 1
const userOrder =  prompt('¿Qué deseas ordenar?');
function menu() {
    if (userOrder === 'ceviche') {
       console.log('no nos queda de eso, por favor elige otro platillo');
    } else if (userOrder === 'tacos al pastor') {
       console.log('lo sentimos esa opcion no esta disponible, intentalo de nuevo');
    } else if (userOrder === 'empanada chilena') {
       console.log('disculpa no nos quedan');
    }  else if (userOrder === 'hamburguesa') {
       console.log('espera un momento mientras preparamos tu pedido');
    }
}

menu: ('ceviche', 'tacos al pastor', 'empanada chilena','hamburguesa');
*/