export interface ISpotifyObjectResponse<T> {
    /** A link to the Web API endpoint returning the full result of the request */
    href: string;
    /** The requested content */
    items: T[];
    /** The maximum number of items in the response (as set in the query or by default) */
    limit: number;
    /** URL to the next page of items. ( null if none) **/
    next: string;
    /** The offset of the items returned (as set in the query or by default) **/
    offset: number;
    /** URL to the previous page of items. ( null if none) **/
    previous: string;
    /** A link to the Web API endpoint returning the full result of the request **/
    total: number;
}
