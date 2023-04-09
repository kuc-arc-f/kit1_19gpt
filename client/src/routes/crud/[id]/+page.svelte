<svelte:head>
<title>Posts</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import Chat from '../Chat';

//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0;
//
console.log("[id]start");
console.log(data);
//console.log(data.item);
item = data.item;
/**
* init proc: 開始
* @param
*
* @return
*/

</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/crud`} class="btn">[ Back ]
	</a>    
    <hr class="my-1" />
    <h1>{data.id}</h1>
    ID: {data.id}
    <hr class="my-1" />
    title: {item.title}
    <p>タスクの内容: {item.content}</p>
    <p>完了状態: {item.completed ? '完了' : '未完了'}</p>    
</div>

<!--
-->
