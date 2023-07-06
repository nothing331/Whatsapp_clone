import conversation from "../model/Conversation-model.js";


export const newConversation = async (request, response) => {
    try {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        return response.status(200).json('conversation already exists');
    }
    const newConversation = new conversation({
        members: [senderId, receiverId]
    });

        await newConversation.save();
        response.status(200).json('conversation saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;

        let conversations = await conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(conversations);
    } catch (error) {
        response.status(500).json(error.message);
    }

}