<script>
	import { auth, db } from '../firebase';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	const provider = new GoogleAuthProvider();

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

<div class="flex items-center justify-center w-full h-screen">
	<button on:click={SignIn}>Sign in with Google</button>
</div>
