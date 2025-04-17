export type ShipmentResponse = {
    shipments: Shipment[]
    url: string
    firstUrl: string
    prevUrl: string
    nextUrl: string
    lastUrl: string
}

export type Shipment = {
    id: string
    service: string
    origin: LocationInfo
    destination: LocationInfo
    status: ShipmentStatus
    details: ShipmentDetails
    events: ShipmentEvent[]
}

type LocationInfo = {
    address: {
        countryCode: string
        addressLocality: string
    }
}

type ShipmentStatus = {
    timestamp: string
    location: {
        address: {
            addressLocality: string
        }
    }
    statusCode: string
    description: string
}

type ShipmentDetails = {
    carrier: {
        "@type": string
        organizationName: string
    }
    proofOfDeliverySignedAvailable: boolean
    totalNumberOfPieces: number
    references: Reference[]
    "dgf:routes": DgfRoute[]
}

type Reference = {
    number: string
    type: string
}

type DgfRoute = {
    "dgf:placeOfAcceptance": DgfLocation
    "dgf:portOfLoading": DgfLocation
    "dgf:portOfUnloading": DgfLocation
    "dgf:placeOfDelivery": DgfLocation
}

type DgfLocation = {
    "dgf:locationName": string
}

type ShipmentEvent = {
    timestamp: string
    location: {
        address: {
            countryCode: string
            addressLocality: string
        }
    }
    statusCode: string
    description: string
}
