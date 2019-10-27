import React from "react";
import ChartJS from "chart.js";
import FadeIn from 'react-fade-in';

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            val: props.val
        };
    }

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new ChartJS(myChartRef, {
            type: 'pie',
            data: {
                labels: [this.props.title, "not"], // ['Sadness', 'Joy', 'Fear', 'Disgust', 'Anger'],
                datasets: [{
                    label: '# of Votes',
                    data: [this.props.val, 100 - this.props.val],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(0, 0, 0, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: this.props.title,
                    fontSize: 30
                },

                aspectRatio: 1


            }
        });
    }

    // getData = async (company) => {
    //     db.collection('companies')
    //         .doc(company)
    //         .collection('reviews')
    //         .onSnapshot((snap) => {
    //             console.log(snap.docs);
    //             snap.forEach((s) => {
    //                 console.log(s.get('emotion'))
    //             })
    //             //
    //         });
    // }

    render() {
        return (
            <div class="col-sm">
                <FadeIn>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </FadeIn>
            </div>
        )
    }
}

export default Chart;