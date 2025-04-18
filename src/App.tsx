import { PackageSearch } from "lucide-react"
import { Shipments } from "./components/shipments"
import { useState } from "react"
import { useGetDhlShipmentQuery } from "./redux/states/shipment-slice"

function App() {
    // console.log("render app")
    const [inputValue, setInputValue] = useState<string>("")
    const [trackingNumber, setTrackingNumber] = useState<string>("")
    const { data, isLoading, isFetching, refetch, error } =
        useGetDhlShipmentQuery(trackingNumber, {
            skip: trackingNumber === "",
        })
    // console.log("---error----", error)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setInputValue("")
        const formData = new FormData(e.currentTarget)
        const trackingNumber = formData.get("trackingNumber")
        setTrackingNumber(trackingNumber as string)
    }
    return (
        <>
            <section className="pt-48">
                <div className="sticky top-24 bg-white z-10 pb-6">
                    <h1 className="text-center text-5xl pb-6 font-semibold">
                        Rastrea tus envios de: Dhl
                    </h1>
                    <form
                        className="max-w-3xl mx-auto h-12 border-2 border-zinc-400 rounded-md flex "
                        onSubmit={handleSubmit}
                    >
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                                <PackageSearch />
                            </div>
                        </div>
                        <input
                            className="bg-transparent w-full ml-2 h-full caret-black text-black   text-sm ps-12 focus:outline-none -offset-0 focus:border-input"
                            placeholder="Ingrese su número de seguimiento..."
                            type="text"
                            name="trackingNumber"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        />
                        <button className="w-auto rounded-r bg-amber-400 hover:bg-amber-300 text-black inline-block text-nowrap px-6">
                            Rastrear envío
                        </button>
                    </form>
                </div>

                <ul className="font-medium">
                    {error && (
                        <li className="text-center text-2xl">
                            Algo salió mal.
                        </li>
                    )}
                    {isFetching && (
                        <li className="text-center text-2xl">
                            Buscando envio...
                        </li>
                    )}
                    {isLoading && (
                        <li className="text-center text-2xl">Cargando...</li>
                    )}
                    {data?.shipments && (
                        <Shipments data={data} refetch={refetch} />
                    )}
                </ul>
            </section>
        </>
    )
}

export default App
