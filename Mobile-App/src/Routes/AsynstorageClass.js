import AsyncStorage from '@react-native-community/async-storage';


const setAsyncStorage=async(key,item)=>{
    try {
        await AsyncStorage.setItem(key,item);
    } catch (error) {
        console.log(error)
    }
}




const getAsyncStorage=async(key)=>{
    try {
      const value= await AsyncStorage.getItem(key); 
    
      if(value !==null){
     
          return value;
      }else{
        console.log("::::::::::::::value",value)
          return null;
          
      }
    } catch (error) {
        console.log(error);
        return null;
    }
}

 const clearAsyncStorage=async()=>{
     try {
        AsyncStorage.clear(); 
     } catch (error) {
        console.log(error)  
     }
 }

 export { setAsyncStorage, getAsyncStorage, clearAsyncStorage};
