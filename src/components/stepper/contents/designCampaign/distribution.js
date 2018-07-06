import React from 'react'
import { Button } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'
import {Pie} from 'react-chartjs-2';

export default class Distribution extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        
    }


    render() {
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep} = this.props;
        // const { password, update } = this.state;
        // const { content } = this.props.data;
        // const { btnPrimaryColor } = defaultProps.btnStyles;

        return (
            <div className="left-panel-block align-items-center">
            <a href="#">Ubetalte faktura du har tilgode</a>
                <div className="left-panel-container-header">
                    477.500 DKK
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    Likvido hjelper dig ned at inddrive denne geld hurtigt, effektivt og gratis.
                    Brug 2 minutter pa at designe et rykker & inkasso flow, og velg efterfolgende
                    hvad der skal ske med dine nuverende faktura.
                </div>

                <Pie data={{
	labels: [
		// 'Red',
		// 'Green',
		// 'Yellow'
	],
	datasets: [{
		data: [200, 40, 50,35],
		backgroundColor: [
            '#666ee8',
            '#50a7d7',
            '#464855',
            '#ff4961'
		],
		hoverBackgroundColor: [
		// '#666ee8',
		// '#50a7d7',
        // '#464855',
        // '#ff4961'
		]
	}]
}} />

                <div className="container-button">
                    <Button onChange={() =>  changeStep(true)} title={'Design inddrivelsesflow'} styles={{ backgroundColor: btnPrimaryColor,  width: 235 }} />
                </div>
            </div>
        )
    }
}
