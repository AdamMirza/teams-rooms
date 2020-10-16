import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/roomsTab/index.html")
@PreventIframe("/roomsTab/config.html")
@PreventIframe("/roomsTab/remove.html")
export class RoomsTab {
}
