import dotenv from "dotenv"
dotenv.config()

import optGenrator from 'otp-generator';
import crypto from 'crypto'
import twillio from 'twilio'

export const otpGen = ()=>{ 
    return  optGenrator.generate(4, {digits: true, upperCase: false, specialChars: false })

}

export const sendSMS = async (phone, otp) => { 
    const smsSId = process.env.SMS_SID;
    const smsAuthToken = process.env.SMS_TOKEN;

    // Initialize the Twilio client
    const client = twillio(smsSId, smsAuthToken, { 
        lazyLoading: true
    });

    // Send SMS message
    return await client.messages.create({ 
        to: phone,
        from: process.env.SMS_NUMBER,
        body: `Your OTP is ${otp}`
    });
};


export const hashOtp = (data)=>{ 
    return  crypto.createHmac('sha256',process.env.HASH_SECRET).update(data).digest().toString('hex')

   
    
}



