"use client"
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Recommendation from './@body/@sideBar/page';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Analytics from './@body/@content/@analytics/page';
import Wallet from './@body/@content/@wallet/page';
import Posts from './@body/@content/@posts/page';
import Book from './@body/@content/@bookKeeping/page';
import { getUserData, postUserData } from '../router';
import { useSession } from 'next-auth/react';
import GetUser from '../providers/getUser';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


async function fetchData(email:any) {
    console.log(email,'reached for email./././/./.');
    
  if (email) {
    const userData = await getUserData(email);
    return userData;
  }
  return null;
}

const Page = () => {
  const { data: session } = useSession();


  
  type UsersData = {
    firstName: string | undefined;
    lastName: string | undefined;
    mobileNumber: number | undefined;
    email: string | undefined;
    adhaar: number | undefined;
    userType: string | undefined;
    postalCode: number | undefined;
    panchayath: string | undefined;
    city: string | undefined;
    district: string | undefined;
    state: string | undefined;
    country: string | undefined;
    about: string | undefined;
  };
  const [stateArray, setState] = useState( [ "Andhra Pradesh",
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
    "West Bengal"
  ])
  const [usersData, setUserData] = useState<UsersData | null>(null);
  const [trucksData, setTrucksData] = useState<UsersData | null>(null);
  const [loadsData, setLoadsData] = useState<UsersData | null>(null);
  useEffect(() => {
    console.log(session,'jkdksddesewdr');
    console.log(session?.user?.email,'test/./././././');
    fetchData(session?.user?.email).then((userData) => { 
      setUserData(userData);
    });
  }, [session]);
  const [selectedTab, setSelectedTab] = useState('analytics');
  const [selectedValue, setSelectedValue] = useState("loadProvider");
  const [pinCode, setPinCode] = useState(['', '', '', '', '', '']);
  const inputRefs: RefObject<HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    if (value.length <= 1) {
      const newPinCode = [...pinCode];
      newPinCode[index] = value;
      setPinCode(newPinCode);
      const joinedPinCode = newPinCode.join("");
      const pincodeNumber = Number(joinedPinCode);
      const newE = {
        target: {
          id: "postalCode",
          value: pincodeNumber
        }
      }
      if(e){
        handleInputChanges(newE)
      }
  
      if (value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1]?.current?.focus();
      } else if (value.length === 0 && index > 0) {
        inputRefs[index - 1]?.current?.focus();
      }
    }
  };


  
  const handlePinCodeChangeForTruck = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    if (value.length <= 1) {
      const newPinCode = [...pinCode];
      newPinCode[index] = value;
      setPinCode(newPinCode);
      const joinedPinCode = newPinCode.join("");
      const pincodeNumber = Number(joinedPinCode);
      const newE = {
        target: {
          id: "startPointPostalCode",
          value: pincodeNumber
        }
      }
      if(e){
        handleInputChangesForTruck(newE)
      }
  
      if (value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1]?.current?.focus();
      } else if (value.length === 0 && index > 0) {
        inputRefs[index - 1]?.current?.focus();
      }
    }
  };


  const handlePinCodeChangeForLoad = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    if (value.length <= 1) {
      const newPinCode = [...pinCode];
      newPinCode[index] = value;
      setPinCode(newPinCode);
      const joinedPinCode = newPinCode.join("");
      const pincodeNumber = Number(joinedPinCode);
      const newE = {
        target: {
          id: "startPointPostalCode",
          value: pincodeNumber
        }
      }
      if(e){
        handleInputChangesForTruck(newE)
      }
  
      if (value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1]?.current?.focus();
      } else if (value.length === 0 && index > 0) {
        inputRefs[index - 1]?.current?.focus();
      }
    }
  };
  

  const handleInputChanges = (e: any) => {
    console.log(e,'userTypenmfr reffervee');
    
    const value = e.target.value;
    const key = e.target.id;
   
    setUserData((prevUserData:any) => ({
      ...prevUserData,
      [key]: value,
    }));
  
  };


  const handleInputChangesForTruck = (e: any) => {
    console.log(e,'userTypenmfr reffervee');
    
    const value = e.target.value;
    const key = e.target.id;
   
    setTrucksData((prevUserData:any) => ({
      ...prevUserData,
      [key]: value,
    }));
  
  };
  const handleInputChangesForLoad = (e: any) => {
    console.log(e,'userTypenmfr reffervee');
    
    const value = e.target.value;
    const key = e.target.id;
   
    setLoadsData((prevUserData:any) => ({
      ...prevUserData,
      [key]: value,
    }));
  
  };

  
  
  

  useEffect(() => {
      Promise.resolve(GetUser(session)) 
        .then((email: any) => {
          if (email) {
            return getUserData(email);
          } else {
            return Promise.reject('Email is falsy');
          }
        })
        .then((userData: any) => {
          setUserData(userData[0]);
          console.log(userData[0]);
          
        })
        .catch((error: any) => {
          console.error('Error fetching user data:', error);
        })
    }, [session]);
  
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Filter the stateArray based on user input
      const value = e.target.value;
      console.log(value,'testing value');
      
      const filteredStates = stateArray.filter((state) =>
        state.includes(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
      );
      console.log('testing filred', filteredStates);
      const key = e.target.id;
      setUserData((prevUserData:any) => ({
        ...prevUserData,
        [key]: value,
      }));
     
      // Update the suggestions based on user input
      setSuggestions(filteredStates);
    };
    
    const handleInputChangeForTruck = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Filter the stateArray based on user input
      const value = e.target.value;
      console.log(value,'testing value');
      
      const filteredStates = stateArray.filter((state) =>
        state.includes(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
      );
      console.log('testing filred', filteredStates);
      const key = e.target.id;
      setTrucksData((prevUserData:any) => ({
        ...prevUserData,
        [key]: value,
      }));
     
      // Update the suggestions based on user input
      setSuggestions(filteredStates);
    };

    const handleInputChangeForLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Filter the stateArray based on user input
      const value = e.target.value;
      console.log(value,'testing value');
      
      const filteredStates = stateArray.filter((state) =>
        state.includes(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
      );
      console.log('testing filred', filteredStates);
      const key = e.target.id;
      setLoadsData((prevUserData:any) => ({
        ...prevUserData,
        [key]: value,
      }));
     
      // Update the suggestions based on user input
      setSuggestions(filteredStates);
    };

  
    const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleTabClick = (tabValue:any,no=0) => {
    if(no === 1) {
      console.log(usersData,'test.././...................../././.././.');
      postUserData("createUser",usersData)
    }
    else if(no === 2) {
      console.log(trucksData,'test.././...................../.trererttc.././../.');
      
      postUserData("createTruck",trucksData);
    }
    else if(no === 3) {
      console.log(loadsData,'test.././...................../.trererttc.././../.');
      
      postUserData("createLoad",loadsData);
    }
    setSelectedTab(tabValue);
  };

  const handleSelectedValueChanges = (selectedValue: string) => {
    console.log('hihiihiihihihihjh');
    
    // Assuming you want to update the "userType" property in your state
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      userType: selectedValue,
    }));
  };
  

  return (
    <>
      <div className="my-10 mx-10 text-3xl font-bold tracking-tight flex justify-between">
        <h3>Profile</h3>
        <Tabs defaultValue={selectedTab}>
          <TabsList>
            <TabsTrigger value="analytics" onClick={() => handleTabClick('analytics')}>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="wallet" onClick={() => handleTabClick('wallet')}>
              Wallet
            </TabsTrigger>
            <TabsTrigger value="post" onClick={() => handleTabClick('post')}>
             Add A Truck
            </TabsTrigger>

            <TabsTrigger value="ForLoad" onClick={() => handleTabClick('ForLoad')}>
             Add A Load
            </TabsTrigger>

            <TabsTrigger value="bookKeeping" onClick={() => handleTabClick('bookKeeping')}>
              Book Keeping
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="border-t">
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-end-4 flex-col justify-center align-middle">
            <Card className="my-10 mx-10 flex flex-col align-middle justify-center py-10">
              <Avatar className="mx-[45%]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardHeader>
                <CardTitle>
                  {usersData ? `${usersData.firstName} ${usersData.lastName}` : 'Please update your profile'}
                </CardTitle>
              </CardHeader>
              <CardContent className="gap-1">
                <CardDescription>{usersData ? `user type: ${usersData.userType}` : 'Please update your user type'}</CardDescription>
                <CardDescription>{usersData ? `state: ${usersData.state}` :"Please update your state"}</CardDescription>
                <CardDescription>{usersData ? `pin code: ${usersData.postalCode}` :"Please update your pinCode"}</CardDescription>
                <CardDescription>{usersData ? `${usersData.email}`:"Please update Your Email"}</CardDescription>
              </CardContent>
              <CardFooter className='flex flex-col'>
                <CardDescription>{usersData ? `mobile number: ${usersData.mobileNumber}`:"Please update your mobile number"} : <Button variant={'ghost'}>Verified✅</Button></CardDescription>
                <br />
                

                        <Button className='w-full rounded-bl rounded-br gap-1' onClick={() => handleTabClick('editProfile')}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                          Edit 
                        </Button>

              </CardFooter>
            </Card>
            <Recommendation />
          </div>
          <div className="border-l col-start-4 col-end-13">
            {selectedTab === 'editProfile' &&     <Card className=" w-[500px] ml-[25%] mt-10">
      <CardHeader>
        <CardTitle>Please enter your info to update the profile</CardTitle>
        <CardDescription>Note: After updating the profile click update button</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder={usersData ? `${usersData.firstName}`:"Enter Your First Name"} required onChange={handleInputChanges}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder={usersData ? `${usersData.lastName}`:"Enter Your Last Name"} required onChange={handleInputChanges}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder={usersData ? `${usersData.email}`:"Enter Your Email"} required onChange={handleInputChanges}/>
            </div>
            <div className="flex flex-col space-y-1.5">
               <Label htmlFor="userType">What type of user you are?</Label>
               <div className='flex gap-3'>
               <Button type="button" id='userType' variant={usersData?.userType === "loadProvider"? "default": "ghost"} value="loadProvider" onClick={handleInputChanges}>Load Owner </Button>
               <Button type="button" id='userType' variant={usersData?.userType === "truckProvider"? "default": "ghost" } value="truckProvider" onClick={handleInputChanges}>Truck Owner</Button>
               <Button type="button" id='userType' variant={usersData?.userType === "wareHouseProvider"? "default": "ghost"} value="wareHouseProvider"onClick={handleInputChanges}>WareHouse Owner</Button>
               </div>
               
              
           </div>
            <div className="flex flex-col space-y-1.5">
      <label htmlFor="state">State</label>
      <Input
        id="state"
        placeholder={usersData ? `${usersData?.state}` :"Which state are you from"}
        list="state-suggestions"
        onChange={handleInputChange}
        
      />
      <datalist id="state-suggestions">
        {suggestions.map((state, index) => (
          <option key={index} value={state} />
        ))}
      </datalist>
    </div>
    <div className="flex flex-col space-y-1.5">
              <Label htmlFor="postalCode">Pin code</Label>
              <div className="flex gap-1">
              {pinCode.map((value, index) => (
      <React.Fragment key={index}>
        <Input
          id={`postalCode-${index}`}
          ref={inputRefs[index]}
          value={value}
          onChange={(e) => handlePinCodeChange(e, index)}
          maxLength={1}
          pattern="^[0-9]{1}$"
        />
        {index === 2 && <span className="px-2 py-1">-</span>}
      </React.Fragment>
    ))}
      </div>
      <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input id="mobileNumber" placeholder={usersData ? `${usersData.mobileNumber}`:''} pattern="[0-9]{10}" onChange={handleInputChanges} />
            </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full' onClick={() => handleTabClick('analytics',1)}>Update</Button>
      </CardFooter>
              </Card>}
            {selectedTab === 'analytics' && <Analytics />}
            {selectedTab === 'wallet' && <Wallet />}
            
            {selectedTab === 'post' &&     <Card className=" w-[500px] ml-[25%] mt-10">
      <CardHeader>
        <CardTitle>Please enter your Truck info to add a truck</CardTitle>
        <CardDescription>Note: After updating the form click submit button</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="truckName">truck Name</Label>
              <Input id="truckName" placeholder="Enter Your truck Name" required onChange={handleInputChangesForTruck}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="expectedPricePerTonneKm">price expect per ton</Label>
              <Input id="expectedPricePerTonneKm" placeholder="Enter Your truck price/ton" required onChange={handleInputChangesForTruck}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="truckDetails">Truck details</Label>
              <Input id="truckDetails" placeholder="Enter Your truck details" required onChange={handleInputChangesForTruck}/>
            </div>
            <div className="flex flex-col space-y-1.5">
               <Label htmlFor="truckType">What type of truck this is?</Label>
               <div className='flex gap-3'>
               <Button type="button" id='truckType' variant={usersData?.userType === "open"? "default": "ghost"} value="open" onClick={handleInputChangesForTruck}>open </Button>
               <Button type="button" id='truckType' variant={usersData?.userType === "hywa"? "default": "ghost" } value="hywa" onClick={handleInputChangesForTruck}>hywa</Button>
               <Button type="button" id='truckType' variant={usersData?.userType === "tanker"? "default": "ghost"} value="tanker"onClick={handleInputChangesForTruck}>tanker</Button>
               </div>
               
              
           </div>
            <div className="flex flex-col space-y-1.5">
      <label htmlFor="startingPoint">starting point</label>
      <Input
        id="startingPoint"
        placeholder="Which state are you starting to drive"
        list="state-suggestions"
        onChange={handleInputChangeForTruck}
        
      />
      <datalist id="state-suggestions">
        {suggestions.map((state, index) => (
          <option key={index} value={state} />
        ))}
      </datalist>
    </div>
    <div className="flex flex-col space-y-1.5">
      <label htmlFor="destination">destination</label>
      <Input
        id="destination"
        placeholder="Which state you are moving"
        list="state-suggestions"
        onChange={handleInputChangeForTruck}
        
      />
      <datalist id="state-suggestions">
        {suggestions.map((state, index) => (
          <option key={index} value={state} />
        ))}
      </datalist>
    </div>
    <div className="flex flex-col space-y-1.5">
              <Label htmlFor="startPointPostalCode">Pin code of start Point</Label>
              <div className="flex gap-1">
              {pinCode.map((value, index) => (
      <React.Fragment key={index}>
        <Input
          id={`startPointPostalCode-${index}`}
          ref={inputRefs[index]}
          value={value}
          onChange={(e) => handlePinCodeChangeForTruck(e, index)}
          maxLength={1}
          pattern="^[0-9]{1}$"
        />
        {index === 2 && <span className="px-2 py-1">-</span>}
      </React.Fragment>
    ))}
      </div>
      <div className="flex flex-col space-y-1.5">
              <Label htmlFor="registeredNumber">RC Number</Label>
              <Input id="registeredNumber" placeholder={usersData ? `${usersData.mobileNumber}`:''} pattern="[0-9]{10}" onChange={handleInputChangesForTruck} />
            </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full' onClick={() => handleTabClick('analytics',2)}>Submit</Button>
      </CardFooter>
              </Card>}



              {selectedTab === 'ForLoad' &&     <Card className=" w-[500px] ml-[25%] mt-10">
      <CardHeader>
        <CardTitle>Please enter your Load info to add a load</CardTitle>
        <CardDescription>Note: After updating the form click submit button</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="loadName">load Name</Label>
              <Input id="loadName" placeholder="Enter Your load Name" required onChange={handleInputChangesForLoad}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="weight">expect weight</Label>
              <Input id="weight" placeholder="Enter Your tonnage " required onChange={handleInputChangesForLoad}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="loadDetails">load details</Label>
              <Input id="loadDetails" placeholder="Enter Your load details" required onChange={handleInputChangesForLoad}/>
            </div>
            <div className="flex flex-col space-y-1.5">
               <Label htmlFor="truckType">What type of truck this is?</Label>
               <div className='flex gap-3'>
               <Button type="button" id='truckType' variant={usersData?.userType === "open"? "default": "ghost"} value="open" onClick={handleInputChangesForLoad}>open </Button>
               <Button type="button" id='truckType' variant={usersData?.userType === "hywa"? "default": "ghost" } value="hywa" onClick={handleInputChangesForLoad}>hywa</Button>
               <Button type="button" id='truckType' variant={usersData?.userType === "tanker"? "default": "ghost"} value="tanker"onClick={handleInputChangesForLoad}>tanker</Button>
               </div>
               
              
           </div>
            <div className="flex flex-col space-y-1.5">
      <label htmlFor="startingPoint">starting point</label>
      <Input
        id="startingPoint"
        placeholder="Which state are you starting to drive"
        list="state-suggestions"
        onChange={handleInputChangeForLoad}
        
      />
      <datalist id="state-suggestions">
        {suggestions.map((state, index) => (
          <option key={index} value={state} />
        ))}
      </datalist>
    </div>
    <div className="flex flex-col space-y-1.5">
      <label htmlFor="destination">destination</label>
      <Input
        id="destination"
        placeholder="Which state you're load are moving"
        list="state-suggestions"
        onChange={handleInputChangeForLoad}
        
      />
      <datalist id="state-suggestions">
        {suggestions.map((state, index) => (
          <option key={index} value={state} />
        ))}
      </datalist>
    </div>
    <div className="flex flex-col space-y-1.5">
              <Label htmlFor="startPointPostalCode">Pin code of start Point</Label>
              <div className="flex gap-1">
              {pinCode.map((value, index) => (
      <React.Fragment key={index}>
        <Input
          id={`startPointPostalCode-${index}`}
          ref={inputRefs[index]}
          value={value}
          onChange={(e) => handlePinCodeChangeForLoad(e, index)}
          maxLength={1}
          pattern="^[0-9]{1}$"
        />
        {index === 2 && <span className="px-2 py-1">-</span>}
      </React.Fragment>
    ))}
      </div>
      <div className="flex flex-col space-y-1.5">
              <Label htmlFor="expectedPrice">Expected price</Label>
              <Input id="expectedPrice" placeholder='' pattern="[0-9]{10}" onChange={handleInputChangesForLoad} />
            </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full' onClick={() => handleTabClick('analytics',3)}>Submit</Button>
      </CardFooter>
              </Card>
    }







              
            {selectedTab === 'bookKeeping' && <Book />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
