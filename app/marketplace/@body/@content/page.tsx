"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import CardHolder from "./cardHolder"
import { useEffect, useState } from "react"
// 
import { Input } from "@/components/ui/input"
import Knob from "../@sideBar/knob"



import { getLoadData, getTruckData, getWareHouseData } from '../../../router';


const Page = () => {
  const [state,setState] = useState([
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ])
  const [loadType,setLoadType] = useState(['perishable','non-perishable','chemical','petroluem','lng','cng'])
  const [truckType,setTruckType] = useState(['hyva','flatBed','tanker','lcv','container'])
  const [wareHouseType,setWareHouseType] = useState(['open','multiStoried','refrigrated','grainStore','ecomerce'])
  const [loadData,setLoadData] = useState()
  const [stateSearch,setStateSearch] = useState();
  const [type,setType] = useState()
  const [truckData,setTruckData] = useState()
  const [wareHouseData,setWareHouseData] = useState()
  const [TabTrigger,setTabTrigger] = useState('load');
  useEffect(() => {
   
   
      getLoadData().then(res => {
        setLoadData(res)

      })

      getTruckData().then(res => {
        setTruckData(res)
      })

      getWareHouseData().then(res => {
        setWareHouseData(res)
      })

  },[])
  useEffect(() => {
    console.log(loadData,'check1');
    console.log(truckData,'check2');
    console.log(wareHouseData,'check2');
    console.log(stateSearch,'search');
    console.log(type,'filterType');
    
  },[loadData,truckData,wareHouseData,stateSearch,type])

  const handleTabTrigger = (value:string) => {
    setTabTrigger(value)
  }

    return (
      <>
            {/* Filter section */}
      <div className="pb-12 hidden lg:block">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Filter
            </h2>
            <Knob data={state} handleKnob={setStateSearch} />
            <Separator orientation="horizontal" className="my-1"/>
            {/* <Input className="mb-2 mx-4 w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]"></Input> */}
            {TabTrigger === 'load' && (
              <div className="mb-2 px-4 text-lg font-semibold tracking-tight">
                <Knob data={loadType} handleKnob={setType} className="my-1"/>
              </div>
            )}
            {TabTrigger === 'truck' && (
              <div className="mb-2 px-4 text-lg font-semibold tracking-tight">
                <Knob data={truckType} handleKnob={setType} className="my-1"/>
              </div>
            )}
            {TabTrigger === 'wareHouse' && (
              <div className="mb-2 px-4 text-lg font-semibold tracking-tight">
                <Knob data={wareHouseType} handleKnob={setType}/>
              </div>
            )}
          </div>
        </div>
      </div>
    
        <div className="col-span-3 lg:col-span-4 lg:border-l">
             <div className="h-full px-4 py-3 lg:px-8">
             <Tabs defaultValue="load" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger  value="load" className="relative" onClick={()=>handleTabTrigger('load')}>
                          Find a Load
                        </TabsTrigger>
                        <TabsTrigger value="wareHouse" onClick={()=>handleTabTrigger('wareHouse')}>Find a WareHouse</TabsTrigger>
                        <TabsTrigger value="truck" onClick={()=>handleTabTrigger('truck')}>
                          Find a Truck
                        </TabsTrigger>
                      </TabsList>

                    </div>
                    <TabsContent
                      value="load"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            MarketPlace Data Which are available
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated eventually.
                          </p>
                        </div>
                      </div>

                      </TabsContent>
                      <Separator className="my-4" />
                      <ScrollArea>
                      <div className="grid grid-cols-2 gap-4 h-[400px] overflow-y-auto">
                      
                        <ScrollBar/>
                        {TabTrigger == 'load'?<CardHolder data={loadData} filterState={stateSearch} filterType={type} set={'load'}/> :''}
                        {TabTrigger == 'truck'?<CardHolder data={truckData} filterState={stateSearch} filterType={type} set={'truck'}/>:''}
                        {TabTrigger == 'wareHouse'?<CardHolder data={wareHouseData} filterState={stateSearch} filterType={type} set={'wareHouse'}/>:''}
                      </div>
                      </ScrollArea>
                    </Tabs>
                    
             </div>
            </div>
            </>
    )
}
export default Page