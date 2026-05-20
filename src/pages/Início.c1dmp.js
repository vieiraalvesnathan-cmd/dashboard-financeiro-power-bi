import wixLocation from 'wix-location';
import { getCalendarEventsFromWixEvents } from 'backend/wixEventsCalendar';

const HTML_COMPONENT_ID = "#htmlCalendario";

$w.onReady(async function () {
    $w(HTML_COMPONENT_ID).onMessage((event) => {
        const message = event.data || {};

        if (message.type === "EVENT_CLICK" && message.event?.link) {
            wixLocation.to(message.event.link);
        }

        if (message.type === "CALENDAR_HEIGHT" && typeof message.height === "number") {
            try {
                $w(HTML_COMPONENT_ID).height = Math.max(message.height, 640);
            } catch (error) {
                console.log("Ajuste automático de altura não aplicado:", error);
            }
        }
    });

    await loadWixEventsCalendar();
});

async function loadWixEventsCalendar() {
    const events = await getCalendarEventsFromWixEvents();

    $w(HTML_COMPONENT_ID).postMessage({
        type: "LOAD_EVENTS",
        events
    });
}