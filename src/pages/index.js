import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CardContainer from '../components/card-container';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <CardContainer />
        </Layout>
    );
};

export default IndexPage;
