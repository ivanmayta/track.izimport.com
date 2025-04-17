import { configureStore } from "@reduxjs/toolkit"

import { shipmentApi } from "./states/shipment-slice"

export const store = configureStore({
    reducer: {
        [shipmentApi.reducerPath]: shipmentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shipmentApi.middleware),
})

export type RootApp = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

