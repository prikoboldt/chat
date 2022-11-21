import { io } from './http'
import { Message } from './interfaces';

const messages: Message[] = []

io.on( 'connection', socket => { 
  socket.emit( 'messageHistory', messages )

  socket.on('message', ( data: Message ) => {
    messages.push( data );
    socket.broadcast.emit('showMessage', data)
  } )
} )