import LibDbSession from '$lib/LibDbSession';
import LibConfig from '$lib/LibConfig';
import { PUBLIC_API_URL } from '$env/static/public'
//type
interface TodoData {
  id?: number;
  user_id: number;
  title: string;
  content: string;
  completed: boolean;
}
//
const CrudCreate = {
  /**
   * :
   * @param key: any
   *
   * @return
   */   
  getTodoDataFromInput: function(): any
  {
    try{
      const user_idInput = document.querySelector<HTMLInputElement>('#user_id'); // user_idのINPUTタグを取得
      const titleInput = document.querySelector<HTMLInputElement>('#title'); // titleのINPUTタグを取得
      const contentInput = document.querySelector<HTMLInputElement>('#content'); // contentのINPUTタグを取得
      const completedInput = document.querySelector<HTMLInputElement>('#completed'); // completedのINPUTタグを取得
    
      const user_id = user_idInput?.valueAsNumber || 0; // 数値として取得
      const title = titleInput?.value || '';
      const content = contentInput?.value || '';
//      const completed = completedInput?.checked || false; // チェックされているかどうかを取得
      const completed = 1;
    
      return {
        user_id,
        title,
        content,
        completed
      };      
    } catch (e) {
      console.error(e);
      throw new Error('Error , getTodoDataFromInput');
    }
  },
  /**
   * :
   * @param key: any
   *
   * @return
   */   
  create: async function(): Promise<any>
  {
    try {
//  console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
      let ret = false;
      const url = PUBLIC_API_URL + "/todos/create";
      const item = this.getTodoDataFromInput();
console.log(item);
//return;
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
}
export default CrudCreate;
