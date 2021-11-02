import {http} from './http';
import './websockect/client';
import './websockect/admin';

http.listen(8181, ()=> {console.log("api run on port 8181")});