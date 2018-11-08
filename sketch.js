function setup() {
    let nn = new NeuralNetwork(4, 4, 3);
    let input = [1, 0, 0, 0];
    targets = [1, 0, 1];
    let output = nn.feedfwd(input);
    // console.log(output);
    nn.train(input, targets)
    noLoop();
}

function draw() {
}