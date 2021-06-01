import React from 'react';
import BackButton from '../BackButton';
import t from '../../utils/lang-utils';
import ToggleButton from '../ToggleButton';

const NavContent = (props: {
    refObj: React.RefObject<HTMLDivElement>;
    backLink: string;
    navTitle: string;
    leftNavOpen: boolean;
    navContent: string;
    isPublicSiteOpen: boolean;
    isMaxMobileResolution: boolean;
    isDarkMode: boolean;
    setDarkMode: Function;
}) => {
    return (
        <aside
            ref={props.refObj}
            className={props.leftNavOpen ? 'asideDisplay' : ''}
        >
            {props.backLink && (
                <BackButton
                    title={t('NAV_BACK_BTN_TEXT')}
                    backLink={props.backLink}
                />
            )}
            <nav>
                <h2 className="heading">{props.navTitle}</h2>
                <div
                    className={`navWrapper ${
                        props.isPublicSiteOpen ? 'withHeaderFooter' : ''
                    }`}
                    dangerouslySetInnerHTML={{
                        __html: props.navContent,
                    }}
                />
            </nav>
            {!props.isMaxMobileResolution && (
                <div className="toggleContainer">
                    <ToggleButton
                        setDarkMode={props.setDarkMode}
                        isDarkMode={props.isDarkMode}
                    />
                </div>
            )}
        </aside>
    );
};

export default NavContent;
