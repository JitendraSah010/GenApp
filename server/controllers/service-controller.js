import serviceModel from "../model/serviceModel.js";

const services = async(req, res)=>{
    try {
        const data = await serviceModel.find();
        
        if(!data){
            return res.status(404).json({message:"services not available"});
        }
        
        res.status(200).json(data);
        
    } catch (error) {
        console.log("error is", error)
        return res.status(500).json({message:"service internal server error"});
    }
}

export { services };