// Not a fan of the idea of using Class in javascript but trying it out here to see.

class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        // initialize all elements to 0
        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }


    transpose() {
        let result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }
        return result;

    }


    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }


    add(n) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }
    }


    static multiply(a, b) {
        if (a.cols !== b.rows) {
            console.log("Cols must match rows!!");
            return undefined;
        } else {
            let result = new Matrix(a.rows, b.cols);
            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < b.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        // Dot product of vals in col
                        sum += a.data[i][k] * b.data[k][j];
                    }
                    result.data[i][j] = sum;
                }
            }
            return result;
        }
    }


    multiply(n) {
        // scalar product
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] *= n;
            }
        }
    }

    map(func){
        // apply a function to every element of matrix
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = func(val,i,j);
            }
        }
    }

    print() {
        console.table(this.data);
    }
}