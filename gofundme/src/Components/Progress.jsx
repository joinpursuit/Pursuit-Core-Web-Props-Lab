import React from 'react';

class Progress extends React.Component {
    render() {
        return <div class='col-8'>
            <h2 class='mb-4'>Raised $ 300 of <span class='text-muted'>$ 5000</span></h2>
            <div class="progress">
                <div>25%</div>
            </div>
            <hr />
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" id="nameInput" placeholder="John Doe" />
                </div>
                <div class="form-group">
                    <label>Caption</label>
                    <input type="text" class="form-control" id="captionInput" placeholder="..." />
                </div>
                <div class="form-group">
                    <label>Amount to Donate</label>
                    <input type="range" class="custom-range" id="amountInput" min="5" max="1000" />
                    <blockquote class="blockquote text-right">
                        <p class="h3 mb-0">$ 5</p>
                        <button type="button" class="btn btn-lg btn-success my-4">Donate</button>
                    </blockquote>
                </div>
            </form>
        </div>
    }
}

export default Progress;