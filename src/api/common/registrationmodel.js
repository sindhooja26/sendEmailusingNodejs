import mongoose,{promise} from 'mongoose'

const registrationschema=new mongoose.Schema({
    
    Phone:{
        type:Number
    },

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    }
},{
    timestamp:true

});
const model=mongoose.model('SendingEmail',registrationschema)

export default model