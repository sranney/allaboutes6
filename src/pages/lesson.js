import React from 'react';

import { TransitionState } from 'gatsby-plugin-transition-link';

import Layout from '../components/layout';
import Lesson from '../components/lesson';
import SEO from '../components/seo';

const LessonPage = ({ location }) => {
    return (
        <TransitionState>
            {({ transitionStatus }) => (
                <div>
                    <Layout>
                        <SEO title="Lessons" />
                        <Lesson
                            transitionStatus={transitionStatus}
                            location={location}
                        />
                        ;
                    </Layout>
                </div>
            )}
        </TransitionState>
    );
};

export default LessonPage;
