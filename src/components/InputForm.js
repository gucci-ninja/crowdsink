import React from "react";
import Button from 'react-bootstrap/Button';
import db from '../config';
import * as WebCrawler from '../WebCrawler.js';


class button extends React.Component {
    constructor(props) {
        super(props)
        this.DropdownClick = this.DropdownClick.bind(this);
        this.state = {
            company: props.company
        }
    }

    DropdownClick(Company) {
        console.log('Company Selected: ' + Company);

        // WHatever
        // write to database etc

        window.location.reload();

    }

    getData = async (company) => {
        db.collection('companies')
            .doc(company)
            .collection('reviews')
            .onSnapshot((snap) => {
                console.log(snap.docs); //querysnapshot of array
                snap.forEach((s) => {
                    console.log(s.get('sentiment') + ":" + s.get('text'))
                })
            });
    }

    addData = async (company, arr) => {
        for (let review of arr) {
            db.collection('companies')
                .doc(company)
                .collection('reviews')
                .add(
                    {
                        sentiment: review[0],
                        text: review[1]
                    }
                )
        }
        this.getData('JetBlue');
    }

    render() {
        return (
            <div class="col-sm">
                <Button block variant="dark" onClick={() => this.DropdownClick(this.props.company)} size="lg">
                    {this.props.company}
                </Button>
            </div>
        )
    }
}

export default button;