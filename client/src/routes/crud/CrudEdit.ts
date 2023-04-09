import LibDbSession from '$lib/LibDbSession';
import LibConfig from '$lib/LibConfig';
import { PUBLIC_API_URL } from '$env/static/public'
import Crud from './Crud';

//type
interface TodoData {
  id?: number;
  user_id: number;
  title: string;
  content: string;
  completed: boolean;
}
//
const CrudEdit = {
  /**
   * :
   * @param
   *
   * @return
   */   
  /**
   * :
   * @param key: any
   *
   * @return
   */   
  update: async function(id: number): Promise<any>
  {
    try {
//  console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
      let ret = false;
      const url = PUBLIC_API_URL + "/todos/update";
      const item = Crud.getTodoDataFromInput();
      item.id = id;
//console.log(item);
      const body = JSON.stringify(item);		
      const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
      if (res.status != 200) {
        throw new Error(await res.text());
      }
      ret = true;
      return ret;
    } catch (e) {
      console.error(e);
    }
  },
  /**
   * :
   * @param
   *
   * @return
   */   
  delete: async function(id: number): Promise<any>
  {
    try {
//  console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
      let ret = false;
      const item = {
        id: Number(id),
      }
//console.log(item);
      const response = await fetch(PUBLIC_API_URL + "/todos/delete", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      });       
      const json = await response.json();
      console.log(json.data);
      if(json.ret !== LibConfig.OK_CODE) {
        throw new Error(await response.text());
      }
//console.log(json);
      ret = true;
      return ret;
    } catch (e) {
      console.error(e);
    }
  },  
}
export default CrudEdit;
