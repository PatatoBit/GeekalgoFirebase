<script>
	import { auth, db } from '../firebase';
	import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	const provider = new GoogleAuthProvider();

	let isLoggedin;

	auth.onAuthStateChanged((user) => {
		if(user){
			isLoggedin = true;
		} else {
			isLoggedin = false;
		}
	})


	function SignIn() {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}
</script>

{#if isLoggedin}
	 <div class="flex items-center justify-center w-full h-screen">
		 <h1 class="text-6xl">You have Logged in!</h1>
	</div>
{:else}
	 <div class="flex items-center justify-center w-full h-screen">
		 <button on:click={SignIn}>Sign in with Google</button>
	 </div>
{/if}
