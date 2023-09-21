import MapStocOtim from "../../models/MapStocOtim";
import MapStocOptimStatus from "../../models/statuses/MapStocOptimStatus";


interface SursaMapStocOptimState{
    products: MapStocOtim[],
    statusRetrieve: MapStocOptimStatus,
    statusEmpty: MapStocOptimStatus,
    totalObjects: number,

}

const MapStocOptimInitialState: SursaMapStocOptimState = {
    products: [],
    statusRetrieve: MapStocOptimStatus.NONE,
    statusEmpty: MapStocOptimStatus.NONE,
    totalObjects: 0,

}


