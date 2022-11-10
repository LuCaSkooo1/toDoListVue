<template>
	<div>
		<h1>Deleted Tasks:</h1>

		<button class="btn" @click="$router.push({ path: '/' })">
			Active Tasks
		</button>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn {
	margin-top: 30px;
	width: 200px;
	height: 50px;
	border-radius: 50rem;
	font-family: sans-serif;
	font-size: 20px;
	background-color: #181818;
	color: #fff;
	font-weight: light;
	border: 2px solid #fff;
	transition: all 300ms;
	animation-name: pulse;
	animation-duration: 3000ms;
	animation-iteration-count: infinite;
}
@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.btn:hover {
	background-color: #fff;
	color: #252525;
}
</style>
