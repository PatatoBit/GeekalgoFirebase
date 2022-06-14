<script>
	import { auth, db } from '../firebase';
	import { doc, setDoc } from 'firebase/firestore';
	import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	const provider = new GoogleAuthProvider();

	let isLoggedin;
	let uid;
	let inputValue;

	auth.onAuthStateChanged((user) => {
		if(user){
			isLoggedin = true;
			uid = user.uid;
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

	async function setDocument(){
		const docRef = doc(db, "customers", uid)
		await setDoc(docRef, {
			name: inputValue
		});
	}

</script>

{#if isLoggedin}
	 <div class="flex flex-col items-center justify-center w-full h-screen">
			<button on:click={() => auth.signOut()}>Sign Out</button>
			<input class="flex border-2" type="text" bind:value={inputValue}>
			<button on:click={setDocument}>Submit</button>
	</div>
{:else}
	 <div class="flex items-center justify-center w-full h-screen">
		 <button on:click={SignIn}>Sign in with Google</button>
	 </div>
{/if}
