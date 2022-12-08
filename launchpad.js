console.log(navigator);
let device;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}
function failure() {
    console.log("Could not connect MIDI");
}

function updateDevices(event) {
    console.log(event);
}

function success(midiAccess) {
    midiAccess.addEventListener('statechange', updateDevices);
    let inputs = midiAccess.inputs;

        for (let output of midiAccess.outputs.values()) {
            device = output;

        }

    inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput);
    });
}

function handleInput(input) {

    let command   = input.data[0];
    let note      = input.data[1];
    let velocity  = input.data[2];
    let zoom      = input.data[3];


    if (velocity > 0) {
        noteOn(note);
    }

    if (velocity == 0) {
        noteOff(note);
    }
}

function noteOn(note) {
    console.log(`note:${note} // on`);

    if ( note == 64){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -1, -88, 0)"
        console.log(x4)
        colorM(note,104);
        colorM(note+1,104);
        colorM(note+2,104);
    }

    if ( note == 65){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -100, 55, 0)"
        console.log(x4)
        colorM(note,124);
        colorM(note+1,124);
        colorM(note+2,124);
    }

    if ( note == 66){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -10, 25, 0)"
        console.log(x4)
        colorM(note,95);
        colorM(note+1,95);
        colorM(note+30,95);
    }

    if ( note == 67){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, 5, 80, 0)"
        console.log(x4)
        colorM(note,77);
        colorM(note+29,77);
        colorM(note+30,77);
    }

    if ( note == 60){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -20, 12, 0)"
        console.log(x4)
        colorM(note,72);
        colorM(note+1,72);
        colorM(note+2,72);
    }

    if ( note == 61){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -5, -30, 0)"
        console.log(x4)
        colorM(note,116);
        colorM(note+1,116);
        colorM(note+2,116);
    }

    if ( note == 62){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -2, 95, 0)"
        console.log(x4)
        colorM(note,27);
        colorM(note+1,27);
        colorM(note+30,27);
    }

    if ( note == 63){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 3, 27, -65, 0)"
        console.log(x4)
        colorM(note,107);
        colorM(note+29,107);
        colorM(note+30,107);
    }

    if ( note == 56){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 1, 2, 10, 122, 0)"
        console.log(x4)
        colorM(note,56);
        colorM(note+1,56);
        colorM(note+2,56);
    }

    if ( note == 57){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 10, -10, -79, 0)"
        console.log(x4)
        colorM(note,89);
        colorM(note+1,89);
        colorM(note+2,89);
    }

    if ( note == 58){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, 1, 100, 0)"
        console.log(x4)
        colorM(note,91);
        colorM(note+1,91);
        colorM(note+30,91);
    }

    if ( note == 59){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, 37, 179, 0)"
        console.log(x4)
        colorM(note,7);
        colorM(note+29,7);
        colorM(note+30,7);
    }

    if ( note == 52){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, -18, 49, 0)"
        console.log(x4)
        colorM(note,81);
        colorM(note+1,81);
        colorM(note+2,81);
    }

    if ( note == 53){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 0, 0, 10, -88, 0)"
        console.log(x4)
        colorM(note,47);
        colorM(note+1,47);
        colorM(note+2,47);
    }

    if ( note == 54){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(1, 50, 0, 10, 108, 0)"
        console.log(x4)
        colorM(note,103);
        colorM(note+1,103);
        colorM(note+30,103);
    }

    if ( note == 55){
        document.getElementById('hello_tag').textContent = "on"
        x = document.querySelectorAll("div > div")
        // x2 = x.getElementById("myDIV").querySelectorAll(".example");
        // x = document.querySelectorAll('style')
        x2 = x[1].querySelectorAll("div > div")
        x3 = x2[1].querySelectorAll("div > div")
        x4 = x3[0].querySelectorAll("div > div")
        x4[54].style['transform'] = "matrix(20, 38, 3, 65, -72, 0)"
        console.log(x4)
        colorM(note,103);
        colorM(note+29,127);
        colorM(note+30,127);
    }
}

function noteOff(note){
    console.log(`note:${note} // off`);

    if ( note == 64){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 65){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 66){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+30,0);
    }

    if ( note == 67){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+29,0);
        colorM(note+30,0);
    }

    if ( note == 60){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 61){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 62){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+30,0);
    }

    if ( note == 63){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+29,0);
        colorM(note+30,0);
    }
    
    if ( note == 56){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 57){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 58){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+30,0);
    }

    if ( note == 59){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+29,0);
        colorM(note+30,0);
    }

    if ( note == 52){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 53){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 54){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+30,0);
    }

    if ( note == 55){
        document.getElementById('hello_tag').textContent = "off"
        colorM(note,0);
        colorM(note+29,0);
        colorM(note+30,0);
    }

}

function colorM(key,clr){
    device && device.send([0x90,key,clr]);
}