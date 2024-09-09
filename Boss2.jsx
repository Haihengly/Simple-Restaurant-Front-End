import Body from "./body";
import Head from "./header";
const Boss = () => {
    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <div className="h-[90%] w-[90%] bg-gray-500 rounded-2xl divide-y divide-zinc-900">
                <Head/>
                <Body/>
            </div>
        </div>
    )
}
export default Boss;