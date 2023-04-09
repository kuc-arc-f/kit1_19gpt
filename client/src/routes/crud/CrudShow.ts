import LibDbSession from '$lib/LibDbSession';
import LibConfig from '$lib/LibConfig';
import { PUBLIC_API_URL } from '$env/static/public'
//
const CrudShow = {
  /**
   * get:
   * @param key: any
   *
   * @return
   */      
  get : async function(id: number) : Promise<any>
  {
    try{
//console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
      let item: any = {};
      const url = PUBLIC_API_URL + "/todos/show/" + String(id);
      const response = await fetch(url);
      const json = await response.json();
console.log(json);
//      item = json.data;
      return json;
    } catch (e) {
      console.error(e);
    }
  },  
}
export default CrudShow;
