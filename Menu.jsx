import './css/stylesheet.css'
// import Pizza from "./image/MyPic/Pizza.png"
const Menu = () => {
const FOOD1 = [
    {img:'image/MyPic/Pizza.png', Name:'Pizza', Name2:'C Pizza Ot', Available:'10 Available', Sold:'5 Sold', Price:'$100', QTY:'10',},
    {img:'image/MyPic/berger.png', Name:'Burger', Name2:'C Burger Ot', Available:'30 Available', Sold:'15 Sold', Price:'50$', QTY:'12',},
    {img:'image/MyPic/chips.png', Name:'Chips', Name2:'C Chips Ot', Available:'20 Available', Sold:'9 Sold', Price:'$70', QTY:'6',},
]
const FOOD2 = [
    {img:'image/MyPic/hotdog.png', Name:'Hotdog', Name2:'C Hotdog Ot', Available:'50 Available', Sold:'30 Sold', Price:'$20', QTY:'20',},
    {img:'image/MyPic/cheese.png', Name:'Cheese', Name2:'C Cheese Ot', Available:'40 Available', Sold:'19 Sold', Price:'43$', QTY:'21',},
    {img:'image/MyPic/icecream.png', Name:'Ice Cream', Name2:'C Ice Cream Ot', Available:'80 Available', Sold:'40 Sold', Price:'$60', QTY:'30',},
]
const FOOD3 = [
    {img:'image/MyPic/chickennuggets.png', Name:'Chicken Nuggets', Name2:'C Chicken Nuggets Ot', Available:'50 Available', Sold:'30 Sold', Price:'$20', QTY:'20',},
    {img:'image/MyPic/chickenwings.png', Name:'Chicken Wings', Name2:'C Chicken Wings Ot', Available:'40 Available', Sold:'19 Sold', Price:'43$', QTY:'21',},
    {img:'image/MyPic/coca.png', Name:'Coca Cola', Name2:'Pherk Coca Cola Ot', Available:'80 Available', Sold:'40 Sold', Price:'$60', QTY:'30',},
]
    return (
        <div>
            <div className="h-[420px] w-[100%] overflow-y-auto scrollbar-hide">
                <div className="h-[65%] w-[100%] flex justify-between">
                    {
                        FOOD1.map((data1) => {
                            return (
                                <div className="h-[100%] w-[30%] bg-gray-200 p-4 rounded-2xl">
                                    <div className="w-[100%] h-[65%]  flex justify-between">
                                        <div className="h-[100%] w-[46%]">
                                            <img src={data1.img} alt="" className="h-[100%] w-[100%] object-cover rounded-xl shadow-xl shadow-gray-600 " />
                                        </div>
                                        <div className="h-[100%] w-[46%] ">
                                            <div className='h-[30%] w-[100%]  '>
                                                <h1 className='text-center text-2xl font-medium'>{data1.Name}</h1>
                                            </div>
                                            <div className='h-[40%] w-[100%] items-center'>
                                                <h1 className='text-center font-medium'>{data1.Name2}</h1>
                                            </div>
                                            <div className='h-[30%] w-[100%]  relative'> 
                                                <h1 className='inline-block bottom-0 absolute font-medium'>{data1.Available}</h1>
                                                <h1 className='inline-block bottom-0 absolute ml-[65%] font-medium'>{data1.Sold}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] h-[35%] flex justify-between items-center">
                                        <h1 className='text-3xl font-semibold'>{data1.Price}</h1>
                                        <div className='h-[100%] w-[50%] flex justify-between items-center'>
                                            <div className='h-[55%] w-[30%] bg-sky-400 flex items-center justify-center rounded-full'><span>-</span></div>
                                            <h1 className='text-xl font-semibold'>{data1.QTY}</h1>
                                            <div className='h-[55%] w-[30%] bg-sky-400 flex items-center justify-center rounded-full'><span>+</span></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className="h-[65%] w-[100%] my-8 flex justify-between">
                    {
                        FOOD2.map((data1) => {
                            return (
                                <div className="h-[100%] w-[30%] bg-gray-200 p-4 rounded-2xl">
                                    <div className="w-[100%] h-[65%]  flex justify-between">
                                        <div className="h-[100%] w-[46%]">
                                            <img src={data1.img} alt="" className="h-[100%] w-[100%] object-cover rounded-xl shadow-xl shadow-gray-600 " />
                                        </div>
                                        <div className="h-[100%] w-[46%] ">
                                            <div className='h-[30%] w-[100%]  '>
                                                <h1 className='text-center text-2xl font-medium'>{data1.Name}</h1>
                                            </div>
                                            <div className='h-[40%] w-[100%] items-center'>
                                                <h1 className='text-center font-medium'>{data1.Name2}</h1>
                                            </div>
                                            <div className='h-[30%] w-[100%]  relative'>
                                                <h1 className='inline-block bottom-0 absolute font-medium'>{data1.Available}</h1>
                                                <h1 className='inline-block bottom-0 absolute ml-[65%] font-medium'>{data1.Sold}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] h-[35%] flex justify-between items-center">
                                        <h1 className='text-3xl font-semibold'>{data1.Price}</h1>
                                        <div className='h-[100%] w-[50%] flex justify-between items-center'>
                                            <div className='h-[55%] w-[30%] bg-sky-400 flex items-center justify-center rounded-full'><span>-</span></div>
                                            <h1 className='text-xl font-semibold'>{data1.QTY}</h1>
                                            <div className='h-[55%] w-[30%] bg-sky-400 flex items-center justify-center rounded-full'><span>+</span></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className="h-[65%] w-[100%] flex justify-between">
                    {
                        FOOD3.map((data1) => {
                            return (
                                <div className="h-[100%] w-[30%] bg-gray-200 p-4 rounded-2xl">
                                    <div className="w-[100%] h-[65%]  flex justify-between">
                                        <div className="h-[100%] w-[46%]">
                                            <img src={data1.img} alt="" className="h-[100%] w-[100%] object-cover rounded-xl shadow-xl shadow-gray-600 " />
                                        </div>
                                        <div className="h-[100%] w-[46%] ">
                                            <div className='h-[30%] w-[100%]  '>
                                                <h1 className='text-center text-2xl font-medium'>{data1.Name}</h1>
                                            </div>
                                            <div className='h-[40%] w-[100%] items-center relative'>
                                                <h1 className='text-center font-medium bottom-0 absolute'>{data1.Name2}</h1>
                                            </div>
                                            <div className='h-[30%] w-[100%]  relative'>
                                                <h1 className='inline-block bottom-0 absolute font-medium'>{data1.Available}</h1>
                                                <h1 className='inline-block bottom-0 absolute ml-[65%] font-medium'>{data1.Sold}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] h-[35%] flex justify-between items-center">
                                        <h1 className='text-3xl font-semibold'>{data1.Price}</h1>
                                        <div className='h-[100%] w-[50%] flex justify-between items-center'>
                                            <div className='h-[55%] w-[30%] bg-sky-400 flex items-center justify-center rounded-full'><span>-</span></div>
                                            <h1 className='text-xl font-semibold'>{data1.QTY}</h1>
                                            <div className='h-[55%] w-[30%] bg-sky-400 flex items-center justify-center rounded-full'><span>+</span></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className="h-[8%] w-[100%] bg-gray-500"></div>
            </div>
        </div>
    )
}
export default Menu;