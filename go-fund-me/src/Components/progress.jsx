import React from 'react';

const Progress = (props) => {
    let percentage = Math.floor(props.percentage);

    let barStyle = {
        height: '20px',
        width: '350px',
        'borderRadius': '25px',
        border: '2px solid gold'
    }

    if (props.percentage < 100) {
        let percent = props.percentage.toString();
       
        let fillerStyle = {
            height: 'inherit',
            width: `${percent}%`,
            'backgroundColor': 'lightgreen',
            'borderRadius': '25px'
        }
        return (
            <div><h4>Raised <div id='amount'>${props.raised}</div> of <div id='total'>$1000</div> </h4>
                <div className='progress-bar' style={barStyle}>
                    <div className='filler' style={fillerStyle}>
                        <div className='current-progress'>{percentage}%</div>
                    </div>
                </div>
            </div>
        )
    } else {
        let percent = '100';

        let fillerStyle = {
            height: 'inherit',
            width: `${percent}%`,
            'backgroundColor': 'green',
            'borderRadius': '25px'
        }
        
        return (
            <div><h4>Raised <div id='amount'>${props.raised}</div> of <div id='total'>$1000</div> </h4>
                <div className='progress-bar' style={barStyle}>
                    <div className='filler' style={fillerStyle}>
                        <div className='current-progress'>{percentage}%</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Progress;