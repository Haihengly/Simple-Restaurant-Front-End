const Detail = () => {
const DATA = [
    {img:'image/MyPic/pizza.webp', Name:'Pizza', QTY:'5', Price:'$100'},
    {img:'image/MyPic/hotdog.jpg', Name:'HotDog', QTY:'20', Price:'$20$'},
    {img:'image/MyPic/coca.jpg', Name:'Coca Cola', QTY:'30', Price:'$60$'},
]
    return (
        <div>
            <div className="h-[729px]">
                <div className="h-[20%] w-[100%] relative ">
                    <label htmlFor="" className="text-xl font-serif font-medium">Customer Information</label>
                    <input placeholder="Customer Name"  type="text" className="form-control border-1 border-black InputBoxShadow absolute top-10" />
                    <select name="" id="" className="form-control border-1 border-black InputBoxShadow absolute bottom-2">
                        <option value="">Itachi</option>
                        <option value="">Kenchi</option>
                        <option value="">Gigachad</option>
                    </select>
                </div>
                <div className="h-[45%] w-[100%]0">
                    <div className="h-[10%] w-[100%]">
                        <h1 className="text-xl font-serif font-medium">Order Details</h1>
                    </div>
                    <div className="h-[90%] w-[100%] overflow-y-auto scrollbar-hide ">
                        {
                            DATA.map((data) => {
                                return (
                                    <div>
                                        <div className="h-[118px] w-[100%] flex justify-between">
                                            <div className="h-[100%] w-[27%]">
                                                <img src={data.img} alt="" className="h-[100%] w-[100%] object-cover rounded-lg shadow-md shadow-gray-300" />
                                            </div>
                                            <div className="h-[100%] w-[70%]">
                                                <div className="h-[40%] w-[100%] flex items-center justify-center">
                                                    <h1 className='text-2xl font-semibold'>{data.Name}</h1>
                                                </div>
                                                <div className="h-[60%] w-[100%] flex">
                                                    <div className="h-[100%] w-[65%] flex justify-between items-center px-3">
                                                        <div className='h-[50%] w-[20%] bg-sky-400 flex items-center justify-center rounded-full'><span>-</span></div>
                                                        <h1 className='text-xl font-semibold'>{data.QTY}</h1>
                                                        <div className='h-[50%] w-[20%] bg-sky-400 flex items-center justify-center rounded-full'><span>+</span></div>
                                                    </div>
                                                    <div className="h-[100%] w-[35%] flex justify-center items-center">
                                                        <h1 className='text-2xl font-semibold'>{data.Price}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[1px] w-[100%] bg-black my-4"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="h-[35%] w-[100%]">
                    <div className="h-[20%] w-[100%] items-center flex">
                        <h1 className="text-xl font-serif font-medium">Order Summary</h1>
                    </div>
                    <div className="h-[52%] w-[100%]">
                        <div className="h-[100%] w-[100%] bg-gray-200 rounded-lg p-8">
                            <div className="h-[50%] w-[100%]  flex justify-between ">
                                <h1 className="">Subtotal</h1>
                                <h1 className="">$750.00</h1>
                            </div>
                            <div className="h-[50%] w-[100%] relative">
                                <h1 className="inline-block absolute bottom-0">Tax(10%)</h1>
                                <h1 className="inline-block absolute bottom-0 right-0">$50.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="h-[28%] w-[100%] relative">
                        <div className="h-[70%] w-[100%] bg-blue-500 absolute bottom-0 rounded-lg">
                            <h1 className="text-center my-3 font-medium text-base">Process Transaction</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;