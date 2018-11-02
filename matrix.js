// let m =new Matrix(2,2);


function Matrix(rows, cols) {

    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for (let i = 0; i < this.rows; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < this.cols; j++) {
            this.matrix[i][j] = 0;
        }
    }
}


Matrix.prototype.randomize = function() {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }
}


Matrix.prototype.multiply = function(n) {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.matrix[i][j] *= n;
        }
    }
}


Matrix.prototype.add = function(n) {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.matrix[i][j] += n;
        }
    }
}
