import {useLayoutEffect, useRef} from 'react';

export default function useSyncScrollers(scrolledContainerRef1, scrolledContainerRef2) {
    const isSyncingHeaderScroll = useRef(false);
    const isSyncingSchedulerScroll = useRef(false);

    useLayoutEffect(() => {
        scrolledContainerRef1.current.onscroll = function () {
            if (!isSyncingHeaderScroll.current) {
                isSyncingSchedulerScroll.current = true;
                scrolledContainerRef2.current.scrollLeft = this.scrollLeft;
            }
            isSyncingHeaderScroll.current = false;
        };

        scrolledContainerRef2.current.onscroll = function () {
            if (!isSyncingSchedulerScroll.current) {
                isSyncingHeaderScroll.current = true;
                scrolledContainerRef1.current.scrollLeft = this.scrollLeft;
            }
            isSyncingSchedulerScroll.current = false;
        };
    }, [scrolledContainerRef1 && scrolledContainerRef2]);
}

// todo: in future we could create the refs inside this hook's body and return them,
// todo: for more dynamic solution we could use a collection of refs with some hash map
