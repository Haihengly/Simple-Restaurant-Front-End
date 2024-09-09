import './css/stylesheet.css'
import Detail from './detailRightSide';
import Menu from './Menu';
const Body = () => {
    const DATA1 = [
        {Name:'Itachi', ID: '#12532', ITEMS:'3 Items', TABLE:'Table 3'},
        {Name:'Kenchi', ID: '#12532', ITEMS:'3 Items', TABLE:'Table 5'},
        {Name:'Gigachad', ID: '#12532', ITEMS:'12 Items', TABLE:'Table 1'},
        {Name:'HeaLee', ID: '#12532', ITEMS:'5 Items', TABLE:'Table 7'},
        {Name:'AhZoung', ID: '#12532', ITEMS:'7 Items', TABLE:'Table 9'},
        {Name:'AhChivak', ID: '#12532', ITEMS:'10 Items', TABLE:'Table 11'},
    ];
    return (
        <div className="h-[90%] w-[100%] rounded-b-2xl flex justify-between divide-x divide-zinc-900">
            <div className="h-[100%] w-[70%]">
                <div className="h-[40%] w-[100%]">
                    <div className="h-[25%] w-[100%]  flex items-center justify-between">
                        <h1 className="mx-4 text-xl font-medium">Order List</h1>
                        <h1 className="mx-4"> see all</h1>
                    </div>  
                    <div className="h-[55%] w-[100%] flex overflow-x-auto scrollbar-hide">
                        {
                            DATA1.map((data1,index)=>{
                                return (
                                    <div className="h-[80%] w-[20%] bg-gray-200 ml-8 rounded-3xl shadow-md shadow-gray-300">
                                        <div className="h-[30%] w-[100%] flex items-center justify-between">
                                            <h1 className="mx-4 text-xl font-medium font-mono">{data1.Name}</h1>
                                            <h1 className="mx-4">{data1.ID}</h1>
                                        </div>
                                        <div className="h-[30%] w-[100%] flex items-center">
                                            <h1 class="mx-4">{data1.ITEMS}</h1>
                                            <h1 class="mx-4">{data1.TABLE}</h1>
                                        </div>
                                        <div className="h-[40%] w-[100%] items-center flex">
                                            <h1 className="bg-sky-400 h-[30px] w-[120px] items-center flex justify-center rounded-3xl ml-6 text-white font-medium">
                                                <span>complete</span>
                                            </h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="h-[20%] w-[100%] flex justify-center items-center">
                        <div className="h-[80%] w-[95%] bg-white rounded-2xl flex items-center justify-between"> 
                            <div className="h-[100%] w-[25%] flex items-center justify-center rounded-2xl">Appetizer</div>
                            <div className="h-[100%] w-[25%] bg-gray-400 hover:bg-gray-300 flex items-center justify-center rounded-2xl">Main course</div>
                            <div className="h-[100%] w-[25%] flex items-center justify-center rounded-2xl">Dessert</div>
                            <div className="h-[100%] w-[25%] flex items-center justify-center rounded-2xl">Beverage</div>
                        </div>
                    </div>
                </div>
                <div className="h-[6%] w-[100%] flex items-center justify-between">
                    <h1 className="mx-4 text-xl font-medium">Menu</h1>
                    <h1 className="mx-4">showing 9 items</h1>
                </div>
                <div className="h-[54%] w-[100%] flex justify-center">
                    <div className="h-[100%] w-[95%] overflow-y-auto scrollbar-hide">
                        <Menu/>
                    </div>
                </div>
            </div>
            <div className="h-[100%] w-[30%] p-4"> 
                <Detail/>
            </div>
        </div>
    )  
}
export default Body;