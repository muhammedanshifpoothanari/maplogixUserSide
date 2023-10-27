import GetUser from "./providers/getUser";

async function getLoadData() {
    const res = await fetch('http://51.20.9.171:8081/loads',{
        method:'GET',
        next: { revalidate: 0 },
        headers: {
            'Cache-Control': 'no-cache', 
          },
    })
  
   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    const response:any = await res.json()
    console.log(response.data,'serssrsrs');
    
    return response.data
  }
  async function getTruckData() {
    const res = await fetch('http://localhost:3001/trucks',{
        method:'GET',
        next: { revalidate: 0 },
        headers: {
            'Cache-Control': 'no-cache', 
          },
    })
  
   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    const response:any = await res.json()
    console.log(response.data,'serssrsrs');
    
    return response.data
  }
  async function getWareHouseData() {
    const res = await fetch('http://localhost:3001/wareHouse',{
        method:'GET',
        next: { revalidate: 0 },
        headers: {
            'Cache-Control': 'no-cache', 
          },
    })
  
   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    const response:any = await res.json()
    console.log(response.data,'serssrsrs');
    
    return response.data
  }

  
  async function postUserData(queue:any,text:any) {
    console.log('reached at get user data');

    
    console.log('mail:', queue,text);
  
    const res = await fetch('http://51.20.18.57:9090/',{
        method:'POST',
        next: { revalidate: 10 },
        body: JSON.stringify({ queue: queue,text:text}),
        headers: {
            'Content-Type': 'application/json', 
          },
    })
    console.log('mail:', res);
   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    const response:any = await res.json()
    console.log(response.data,'serssrsrs');
    
    return response.data
  }

  async function getUserData(mail:any) {
    console.log('reached at get user data');

    
    console.log('mail:', mail);
  
    const res = await fetch('http://16.170.251.75:3001/users/byEmail',{
        method:'POST',
        next: { revalidate: 10 },
        body: JSON.stringify({ email: mail}),
        headers: {
            'Content-Type': 'application/json', 
          },
    })
    console.log('mail:', res);
   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    const response:any = await res.json()
    console.log(response.data,'serssrsrs');
    
    return response.data
  }

  export {
    getLoadData,
    getTruckData,
    getWareHouseData,
    getUserData,
    postUserData
    }