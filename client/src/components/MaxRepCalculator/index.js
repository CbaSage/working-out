import React, {Component} from 'react';

class MaxRepCalculator extends Component {
    calculateOneRepMax(weight, reps) {
        return weight * reps * .0333 + weight;
    }

    render() {
        const weight = 205;
        const reps = 5;

        return (
            <div>
                <h1>Calc</h1>
                <div>
                    Weight: {weight}
                </div>
                <div>
                    Reps: {reps}
                </div>
                <div>
                    1 Rep Max: {this.calculateOneRepMax(weight, reps)}
                </div>
            </div>
        );
    }
}


export default MaxRepCalculator;