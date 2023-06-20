import moongose from 'moongose';

const whatsappschema=mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    recevied: boolean,
});

export default mongoosee.model('messagecontent', whatsappschema);
