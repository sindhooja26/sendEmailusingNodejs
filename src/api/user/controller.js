import registration from '../common/registrationmodel'
 
var nodemailer =require ('nodemailer');

export const addData=(req,res)=>{
    registration.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
            var transporter = nodemailer.createTransport({
                service:'Gmail',
                auth:{
                    user:'sindhooja.vita@gmail.com',
                    pass:'AK23032604'

                }
            });
            var mailoptions={
                from:'sindooja.vita@gmailcom',
                to:result.Email,
                subject:'Register successful',
                text:'registration successful.please remember register details'+ 'Email :' + result.Email +'\n\n'+ 'Password :'+ result.Password,
            };
            transporter.sendMail(mailoptions,(error,info)=>{
                if(error){
                    console.log('error');
                }else{
                    console.log('Email sent' +info.res);
                }
            });
        }
    })
}