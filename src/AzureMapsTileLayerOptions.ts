import { AuthenticationOptions } from './AuthenticationOptions';

/** Options for an Azure Maps tile layer. */
export interface AzureMapsTileLayerOptions extends L.TileLayerOptions {
    /** Required. Authentication options for connecting to Azure Maps. */
    authOptions: AuthenticationOptions;

    /** The tile set ID layer to load from the Azure Maps Render V2 service. */
    tilesetId?: string;

    /** Geopolitical view of the map. */
    view?: string;

    /** Language code. [Supported languages](https://docs.microsoft.com/azure/azure-maps/supported-languages) */
    language?: string;

    /** The desired date and time of the requested tile. This parameter must be specified in the standard date-time format (e.g. 2019-11-14T16:03:00-08:00), as defined by ISO 8601. This parameter is only supported when tilesetId parameter is set to `microsoft.weather.infrared.main` or `microsoft.weather.radar.main`. */
    timeStamp?: string | Date;
}