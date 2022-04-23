import { DAT_GHE,HUY_GHE } from "../types/bookingType"



export const bookingAction = (ghe) => {

    return {
        type:DAT_GHE,
        ghe
    }
}

export const cancelAction = (soGhe) => {

    return {
        type:HUY_GHE,
        soGhe
    }
}