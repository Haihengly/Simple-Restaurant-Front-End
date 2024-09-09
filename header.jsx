import LOGO from './image/Logo.jpeg'
import CJ from './image/CJ.jpg'
import { RiDashboardFill } from 'react-icons/ri';
import { FaClipboardList } from 'react-icons/fa';
import { RiHistoryFill } from 'react-icons/ri';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
const IconNName = [
    {icon: RiDashboardFill, Name:'Dasbord' },
    {icon: FaClipboardList, Name:'Order List'},
    {icon: RiHistoryFill, Name:'History'},
    {icon: FaMoneyBillWave, Name:'Bills'}
]
const Head = () => {
    return (
        <div className="h-[10%] w-[100%] bg-gray-500 flex justify-between items-center rounded-t-2xl ">
            <div className="h-[100%] flex items-center">
                <img src={LOGO} alt="" className="h-[50%] w-[initial] rounded-full inline-block ml-5"/>
                <h1 className="inline-block ml-5 text-xl font-medium font-serif">oui oui mate mate</h1>
            </div>
            <div className="h-[100%] flex items-center justify-center space-x-3">
                {
                    IconNName.map((ICONN, index) => {
                        return(
                            <div>
                                <span key={index} className="flex items-center space-x-1">
                                <ICONN.icon style={{fontSize: '20',}} className="ml-8"/> 
                                <h1>{ICONN.Name}</h1>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-[100%] flex items-center justify-center">
                <FaBell style={{fontSize: '25',}} className="mr-5"/>
                <img src={CJ} alt="" className="h-[50%] w-[initial] rounded-full mr-5"/>
            </div>
        </div>
    ) 
}
export default Head;
