import NavBar from "../NavBar/NavBar"

export default function Profile() {

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        Hola Profile!       
                    </div>
                </div>
            </div>
        </div>
    )
}
