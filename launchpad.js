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
        document.getElementById('hello_tag').textContent = "hi"
        x = document.getElementsByClassName('gm-style')
        x2 = x[0]
        console.log(x2)
        colorM(note,104);
        colorM(note+1,104);
        colorM(note+2,104);
    }

    if ( note == 65){
        document.getElementById('hello_tag').textContent = "hi"
        colorM(note,124);
        colorM(note+1,124);
        colorM(note+2,124);
    }
}

function noteOff(note){
    console.log(`note:${note} // off`);

    if ( note == 64){
        document.getElementById('hello_tag').textContent = "bye"
        console.log(zoom);
        zoom = 10
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if ( note == 65){
        document.getElementById('hello_tag').textContent = "bye"
        console.log(zoom);
        zoom = 20
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2);
    }

}

function colorM(key,clr){
    device && device.send([0x90,key,clr]);
}