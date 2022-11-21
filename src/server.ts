import { serverHttp } from './http'
import './websocket'


const port = 3333
serverHttp.listen( port, () => console.log( `Running on PORT ${ port }` ) )