function setup() {

    let nn = new NeuralNetwork(2, 2, 1);
    let input = [1, 0];
    let output = nn.feedfwd(input);
    console.log(output);
}

function draw() {


}