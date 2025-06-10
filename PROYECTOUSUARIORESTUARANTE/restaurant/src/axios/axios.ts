import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosService{
    async getData(token:string,permission:string) {
    try {

        const response = await axios.get(`https://localhost:3001/can-do/${permission}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
        return true
    } catch (error) {
        throw new error(error)
    }
    }
}