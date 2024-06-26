<script>
	let formState = {signUp: false};

	function toggle() {
		formState.signUp = !formState.signUp;
	}
</script>

<div class="flex-center flex-col min-h-screen w-full gap-0 p-0">
  <div class="bg-white/5 border-2 shadow-xl rounded-2xl flex-center flex-col w-11/12 max-w-sm mb-3 gap-12 p-12">
    <div class="flex-center flex-col gap-0 p-0">
      <h2>Tasks</h2>
      <p class="opacity-50">Simply. Tasks's</p>
    </div>

    <form class="flex-center flex-col w-full p-0">
      {#if formState.signUp == true}
        <input class="placeholder-white/50 bg-white/5 border-2 rounded-xl outline-none flex-center w-full hover:opacity-80 transition-all mb-3 p-3 px-5" type="text" placeholder="Username" required/>
      {/if}
      <input class="placeholder-white/50 bg-white/5 border-2 rounded-xl outline-none flex-center w-full hover:opacity-80 transition-all mb-3 p-3 px-5" type="email" placeholder="Email" required/>
      <input class="placeholder-white/50 bg-white/5 border-2 rounded-xl outline-none flex-center w-full hover:opacity-80 transition-all mb-6 p-3 px-5" type="password" placeholder="Password" required/>

      {#if formState.signUp == true}
        <button class="outline-none btn w-full" type="submit">Sign up</button>
      {:else}
        <button class="outline-none btn w-full" type="submit">Login</button>
      {/if}
    </form>
  </div>

  {#if formState.signUp == true}
    <button on:click={toggle} class="btn-text">Have an account?</button>
  {:else}
    <button on:click={toggle} class="btn-text">Need an account?</button>
  {/if}
</div>
