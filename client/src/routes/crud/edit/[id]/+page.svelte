<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import CrudEdit from '../../CrudEdit';

/** @type {import('./$types').PageData} */
export let data: any;
let todoItem = {};
todoItem = data.item;
console.log(data);
console.log(todoItem);
//console.log(data.name);
/**
 * savePost
 * @param
 *
 * @return
 */ 
const savePost = async function () {
	try {
		const reasult = await CrudEdit.update(data.id);
		if(reasult) {
			goto('/crud');
		}
	} catch (error) {
		console.error(error);
	} 
}
/**
 * deleteItem
 * @param
 *
 * @return
 */ 
async function deleteItem(){
	try {
//console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
		const result = await CrudEdit.delete(data.id);
//console.log(result);
		if(result) {
			goto('/crud');
		}
	} catch (error) {
		console.error(error);
		throw new Error('Error , deleteItem');
	}
}
</script>

<div class="container my-2">
	<a href={`/crud`} class="btn">[ Back ]
	</a>		
	<h1>Edit</h1>
	ID: {data.id}
	<hr />
	<div class="col-sm-6">
		<label for="user_id">User ID:</label>
		<input type="number" id="user_id" name="user_id" 
		value= {todoItem.user_id}><br />

		<label for="title">Title:</label>
		<input type="text" id="title" name="title"
		value= {todoItem.title}><br />
	
		<label for="content">Content:</label>
		<input type="text" id="content" name="content" 
		value= {todoItem.content}
		><br />
	
		<label for="completed">Completed:</label>
		<input type="checkbox" id="completed" name="completed" 
		checked><br />	 	
	</div>
	<button on:click={savePost} class="btn btn-primary my-2">Save</button>
	<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
</div>
<!--
<input type="text" name="name" id="name" class="form-control"
value= {data.name}  />	
-->