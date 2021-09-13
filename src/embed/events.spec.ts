import {
    init,
    AuthType,
    EmbedEvent,
    SearchEmbed,
    PinboardEmbed,
    HostEvent,
} from '../index';
import {
    EVENT_WAIT_TIME,
    executeAfterWait,
    getDocumentBody,
    getIFrameEl,
    getRootEl,
    getRootEl2,
    postMessageToParent,
} from '../test/test-utils';
import { PinboardViewConfig } from './pinboard';

const thoughtSpotHost = 'tshost';
const defaultViewConfig = {
    frameParams: {
        width: 1280,
        height: 720,
    },
};
const PAYLOAD = 'Sample payload';

beforeAll(() => {
    init({
        thoughtSpotHost,
        authType: AuthType.None,
    });
});

describe('test communication between host app and ThoughtSpot', () => {
    beforeEach(() => {
        document.body.innerHTML = getDocumentBody();
    });

    test('should capture event from ThoughtSpot app', (done) => {
        const searchEmbed = new SearchEmbed(getRootEl(), defaultViewConfig);
        searchEmbed
            .on(EmbedEvent.CustomAction, (data) => {
                expect(data.data).toBe(PAYLOAD);
                done();
            })
            .render();

        executeAfterWait(() => {
            const iframe = getIFrameEl();
            postMessageToParent(iframe.contentWindow, {
                type: EmbedEvent.CustomAction,
                data: PAYLOAD,
            });
        });
    });

    // TODO: enable test once we are actually able to load stuff in the iframe
    xtest('should trigger iframe load event', async () => {
        const onLoadSpy = jest.fn();

        const searchEmbed = new SearchEmbed(getRootEl(), {});
        searchEmbed.on(EmbedEvent.Load, onLoadSpy).render();
        await executeAfterWait(() => {
            expect(onLoadSpy).toHaveBeenCalled();
        }, EVENT_WAIT_TIME);
    });

    test('should trigger event to ThoughtSpot app', (done) => {
        const searchEmbed = new SearchEmbed(getRootEl(), {});
        searchEmbed.render();
        setTimeout(() => {
            searchEmbed.trigger(HostEvent.Search, {
                body: PAYLOAD,
            });
        }, EVENT_WAIT_TIME);
        executeAfterWait(() => {
            const iframe = getIFrameEl();

            iframe.contentWindow.addEventListener('message', (e) => {
                expect(e.data.type).toBe(HostEvent.Search);
                expect(e.data.data.body).toBe(PAYLOAD);
                done();
            });
        });
    });

    test('should execute multiple event handlers if registered', async () => {
        const handlerOne = jest.fn();
        const handlerTwo = jest.fn();

        const searchEmbed = new SearchEmbed(getRootEl(), defaultViewConfig);
        searchEmbed
            .on(EmbedEvent.CustomAction, handlerOne)
            .on(EmbedEvent.CustomAction, handlerTwo)
            .render();

        await executeAfterWait(() => {
            const iframe = getIFrameEl();
            postMessageToParent(iframe.contentWindow, {
                type: EmbedEvent.CustomAction,
                data: PAYLOAD,
            });
        });

        await executeAfterWait(() => {
            expect(handlerOne).toHaveBeenCalled();
            expect(handlerTwo).toHaveBeenCalled();
        }, EVENT_WAIT_TIME);
    });

    test('should capture event from correct iframe', async () => {
        const spyOne = jest.fn();
        const embedOne = new SearchEmbed(getRootEl(), defaultViewConfig);
        embedOne.on(EmbedEvent.CustomAction, spyOne).render();

        const spyTwo = jest.fn();
        const embedTwo = new PinboardEmbed(getRootEl2(), {
            ...defaultViewConfig,
            pinboardId: 'eca215d4-0d2c-4a55-90e3-d81ef6848ae0',
        } as PinboardViewConfig);
        embedTwo.on(EmbedEvent.CustomAction, spyTwo).render();

        await executeAfterWait(() => {
            const iframeOne = getIFrameEl();
            postMessageToParent(iframeOne.contentWindow, {
                type: EmbedEvent.CustomAction,
                data: PAYLOAD,
            });
        });

        await executeAfterWait(() => {
            expect(spyOne).toHaveBeenCalled();
            expect(spyTwo).not.toHaveBeenCalled();
        }, EVENT_WAIT_TIME);
    });

    test('send getIframeCenter Event without eventPort', async () => {
        const pinboardEmbed = new PinboardEmbed(getRootEl(), {
            ...defaultViewConfig,
            fullHeight: true,
            pinboardId: 'eca215d4-0d2c-4a55-90e3-d81ef6848ae0',
        } as PinboardViewConfig);
        pinboardEmbed.render();
        const spy1 = jest.spyOn(global.console, 'log');

        await executeAfterWait(() => {
            const iframe = getIFrameEl();
            postMessageToParent(iframe.contentWindow, {
                type: EmbedEvent.EmbedIframeCenter,
                data: PAYLOAD,
            });
        });
        expect(spy1).toHaveBeenCalledWith('Event Port is not defined');
    });

    test('send getIframeCenter Event with eventPort', async () => {
        const pinboardEmbed = new PinboardEmbed(getRootEl(), {
            ...defaultViewConfig,
            fullHeight: true,
            pinboardId: 'eca215d4-0d2c-4a55-90e3-d81ef6848ae0',
        } as PinboardViewConfig);
        pinboardEmbed.render();
        const mockPort: any = {
            postMessage: jest.fn(),
        };
        const spy1 = jest.spyOn(mockPort, 'postMessage');
        await executeAfterWait(() => {
            const iframe = getIFrameEl();
            postMessageToParent(
                iframe.contentWindow,
                {
                    type: EmbedEvent.EmbedIframeCenter,
                    data: PAYLOAD,
                },
                mockPort,
            );
        });
        const heightObj = {
            data: {
                iframeCenter: 0,
                iframeHeight: 0,
                iframeScrolled: 0,
                iframeVisibleViewPort: 0,
                viewPortHeight: 768,
            },
            type: EmbedEvent.EmbedIframeCenter,
        };
        expect(spy1).toHaveBeenCalledWith(heightObj);
    });
});
