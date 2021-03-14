// @flow
import * as React from 'react';
import {Helmet} from "react-helmet";

type Props = {};

export function MySharedHeader(props: Props) {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <title>Svatba - David a Kamča</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Svatební web Davida a Kamči"/>
            <meta name="keywords"
                  content="svatba, oslava, sňatek"/>
            <meta name="author" content="David"/>

            <meta property="og:title" content=""/>
            <meta property="og:image" content=""/>
            <meta property="og:url" content=""/>
            <meta property="og:site_name" content=""/>
            <meta property="og:description" content="Svatební web Davida a Kamči"/>
            <meta name="twitter:title" content=""/>
            <meta name="twitter:image" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:card" content=""/>

            <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700' rel='stylesheet'
                  type='text/css'/>
            <link href="https://fonts.googleapis.com/css?family=Sacramento" rel="stylesheet"/>

            <link rel="stylesheet" href="css/animate.css"/>

            <link rel="stylesheet" href="css/icomoon.css"/>

            <link rel="stylesheet" href="css/bootstrap.css"/>

            <link rel="stylesheet" href="css/magnific-popup.css"/>

            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/owl.theme.default.min.css"/>

            <link rel="stylesheet" href="css/style.css"/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
                    integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw=="
                    crossOrigin="anonymous"/>

        </Helmet>
    );
};
