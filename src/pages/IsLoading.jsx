import { Circles } from "react-loader-spinner"


export const IsLoading = () => {
    return (
        <section className="h-[500px]">
            <div className="h-full flex justify-center items-center">
                <Circles
                    height="80"
                    width="80"
                    color="#5b4f47"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    className=""
                />
            </div>
        </section>
    )
}
