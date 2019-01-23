import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';
import {PulseLoader} from 'react-spinners';

import Title from './components/title';
import Section, {section} from './components/section';
import PanelTop from '../panelTop';
import Metadata from './components/metadata';
import Actions from './components/actions';
import Description from './components/description';

const panelTop = css`
    justify-content: space-between;
`;

class Detail extends React.Component {
    downloadFile = (e) => {
        const {downloadFile, item, logDownloadFromDetail} = this.props;

        downloadFile();
        logDownloadFromDetail(item.key);
    };

    addNotification = (key, text) => (e) => {
        const {addNotification, item, logCopyFromDetail} = this.props;

        addNotification(key, text);
        logCopyFromDetail(item.key);
    };

    filterUp = o => (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {item, filterUp, logFilterFromDetail} = this.props;
        filterUp(o);
        logFilterFromDetail(item.key);
    };

    render() {
        const {
            item, cssClass, descLoading, model, Title, children, BrowseRelatedLinks,
            Metadata, Description, Actions,
        } = this.props;

        return (
            <div css={cssClass}>
                <PanelTop css={panelTop}>
                    <Title item={item} />
                    <Actions
                        downloadFile={this.downloadFile}
                        filterUp={this.filterUp(item.name)}
                        model={model}
                        item={item}
                    />
                </PanelTop>
                {item && (
                    <React.Fragment>
                        <Section>
                            <Metadata
                                item={item}
                                addNotification={this.addNotification}
                                model={model}
                            />
                        </Section>
                        {BrowseRelatedLinks && <BrowseRelatedLinks item={item} css={section} />}
                        {Description && (
                            <Section>
                                {descLoading && <PulseLoader size={6} />}
                                {!descLoading && <Description item={item} />}
                            </Section>
                        )}
                        {children && <Section>{children}</Section>}
                    </React.Fragment>
)}
            </div>
        );
    }
}

const noop = () => {
};
const dummy = () => null;

Detail.defaultProps = {
    item: null,
    cssClass: '',
    descLoading: false,
    filterUp: noop,
    downloadFile: noop,
    addNotification: noop,
    model: '',
    logFilterFromDetail: noop,
    logDownloadFromDetail: noop,
    logCopyFromDetail: noop,
    Title,
    children: null,
    BrowseRelatedLinks: dummy,
    Metadata,
    Description,
    Actions,
};

Detail.propTypes = {
    item: PropTypes.shape({
        key: PropTypes.string,
        descriptionStorageAddress: PropTypes.string,
        description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({}),
        ]),
    }),
    descLoading: PropTypes.bool,
    cssClass: PropTypes.shape(),
    downloadFile: PropTypes.func,
    filterUp: PropTypes.func,
    addNotification: PropTypes.func,
    model: PropTypes.string,
    logFilterFromDetail: PropTypes.func,
    logDownloadFromDetail: PropTypes.func,
    logCopyFromDetail: PropTypes.func,
    Title: PropTypes.func,
    children: PropTypes.node,
    BrowseRelatedLinks: PropTypes.func,
    Metadata: PropTypes.func,
    Description: PropTypes.func,
    Actions: PropTypes.func,
};

export default Detail;
