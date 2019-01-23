import React from 'react';
import {css} from '@emotion/core';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';

const spacing = css`
    margin-right: 5px;
`;

export const BrowseRelatedLinksWrapper = ({children, ...rest}) => (
    <div {...rest}>
        <span css={spacing}>Browse related</span>
        {children}
    </div>
);

BrowseRelatedLinksWrapper.propTypes = {
    children: PropTypes.node,
};

BrowseRelatedLinksWrapper.defaultProps = {
    children: null,
};

const routeTypes = {
    algo: 'ALGORITHM',
    dataset: 'DATASET',
    model: 'MODEL',
    challenge: 'CHALLENGE',
};

export const BrowseRelatedLink = ({label, model, filter}) => (
    <Link to={{type: routeTypes[model], meta: {query: {search: filter}}}} css={spacing}>
        {label}
    </Link>
);

BrowseRelatedLink.propTypes = {
    label: PropTypes.string,
    model: PropTypes.string,
    filter: PropTypes.string,
};

BrowseRelatedLink.defaultProps = {
    label: '',
    model: '',
    filter: '',
};
