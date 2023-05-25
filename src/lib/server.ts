import { ref } from "vue";
import { Server } from "../types/server.interface";
import parseUrl from "../utils/parseurl";
import axios from 'axios'

export const servers = ref<Server[]>(JSON.parse(localStorage.getItem('servers') ?? '[]'))

class ServerClass {
  join(url: string, pwd?: string) {
    const parsedUrl = parseUrl(url)
    axios.get(parsedUrl, { params: { pwd } })
      .then(res => { return res })
      .catch(err => console.error(err))
  }
}

const useServer = () => {
  return new ServerClass()
}

export default useServer
