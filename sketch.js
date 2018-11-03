let brain;

function setup(){
brain = new NeuralNetwork(3,3,1);

let m = new Matrix(2,3);
m.randomize();
console.table(m.matrix);

let n = new Matrix(3,2);
n.randomize();
console.table(n.matrix);

let d = m.multiply(n);
console.table(d.matrix);


}

function draw(){


}
