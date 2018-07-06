import React from 'react'
import { Button } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class Design extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }

    }


    render() {
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep } = this.props;
        // const { password, update } = this.state;
        // const { content } = this.props.data;
        // const { btnPrimaryColor } = defaultProps.btnStyles;
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }];
        const columns = [{
            Header: 'Dage efter forfald',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Emne',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Detaljer',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: 'Kraves godkendelse', // Custom header components!
            accessor: 'friend.age'
        }]


        return (
            <div className="left-panel-block ">
                <div className="left-panel-container-header">
                    Design dit rykkerflow
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    Nar en faktura i dit regnskabsprogram fremover er forfalden mere end 5 dage igangsetter vi
                    et rykkerflow. Din virksomher er afsender pa kommunikationen og dine kunder kan ikke se at du bruger Likvido.
                </div>

                <ReactTable
                    data={data}
                    columns={columns}
                />

                <div className="container-button">
                    <Button onChange={() => {}} title={'Næste (inkasso indstillinger) →'} styles={{ backgroundColor: btnPrimaryColor, width: 260 }} />
                    <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} />
                </div>
            </div>
        )
    }
}
