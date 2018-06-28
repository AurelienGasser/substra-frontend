import React from 'react';
import PropTypes from 'prop-types';

const Twitter = ({className}) =>
    (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="30"
        viewBox="0 0 36 30"
        className={className}
    >
        <defs>
            <path id="a" d="M0 0h35.999v29.79H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
            </mask>
            <path
                fill="#1DBCC0"
                d="M2.307 24.722c1.217 1.345 3.94 3.354 9.342 3.354 1.248 0 2.592-.108 3.992-.322 11.797-1.802 15.23-12.924 15.043-15.604-.23-3.29.953-4.261 1.409-4.511.811-.582 1.342-1.19 1.69-1.717l-.646.153a1.107 1.107 0 1 1-1.295-1.458l.377-1.024c-1.287.51-2.32.637-3.023.637a4.51 4.51 0 0 1-.614-.038 1.095 1.095 0 0 1-.702-.393c-.205-.253-1.332-1.5-3.607-1.5-.702 0-1.456.118-2.243.354-3.546 1.062-4.167 4.499-4.273 5.527-.06.569-.535.996-1.106.996l-.234-.024C8.822 7.509 5.883 3.832 4.866 2.017 1.609 4.68 3.03 9.534 3.212 10.105c.045.14.06.288.044.441-.345 3.13 1.489 4.935 1.86 5.265.263.234.398.588.358.946-.3 2.693 2.572 4.293 3.82 4.855.392.177.649.569.656 1 .006.429-.229.812-.613 1-1.593.777-4.893 1.03-7.03 1.11m9.342 5.069C3.886 29.79.895 25.91.163 24.722a1.105 1.105 0 0 1 .926-1.682c2.084-.032 4.548-.2 6.198-.56-1.579-.977-3.692-2.819-3.542-5.608a7.942 7.942 0 0 1-2.207-6.378C1.19 9.318-.318 3.264 4.489.175a1.106 1.106 0 0 1 1.615.49c.35.81 2.438 4.834 10.045 6.667.316-1.733 1.438-5.138 5.388-6.321a9.581 9.581 0 0 1 2.736-.427c2.646 0 4.168 1.29 4.758 1.928.538.023 1.866-.042 3.739-1.075a1.131 1.131 0 0 1 1.443.337c.205.294.254.673.13 1.011l-.5 1.36.794-.189c.43-.102.894.071 1.152.428.208.288.266.662.153 1-.266.8-.997 2.34-2.91 3.69l-.113.07c-.099.085-.678.683-.525 2.887.218 3.12-3.352 15.41-16.494 17.417a28.353 28.353 0 0 1-4.25.343"
                mask="url(#b)"
            />
        </g>
    </svg>);

Twitter.defaultProps = {
    className: '',
};

Twitter.propTypes = {
    className: PropTypes.string,
};

export default Twitter;
