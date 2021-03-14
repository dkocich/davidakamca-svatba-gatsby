// @flow
import * as React from 'react';

import Helmet from 'react-helmet';

type Props = {};

export function Scripts(props: Props) {
    return (
        <div>
                <script src="js/jquery.min.js"/>

                <script src="js/jquery.easing.1.3.js"/>

                <script src="js/bootstrap.min.js"/>

                <script src="js/jquery.waypoints.min.js"/>

                <script src="js/owl.carousel.min.js"/>

                <script src="js/jquery.countTo.js"/>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.2/jquery.stellar.min.js"/>


                <script src="js/jquery.magnific-popup.min.js"/>
                <script src="js/magnific-popup-options.js"/>

                <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"/>
                <script src="js/google_map.js"/>

                <script src="js/main.js"/>

        </div>
    );
};
