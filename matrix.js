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


Matrix.prototype.randomize = function () {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }
}


Matrix.prototype.multiply = function (n) {
    if (n instanceof Matrix) { // Dot Product
        if (this.cols !== n.rows) {
            console.log("Cols must match rows!!");
            return undefined;
        } else {
            let result = new Matrix(this.rows, n.cols);
            let a = this;
            let b = n;

            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < b.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        // Dot product of vals in col
                        sum += a.matrix[i][k] * b.matrix[k][j];
                    }
                    result.matrix[i][j] = sum;
                }
            }
            return result;
        }
    } else {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] *= n;
            }
        }
    }
}



Matrix.prototype.add = function (n) {
    if (n instanceof Matrix) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] += n.matrix[i][j];
            }
        }
    } else {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] += n;
            }
        }
    }
}