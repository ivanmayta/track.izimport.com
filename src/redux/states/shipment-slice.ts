import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ShipmentResponse } from "../../types/shipment-response"

const VITE_API_URL = import.meta.env.VITE_API_URL // Replace with your actual base URL
// console.log("BASE_URL", VITE_API_URL)
export const shipmentApi = createApi({
    reducerPath: "shipmentApi",
    baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),
    endpoints: (builder) => ({
        getDhlShipment: builder.query<ShipmentResponse, string | void>({
            query: (trackingNumber) =>
                `api/shipment?trackingNumber=${trackingNumber}`,
        }),
    }),
})

export const { useGetDhlShipmentQuery, useLazyGetDhlShipmentQuery } =
    shipmentApi
