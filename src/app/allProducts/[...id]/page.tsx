
import EachInformation from './EachInformation';

const page = async(props:PageProps<"/allProducts/[...id]">) => {
    const{id}=await props.params
   
    
  
  return (
  <EachInformation postId={id}/>
  )
}

export default page