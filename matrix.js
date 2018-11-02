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
