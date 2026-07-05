import { siteConfig } from "./siteConfig";
import { isConfirmed } from "./types";

/** LINE・電話のいずれかが確定し、実際に予約導線を表示できる状態かどうか。 */
export function isReservationReady(): boolean {
  return isConfirmed(siteConfig.contact.lineUrl) || isConfirmed(siteConfig.contact.phone);
}
