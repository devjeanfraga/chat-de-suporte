import {io} from '../http';
import {ConnectionsServices} from "../services/ConnectionsServices";
import {UsersServices}  from "../services/UsersServices";
import {MessagesServices}  from "../services/MessagesServices";


interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket)=> {
  const connectionsServices = new ConnectionsServices();
  const usersServices = new UsersServices();
  const messagesServices =  new MessagesServices();

    socket.on("client_first_access", async( params ) => {
    
    const socket_id = socket.id;
    const {text, email} = params as IParams
    let user_id = null;

    //console.log(params);
    const userExists = await usersServices.findByEmail(email)

    if(!userExists) {
      const user = await usersServices.create(email);

      await connectionsServices.create({
        socket_id,
        user_id: user.id 
      })

      user_id = user.id;
    } else {
      user_id = userExists.id; 
      const connection = await connectionsServices.findByUserId(userExists.id);
      
      if (!connection) {
        await connectionsServices.create({
          socket_id,
          user_id: userExists.id
        });
      } else {
        connection.socket_id = socket_id;

        await connectionsServices.create(connection)
      }
    }

    await messagesServices.create({
      text,
      user_id
    });

    //listando todas a mensagens
    const allMessages = await messagesServices.listByUser(user_id);

    socket.emit("client_list_all_messages", allMessages);

    const allUsers = await connectionsServices.findAllWithoutAdmin();
    io.emit("admin_list_all_users", allUsers);
  });

  socket.on("client_send_to_admin", async params => {
    const  { text, socket_admin_id } = params; 

    const socket_id = socket.id;

    const { user_id } =  await connectionsServices.findBySocketId(socket_id)
    const message = await messagesServices.create({
      text,
      user_id
    });

    io.to(socket_admin_id).emit("admin_receive_message", { 
      message,
      socket_id
    })
  })
})