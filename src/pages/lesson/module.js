import React from 'react';

import { TransitionState } from 'gatsby-plugin-transition-link';

import Layout from '../../components/layout';
import Lesson from '../../components/lesson';
import SEO from '../../components/seo';

const LessonPage = ({ location }) => (
    <TransitionState>
        {({ transitionStatus }) => (
            <div>
                <Layout>
                    <div className="where">{location}</div>
                    <SEO title="Lessons" />
                    <Lesson transitionStatus={transitionStatus} />;
                </Layout>
            </div>
        )}
    </TransitionState>
);

export default LessonPage;
