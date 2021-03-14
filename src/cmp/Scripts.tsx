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

            <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
                    integrity="sha512-fHXRw0CXruAoINU11+hgqYvY/PcsOWzmj0QmcSOtjlJcqITbPyypc8cYpidjPurWpCnlB8VKfRwx6PIpASCUkQ=="
                    crossOrigin="anonymous"/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"
                    integrity="sha512-9CWGXFSJ+/X0LWzSRCZFsOPhSfm6jbnL+Mpqo0o8Ke2SYr8rCTqb4/wGm+9n13HtDE1NQpAEOrMecDZw4FXQGg=="
                    crossOrigin="anonymous"/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-countto/1.2.0/jquery.countTo.min.js"
                    integrity="sha512-RXuJVZbGztKGYMNgmWU6oOHbUwYu+NnzovhT4lyW1kfmEfRK6CD1xL8U+0xACFqSkC3cxMugaaNEP8wWmvl4Jw=="
                    crossOrigin="anonymous"/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.2/jquery.stellar.min.js"
                    integrity="sha512-PNXCBnFH9wShbV+mYnrfo0Gf3iSREgBWmYAoMIfc+Z83vVq3Nu4yxBk6j+BZ40ZIhtW3WlTQdBvW3AYLAnlgpA=="
                    crossOrigin="anonymous"/>

            <script src="js/jquery.magnific-popup.min.js"/>
            <script src="js/magnific-popup-options.js"/>

            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"/>
            <script src="js/google_map.js"/>

            <script src="js/main.js"/>

        </div>
    );
};
