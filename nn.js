//nn.js
// Make your own Neural Network - Tariq Rasheed
// Also making this a class (grr...) in order to follow along with Daniel Shiffman's Session 4, Neural Networks

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}


class NeuralNetwork {
    constructor(_input_nodes, _hidden_nodes, _output_nodes) {
        this.input_nodes = _input_nodes;
        this.hidden_nodes = _hidden_nodes;
        this.output_nodes = _output_nodes;

        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        this.bias_h = new Matrix(this.hidden_nodes, 1);
        this.bias_o = new Matrix(this.output_nodes, 1);
        this.bias_o.randomize();


    }

    feedfwd(input_arr) {
        // Generating Hidden Layer
        let inputs = Matrix.fromArray(input_arr);
        // Matrix Math...
        let hidden = Matrix.multiply(this.weights_ih, inputs);

        hidden.add(this.bias_h);
        // activation function
        hidden.map(sigmoid);

        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        return output.toArray();
    }


    train(inputs, targets) {
        let outputs = this.feedfwd(inputs);

        // convert from array to matrix
        outputs = Matrix.fromArray(outputs);
        targets = Matrix.fromArray(targets);

        // Calculate the error
        // ERR = TARGETS- Outputs
        let output_errors = Matrix.subtract(targets, outputs);

        let who_t = Matrix.transpose(this.weights_ho); // weights hidden to output transposed 
        let hidden_errors = Matrix.multiply(who_t, output_errors)
        outputs.print();
        targets.print();
        output_errors.print();

    }
}