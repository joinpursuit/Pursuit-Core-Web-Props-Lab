import React from 'react';

class RecentDonations extends React.Component {
    render() {
        return <ul class="col-4 list-unstyled recent-donations">
            <h3 class='my-4'>Recent Donations</h3>
            <li class="media my-2">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Janelly donated $ 50</h5>
                    Let's all give to this great cause!
          </div>
            </li>
            <li class="media my-2">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Xaiver donated $ 50</h5>
                    Let's all give to this great cause!
          </div>
            </li>
            <li class="media my-2">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Kamla donated $ 50</h5>
                    Let's all give to this great cause!
          </div>
            </li>
        </ul>
    }
}

export default RecentDonations;