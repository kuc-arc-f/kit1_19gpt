<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import CrudCreate from '../CrudCreate';
//
/** @type {import('./$types').PageData} */
export let data;
console.log(data);
let user_id = ""; // ユーザーIDを保持する変数
let title = ""; // タスクのタイトルを保持する変数
let content = ""; // タスクの内容を保持する変数
let completed = false; // タスクの完了状態を保持する変数

/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
		const validLogin: boolean = await LibAuth.validLogin();
//console.log("#validLogin=" + validLogin);
		if(!validLogin) {
			goto("/login");
		}
	} catch (e) {
      console.error(e);
    }	
}
if(typeof(window) !== "undefined"){
	startProc();
}
/**
 * addPost
 * @param
 *
 * @return
 */ 
const addPost = async function () {
	try{
console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
		const result = await CrudCreate.create();
console.log(result);
		if(result) {
			goto(`/crud`);
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}
function addTask() {
	// タスクの追加ボタンがクリックされた際の処理
	if (user_id && title && content) { // 必須項目が入力されているかチェック
		const newTask = { // 新しいタスクのオブジェクトを作成
		user_id: parseInt(user_id), // ユーザーIDを数値に変換して設定
		title: title, // 入力されたタイトルを設定
		content: content, // 入力された内容を設定
		completed: completed // 完了状態を設定
		};
		// TODOリストに新しいタスクを追加
		// ここにTODOリストのデータの更新ロジックを追加する
		resetForm(); // 入力フォームをリセット
	} else {
		alert("必須項目を入力してください。");
	}
}

function resetForm() {
// 入力フォームをリセットする関数
user_id = "";
title = "";
content = "";
completed = false;
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/crud`} class="btn">[ Back ]
	</a>		
	<h1>Create</h1>
	<hr />
	<label>
		ユーザーID:
		<input type="number" id="user_id" name="user_id" bind:value={user_id} />
	</label><br />
	<label>
		タスクのタイトル:
		<input id="title" name="title" bind:value={title} />
	</label><br />
	<label>
		タスクの内容:
		<textarea id="content" name="content" bind:value={content}></textarea>
	</label><br />
	<label>
		完了状態:
		<input type="checkbox" id="completed" name="completed" bind:checked={completed} />
	</label>
	<hr />
	<button on:click={addPost} class="btn btn-primary my-2">Add</button>
	<button type="button" on:click={resetForm}>リセット</button>	
	<hr />
</div>

<!--
	<button type="submit">追加</button>
-->