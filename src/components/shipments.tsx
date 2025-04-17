import { Package, PlaneIcon, RefreshCcw } from "lucide-react"
import { ShipmentResponse } from "../types/shipment-response"

export function Shipments({
    data,
    refetch,
}: {
    data: ShipmentResponse
    refetch: () => void
}) {
    const { shipments } = data
    const { id, events, status } =
        shipments[0]

    return (
        <div>
            <section className="max-w-3xl p-3  mx-auto border border-zinc-400 rounded-md">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {status.description}
                        </h2>
                        <h3>Código de rastreo: {id}</h3>
                    </div>
                    <button
                        onClick={() => {
                            refetch()
                        }}
                        className="flex gap-2 border py-1 px-2 rounded-md border-zinc-400 bg-white hover:bg-zinc-100"
                    >
                        <RefreshCcw /> Actualizar
                    </button>
                </div>
                <article className="w-full flex flex-col items-center space-y-2 pt-4">
                    <p className="font-bold self-start">
                        <span className="text-black">Origen: </span>
                        {shipments[0]?.origin?.address?.addressLocality}
                    </p>
                    <PlaneIcon className="w-6 h-6" />
                    <p className="font-bold self-end">
                        <span className="text-black">Destino: </span>
                        {shipments[0]?.destination?.address?.addressLocality}
                    </p>
                </article>
            </section>
            <section className="max-w-3xl p-3  mx-auto border border-zinc-400 rounded-md mt-4">
                <h2>Shipments</h2>

                <ul className="relative  border-gray-200  max-w-[600px] space-y-8">
                    {events.map((event, index) => {
                        return (
                            <li className="flex items-start gap-4" key={index}>
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                                        <Package className="w-5 h-5 " />
                                    </div>
                                    <div className="absolute top-10 left-1/2 w-px h-16 -translate-x-1/2" />
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className=" font-medium">
                                        {event.description}
                                    </h3>
                                    <p className=" text-sm mt-1">
                                        {event.timestamp}
                                    </p>
                                    <p className=" text-sm mt-2">
                                        {
                                            event?.location?.address
                                                ?.addressLocality
                                        }
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
